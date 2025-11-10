import type { ValidationResult } from '@/lib/validation'

interface FormFieldConfig<TFieldName extends string> {
  name: TFieldName
  validator: (value: string) => ValidationResult
}

interface UseFormConfig<TFormData extends Record<string, string>> {
  initialData: TFormData
  fields: FormFieldConfig<keyof TFormData & string>[]
  validateForm: (data: TFormData) => {
    isValid: boolean
    errors: Record<string, string>
  }
  onSubmit: (
    data: TFormData,
    honeypotValue: string,
    formStartTime: string
  ) => Promise<{ success: boolean; error?: string }>
  onSuccess?: () => void
  debounceDelay?: number
}

interface UseFormReturn<TFormData extends Record<string, string>> {
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

export type { FormFieldConfig, UseFormConfig, UseFormReturn }
