import { useCallback, useState } from 'react'
import { useDebouncedCallback } from '@/hooks/useDebounce'
import { useHoneypot } from '@/hooks/useHoneypot'
import type { ValidationResult } from '@/lib/validation'

/**
 * Configuration for a single form field
 */
export interface FormFieldConfig<TFieldName extends string> {
  name: TFieldName
  validator: (value: string) => ValidationResult
}

/**
 * Configuration for the entire form
 */
export interface UseFormConfig<TFormData extends Record<string, string>> {
  /** Initial form data */
  initialData: TFormData
  /** Field configurations with validators */
  fields: FormFieldConfig<keyof TFormData & string>[]
  /** Form-level validation function */
  validateForm: (data: TFormData) => {
    isValid: boolean
    errors: Record<string, string>
  }
  /** API submission function */
  onSubmit: (
    data: TFormData,
    honeypotValue: string,
    formStartTime: string
  ) => Promise<{ success: boolean; error?: string }>
  /** Optional callback after successful submission */
  onSuccess?: () => void
  /** Debounce delay for field validation in ms */
  debounceDelay?: number
}

/**
 * Return type for the useForm hook
 */
export interface UseFormReturn<TFormData extends Record<string, string>> {
  formData: TFormData
  errors: Record<string, string>
  isSubmitting: boolean
  submitStatus: 'idle' | 'success' | 'error'
  honeypotValue: string
  formStartTime: string
  handleFieldChange: (fieldName: keyof TFormData, value: string) => void
  handleHoneypotChange: (value: string) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  validateForm: () => boolean
  setFormData: (data: TFormData | ((prev: TFormData) => TFormData)) => void
  setErrors: (
    errors:
      | Record<string, string>
      | ((prev: Record<string, string>) => Record<string, string>)
  ) => void
  setSubmitStatus: (status: 'idle' | 'success' | 'error') => void
  setIsSubmitting: (isSubmitting: boolean) => void
  setHoneypotValue: (value: string) => void
  resetHoneypot: () => void
}

/**
 * Generic form hook that handles common form logic with dependency injection
 * Implements Dependency Inversion and Single Responsibility principles
 *
 * @template TFormData - The shape of the form data (must have string values)
 * @param config - Configuration object with validators, initial data, and submission handler
 * @returns Form state and handlers
 *
 * @example
 * ```ts
 * const form = useForm({
 *   initialData: { email: '', name: '' },
 *   fields: [
 *     { name: 'email', validator: validateEmail },
 *     { name: 'name', validator: validateName },
 *   ],
 *   validateForm: validateContactForm,
 *   onSubmit: submitContactForm,
 * })
 * ```
 */
export function useForm<TFormData extends Record<string, string>>(
  config: UseFormConfig<TFormData>
): UseFormReturn<TFormData> {
  const {
    initialData,
    fields,
    validateForm: validateFormFn,
    onSubmit,
    onSuccess,
    debounceDelay = 600,
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
  const validatorMap = useCallback(() => {
    const map = new Map<string, (value: string) => ValidationResult>()
    fields.forEach((field) => {
      map.set(field.name, field.validator)
    })
    return map
  }, [fields])

  // Validate individual field (non-debounced for immediate use)
  const validateFieldImmediate = useCallback(
    (fieldName: string, value: string) => {
      const validator = validatorMap().get(fieldName)
      if (!validator) return

      const validation = validator(value)
      setErrors((prev) => ({
        ...prev,
        [fieldName]: validation.isValid
          ? ''
          : validation.message || 'Invalid input',
      }))
    },
    [validatorMap]
  )

  // Debounced version for real-time validation during typing
  const debouncedValidateField = useDebouncedCallback(
    validateFieldImmediate,
    debounceDelay
  )

  // Form-level validation with honeypot check
  const validateForm = useCallback(() => {
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
  }, [formData, validateFormFn, validateSubmission])

  // Generic field change handler
  const handleFieldChange = useCallback(
    (fieldName: keyof TFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [fieldName]: value }))

      // Clear error immediately when user starts typing
      if (errors[fieldName as string]) {
        setErrors((prev) => ({ ...prev, [fieldName as string]: '' }))
      }

      // Trigger debounced validation
      debouncedValidateField(fieldName as string, value)
    },
    [errors, debouncedValidateField]
  )

  // Honeypot change handler
  const handleHoneypotChange = useCallback(
    (value: string) => {
      setHoneypotValue(value)
    },
    [setHoneypotValue]
  )

  // Form submission handler
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
        const result = await onSubmit(formData, honeypotValue, formStartTime)

        if (result.success) {
          setSubmitStatus('success')
          setFormData(initialData)
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
    },
    [
      formData,
      honeypotValue,
      formStartTime,
      validateForm,
      initialData,
      resetHoneypot,
      onSubmit,
      onSuccess,
    ]
  )

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
