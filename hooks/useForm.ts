import { useState } from 'react'

import { useDebouncedCallback } from '@/hooks/useDebounce'
import { useHoneypot } from '@/hooks/useHoneypot'
import type { ValidationResult } from '@/types/Validation.types'
import type { UseFormConfig, UseFormReturn } from '@/types/UseForm.types'

export function useForm<TFormData extends Record<string, string>>(
  config: UseFormConfig<TFormData>
): UseFormReturn<TFormData> {
  const {
    initialData,
    fields,
    validateForm: validateFormFn,
    onSubmit,
    onSuccess,
    debounceDelay = 1_500,
  } = config

  // State management
  const [formData, setFormData] = useState<TFormData>(initialData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')
  const [formStartTime] = useState(() => new Date().toISOString())

  // Honeypot bot detection
  const { honeypotValue, setHoneypotValue, validateSubmission, resetHoneypot } =
    useHoneypot()

  // Create a map of field validators for quick lookup
  const validatorMap = () => {
    const map = new Map<string, (value: string) => ValidationResult>()
    fields.forEach((field) => {
      map.set(field.name, field.validator)
    })
    return map
  }

  // Validate individual field (non-debounced for immediate use)
  const validateFieldImmediate = (fieldName: string, value: string) => {
    const validator = validatorMap().get(fieldName)
    if (!validator) return

    const validation = validator(value)
    setErrors((prev) => ({
      ...prev,
      [fieldName]: validation.isValid
        ? ''
        : validation.message || 'Invalid input',
    }))
  }

  // Debounced version for real-time validation during typing
  const debouncedValidateField = useDebouncedCallback(
    validateFieldImmediate,
    debounceDelay
  )

  // Form-level validation with honeypot check
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Honeypot validation
    const honeypotValidation = validateSubmission()
    if (!honeypotValidation.isValid) {
      // eslint-disable-next-line no-console
      console.log('Bot detected:', honeypotValidation.reason)
      newErrors.honeypot = 'Invalid submission detected'
      setErrors(newErrors)
      return false
    }

    // Form-level validation
    const formValidation = validateFormFn(formData)
    if (!formValidation.isValid) {
      Object.assign(newErrors, formValidation.errors)
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Generic field change handler
  const handleFieldChange = (fieldName: keyof TFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }))

    // Clear error immediately when user starts typing
    if (errors[fieldName as string]) {
      setErrors((prev) => ({ ...prev, [fieldName as string]: '' }))
    }

    // Trigger debounced validation
    debouncedValidateField(fieldName as string, value)
  }

  // Honeypot change handler
  const handleHoneypotChange = (value: string) => {
    setHoneypotValue(value)
  }

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitStatus('idle')

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const result = await onSubmit(formData, honeypotValue, formStartTime)

      if (result.success) {
        setSubmitStatus('success')
        resetHoneypot()
        onSuccess?.()
      } else {
        // eslint-disable-next-line no-console
        console.error('Form submission failed:', result.error)
        setSubmitStatus('error')
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
  }

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    honeypotValue,
    formStartTime,
    handleFieldChange,
    handleHoneypotChange,
    handleSubmit,
    validateForm,
    setFormData,
    setErrors,
    setSubmitStatus,
    setIsSubmitting,
    setHoneypotValue,
    resetHoneypot,
  }
}
