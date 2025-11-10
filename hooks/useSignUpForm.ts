import { useEffect, useRef } from 'react'

import { useSignupModal } from '@/contexts/SignupModalContext'
import { useForm } from '@/hooks/useForm'
import { submitForm } from '@/lib/api'
import {
  validateEmail,
  validateGitHub,
  validateLinkedIn,
  validateSignupForm,
} from '@/lib/validation'
import type { FormData, FormSubmissionData } from '@/types/SignUpModal.types'

export const useSignupForm = () => {
  const { isOpen, userType, closeModal } = useSignupModal()
  const firstInputRef = useRef<HTMLInputElement>(null)

  // Use generic form hook with dependency injection
  const form = useForm<FormData>({
    initialData: {
      email: '',
      linkedin: '',
      github: '',
    },
    fields: [
      { name: 'email', validator: validateEmail },
      { name: 'linkedin', validator: validateLinkedIn },
      { name: 'github', validator: validateGitHub },
    ],
    validateForm: validateSignupForm,
    onSubmit: async (formData, honeypotValue, formStartTime) => {
      // Submit to Netlify function with signup-specific fields
      return submitForm({
        email: formData.email,
        fields: {
          linkedin: formData.linkedin,
          github: formData.github,
          user_type: userType,
          source: 'signup-modal',
          website: honeypotValue,
          form_start_time: formStartTime,
        },
      } as FormSubmissionData)
    },
    onSuccess: () => {
      // Close modal after successful submission
      setTimeout(() => {
        closeModal()
        form.setSubmitStatus('idle')
      }, 6_000)
    },
  })

  // Create field-specific change handlers for backward compatibility
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.handleFieldChange('email', e.target.value)
  }

  const handleLinkedInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.handleFieldChange('linkedin', e.target.value)
  }

  const handleGitHubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.handleFieldChange('github', e.target.value)
  }

  const handleHoneypotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.handleHoneypotChange(e.target.value)
  }

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
      form.resetHoneypot()
    }

    return undefined
  }, [isOpen, form])

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
    formData: form.formData,
    isSubmitting: form.isSubmitting,
    errors: form.errors,
    submitStatus: form.submitStatus,
    honeypotValue: form.honeypotValue,
    handleEmailChange,
    handleLinkedInChange,
    handleGitHubChange,
    handleHoneypotChange,
    handleSubmit: form.handleSubmit,
    closeModal,
    isOpen,
    userType,
    validateForm: form.validateForm,
    setFormData: form.setFormData,
    setErrors: form.setErrors,
    setSubmitStatus: form.setSubmitStatus,
    setIsSubmitting: form.setIsSubmitting,
    setHoneypotValue: form.setHoneypotValue,
    resetHoneypot: form.resetHoneypot,
    formStartTime: form.formStartTime,
    firstInputRef,
  }
}
