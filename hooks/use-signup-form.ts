import { useSignupModal } from '@/contexts/SignupModalContext'
import { useDebouncedCallback } from '@/hooks/use-debounce'
import { useHoneypot } from '@/hooks/use-honeypot'
import { mapUserTypeToApiFormat, submitForm } from '@/lib/api'
import {
  validateEmail,
  validateGitHub,
  validateLinkedIn,
  validateSignupForm,
} from '@/lib/validation'
import type {
  FormData,
  FormErrors,
  FormFieldName,
  FormSubmissionData,
  SubmitStatus,
} from '@/types/signup-modal'
import { useCallback, useEffect, useRef, useState } from 'react'

export const useSignupForm = () => {
  const { isOpen, userType, closeModal } = useSignupModal()
  const [formData, setFormData] = useState<FormData>({
    email: '',
    linkedin: '',
    github: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const [formStartTime] = useState(() => new Date().toISOString())
  const firstInputRef = useRef<HTMLInputElement>(null)

  // Honeypot bot detection
  const { honeypotValue, setHoneypotValue, validateSubmission, resetHoneypot } =
    useHoneypot()

  // Validate individual field and update errors (non-debounced version for immediate use)
  const validateFieldImmediate = useCallback(
    (fieldName: FormFieldName, value: string) => {
      let validation:
        | ReturnType<typeof validateEmail>
        | ReturnType<typeof validateLinkedIn>
        | ReturnType<typeof validateGitHub>

      if (fieldName === 'email') {
        validation = validateEmail(value)
      } else if (fieldName === 'linkedin') {
        validation = validateLinkedIn(value)
      } else {
        validation = validateGitHub(value)
      }

      setErrors((prev) => ({
        ...prev,
        [fieldName]: validation.isValid
          ? ''
          : validation.message || 'Invalid input',
      }))
    },
    []
  )

  // Debounced version for real-time validation during typing
  const debouncedValidateField = useDebouncedCallback(
    validateFieldImmediate,
    600
  )

  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {}

    // Honeypot validation using the hook
    const honeypotValidation = validateSubmission()
    if (!honeypotValidation.isValid) {
      // eslint-disable-next-line no-console
      console.log('Bot detected:', honeypotValidation.reason)
      newErrors.honeypot = 'Invalid submission detected'
      setErrors(newErrors)
      return false
    }

    // Use centralized validation
    const formValidation = validateSignupForm(formData)
    if (!formValidation.isValid) {
      Object.assign(newErrors, formValidation.errors)
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData, validateSubmission])

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setSubmitStatus('idle')

      if (!validateForm()) {
        return
      }

      setIsSubmitting(true)
      setErrors({})

      try {
        // Submit to Netlify function
        const result: { success: boolean; error?: string } = await submitForm({
          email: formData.email,
          fields: {
            linkedin: formData.linkedin,
            github: formData.github,
            user_type: mapUserTypeToApiFormat(userType),
            source: 'signup-modal',
            website: honeypotValue, // Include honeypot field
            form_start_time: formStartTime, // Include timing for server validation
          },
        } as FormSubmissionData)

        if (result.success) {
          setSubmitStatus('success')
          setFormData({ email: '', linkedin: '', github: '' })
          resetHoneypot() // Reset honeypot state

          // Close modal after successful submission
          setTimeout(() => {
            closeModal()
            setSubmitStatus('idle')
          }, 6_000)
        } else {
          // eslint-disable-next-line no-console
          console.error('Form submission failed:', result.error)
          setSubmitStatus('error')
          // Set specific error message if available
          if (result.error) {
            setErrors({ submit: result.error })
          }
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Form submission error:', error)
        setSubmitStatus('error')
        setErrors({
          submit: 'An unexpected error occurred. Please try again.',
        })
      } finally {
        setIsSubmitting(false)
      }
    },
    [
      formData,
      userType,
      honeypotValue,
      formStartTime,
      validateForm,
      closeModal,
      resetHoneypot,
    ]
  )

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setFormData((prev) => ({ ...prev, email: value }))

      // Clear error immediately when user starts typing
      if (errors.email) {
        setErrors((prev) => ({ ...prev, email: '' }))
      }

      // Trigger debounced validation
      debouncedValidateField('email', value)
    },
    [errors.email, debouncedValidateField]
  )

  const handleLinkedInChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setFormData((prev) => ({ ...prev, linkedin: value }))

      // Clear error immediately when user starts typing
      if (errors.linkedin) {
        setErrors((prev) => ({ ...prev, linkedin: '' }))
      }

      // Trigger debounced validation
      debouncedValidateField('linkedin', value)
    },
    [errors.linkedin, debouncedValidateField]
  )

  const handleGitHubChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setFormData((prev) => ({ ...prev, github: value }))

      // Clear error immediately when user starts typing
      if (errors.github) {
        setErrors((prev) => ({ ...prev, github: '' }))
      }

      // Trigger debounced validation
      debouncedValidateField('github', value)
    },
    [errors.github, debouncedValidateField]
  )

  const handleHoneypotChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setHoneypotValue(e.target.value)
    },
    [setHoneypotValue]
  )

  // Focus management for accessibility and honeypot reset
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      // Small delay to ensure modal is fully rendered
      const timer = setTimeout(() => {
        firstInputRef.current?.focus()
      }, 100)
      return () => clearTimeout(timer)
    }

    if (!isOpen) {
      // Reset honeypot when modal closes
      resetHoneypot()
    }

    return undefined
  }, [isOpen, resetHoneypot])

  // Keyboard event handling for accessibility
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeModal()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, closeModal])

  return {
    formData,
    isSubmitting,
    errors,
    submitStatus,
    honeypotValue,
    handleEmailChange,
    handleLinkedInChange,
    handleGitHubChange,
    handleHoneypotChange,
    handleSubmit,
    closeModal,
    isOpen,
    userType,
    validateForm,
    setFormData,
    setErrors,
    setSubmitStatus,
    setIsSubmitting,
    setHoneypotValue,
    resetHoneypot,
    formStartTime,
    firstInputRef,
  }
}
