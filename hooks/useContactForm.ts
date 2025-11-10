import { useCallback } from 'react'
import { useForm } from '@/hooks/useForm'
import { submitContactForm } from '@/lib/api'
import {
  validateContactForm,
  validateEmail,
  validateMessage,
  validateName,
} from '@/lib/validation'
import type {
  ContactFormData,
  ContactFormSubmissionData,
} from '@/types/ContactForm.types'

/**
 * Custom hook for managing contact form state and validation
 * Uses the generic useForm hook with dependency injection for validators
 */
export function useContactForm() {
  // Use generic form hook with dependency injection
  const form = useForm<ContactFormData>({
    initialData: {
      email: '',
      name: '',
      message: '',
    },
    fields: [
      { name: 'email', validator: validateEmail },
      { name: 'name', validator: validateName },
      { name: 'message', validator: validateMessage },
    ],
    validateForm: validateContactForm,
    onSubmit: async (formData, honeypotValue, formStartTime) => {
      // Submit to Netlify function with contact-specific fields
      return submitContactForm({
        email: formData.email,
        fields: {
          name: formData.name,
          message: formData.message,
          website: honeypotValue,
          form_start_time: formStartTime,
        },
      } as ContactFormSubmissionData)
    },
    onSuccess: () => {
      // Reset status after successful submission
      setTimeout(() => {
        form.setSubmitStatus('idle')
      }, 5000)
    },
  })

  // Create field-specific change handlers for backward compatibility
  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      form.handleFieldChange('email', e.target.value)
    },
    [form]
  )

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      form.handleFieldChange('name', e.target.value)
    },
    [form]
  )

  const handleMessageChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      form.handleFieldChange('message', e.target.value)
    },
    [form]
  )

  const handleHoneypotChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      form.handleHoneypotChange(e.target.value)
    },
    [form]
  )

  return {
    formData: form.formData,
    errors: form.errors,
    isSubmitting: form.isSubmitting,
    submitStatus: form.submitStatus,
    honeypotValue: form.honeypotValue,
    handleEmailChange,
    handleNameChange,
    handleMessageChange,
    handleHoneypotChange,
    handleSubmit: form.handleSubmit,
    validateForm: form.validateForm,
    setFormData: form.setFormData,
    setErrors: form.setErrors,
    setSubmitStatus: form.setSubmitStatus,
    setIsSubmitting: form.setIsSubmitting,
    setHoneypotValue: form.setHoneypotValue,
    resetHoneypot: form.resetHoneypot,
    formStartTime: form.formStartTime,
  }
}
