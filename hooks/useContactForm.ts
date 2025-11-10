import { useDebouncedCallback } from '@/hooks/useDebounce'
import { useHoneypot } from '@/hooks/useHoneypot'
import { submitContactForm } from '@/lib/api'
import {
  validateEmail,
  validateName,
  validateMessage,
  validateContactForm,
} from '@/lib/validation'
import type {
  ContactFormData,
  ContactFormErrors,
  ContactSubmitStatus,
  ContactFormSubmissionData,
} from '@/types/ContactForm.types'
import { useCallback, useEffect, useRef, useState } from 'react'

type ContactFormFieldName = 'email' | 'name' | 'message'

/**
 * Custom hook for managing contact form state and validation
 */
export function useContactForm() {
  // Form data state
  const [formData, setFormData] = useState<ContactFormData>({
    email: '',
    name: '',
    message: '',
  })

  // Form errors state
  const [errors, setErrors] = useState<ContactFormErrors>({})

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<ContactSubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  // Honeypot for bot detection
  const {
    honeypotValue,
    setHoneypotValue,
    getFormStartTime,
    validateSubmission,
  } = useHoneypot()

  // Track if form has been touched
  const touchedFields = useRef<Set<ContactFormFieldName>>(new Set())

  /**
   * Validate a single field
   */
  const validateField = useCallback(
    (fieldName: ContactFormFieldName, value: string) => {
      let validationResult: ReturnType<typeof validateEmail>

      switch (fieldName) {
        case 'email':
          validationResult = validateEmail(value)
          break
        case 'name':
          validationResult = validateName(value)
          break
        case 'message':
          validationResult = validateMessage(value)
          break
        default:
          return
      }

      setErrors((prev) => ({
        ...prev,
        [fieldName]: validationResult.isValid
          ? undefined
          : validationResult.message,
      }))
    },
    []
  )

  /**
   * Debounced validation for better UX
   */
  const debouncedValidate = useDebouncedCallback(
    (fieldName: ContactFormFieldName, value: string) => {
      if (touchedFields.current.has(fieldName)) {
        validateField(fieldName, value)
      }
    },
    300
  )

  /**
   * Handle email change
   */
  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setFormData((prev) => ({ ...prev, email: value }))
      touchedFields.current.add('email')
      debouncedValidate('email', value)
    },
    [debouncedValidate]
  )

  /**
   * Handle name change
   */
  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setFormData((prev) => ({ ...prev, name: value }))
      touchedFields.current.add('name')
      debouncedValidate('name', value)
    },
    [debouncedValidate]
  )

  /**
   * Handle message change
   */
  const handleMessageChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value
      setFormData((prev) => ({ ...prev, message: value }))
      touchedFields.current.add('message')
      debouncedValidate('message', value)
    },
    [debouncedValidate]
  )

  /**
   * Handle honeypot change
   */
  const handleHoneypotChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setHoneypotValue(e.target.value)
    },
    [setHoneypotValue]
  )

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      // Mark all fields as touched
      touchedFields.current.add('email')
      touchedFields.current.add('name')
      touchedFields.current.add('message')

      // Validate all fields
      const validationResult = validateContactForm(formData)

      if (!validationResult.isValid) {
        setErrors(validationResult.errors)
        return
      }

      // Check honeypot
      const honeypotValidation = validateSubmission()
      if (!honeypotValidation.isValid) {
        setSubmitStatus('error')
        setErrorMessage('Invalid submission detected.')
        return
      }

      setIsSubmitting(true)
      setSubmitStatus('submitting')
      setErrorMessage('')

      try {
        // Prepare submission data
        const submissionData: ContactFormSubmissionData = {
          email: formData.email.trim(),
          fields: {
            name: formData.name.trim(),
            message: formData.message.trim(),
            website: honeypotValue,
            form_start_time: getFormStartTime(),
          },
        }

        // Submit to API
        const response = await submitContactForm(submissionData)

        if (response.success) {
          setSubmitStatus('success')
          // Reset form
          setFormData({
            email: '',
            name: '',
            message: '',
          })
          setErrors({})
          touchedFields.current.clear()
        } else {
          setSubmitStatus('error')
          setErrorMessage(
            response.error || 'Something went wrong. Please try again.'
          )
        }
      } catch (error) {
        console.error('Contact form submission error:', error)
        setSubmitStatus('error')
        setErrorMessage('Network error. Please check your connection.')
      } finally {
        setIsSubmitting(false)
      }
    },
    [formData, honeypotValue, validateSubmission, getFormStartTime]
  )

  /**
   * Reset submit status after showing success/error message
   */
  useEffect(() => {
    if (submitStatus === 'success' || submitStatus === 'error') {
      const timer = setTimeout(() => {
        if (submitStatus === 'success') {
          setSubmitStatus('idle')
        }
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    errorMessage,
    honeypotValue,
    handleEmailChange,
    handleNameChange,
    handleMessageChange,
    handleHoneypotChange,
    handleSubmit,
  }
}
