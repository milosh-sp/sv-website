/**
 * Generic hook for managing Waitlist Forms
 * Wraps useForm<T> with persona-specific validators and configuration
 * Eliminates code duplication across Candidate, Verifier, and Hiring Manager forms
 *
 * Usage:
 * const form = useWaitlistForm<CandidateFormData>({
 *   initialData: INITIAL_CANDIDATE_FORM_DATA,
 *   fields: [
 *     { name: 'email', validator: validateEmail },
 *     { name: 'linkedIn', validator: validateLinkedIn },
 *   ],
 *   validateForm: validateCandidateForm,
 *   onSuccess: () => { ... },
 * })
 */

import { useForm } from '@/hooks/useForm'
import type { UseFormReturn } from '@/types/UseForm.types'
import type { ValidationResult } from '@/lib/validation'

interface FormFieldConfig<TFieldName extends string> {
  name: TFieldName
  validator: (value: string) => ValidationResult
}

interface UseWaitlistFormConfig<TFormData extends Record<string, string>> {
  initialData: TFormData
  fields: FormFieldConfig<keyof TFormData & string>[]
  validateForm: (data: TFormData) => {
    isValid: boolean
    errors: Record<string, string>
  }
  onSuccess?: () => void
  debounceDelay?: number
}

/**
 * Generic waitlist form hook
 * Provides consistent form handling across all waitlist personas
 */
export function useWaitlistForm<TFormData extends Record<string, string>>(
  config: UseWaitlistFormConfig<TFormData>
): UseFormReturn<TFormData> {
  const { initialData, fields, validateForm, onSuccess, debounceDelay } = config

  // Use the generic form hook with waitlist-specific configuration
  const form = useForm<TFormData>({
    initialData,
    fields,
    validateForm,
    onSubmit: async (formData, honeypotValue, formStartTime) => {
      // Skip API requests as per requirements
      // In production, this would submit to Netlify function
      console.log('Waitlist form submitted:', {
        formData,
        honeypotValue,
        formStartTime,
      })

      // Simulate successful submission
      return { success: true }
    },
    onSuccess,
    debounceDelay,
  })

  return form
}
