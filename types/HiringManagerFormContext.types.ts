import type { HiringManagerFormData } from '@/types/HiringManagerFormData.types'

interface HiringManagerFormContextType {
  formData: HiringManagerFormData
  currentStep: number
  errors: Record<string, string>
  isSubmitting: boolean
  submitStatus: 'idle' | 'success' | 'error'

  // Form data updates
  updateFormData: (data: Partial<HiringManagerFormData>) => void
  setFormData: (data: HiringManagerFormData) => void

  // Step navigation
  goToStep: (step: number) => void
  nextStep: () => void
  previousStep: () => void

  // Error management
  setErrors: (errors: Record<string, string>) => void
  clearErrors: () => void

  // Submission
  setIsSubmitting: (value: boolean) => void
  setSubmitStatus: (status: 'idle' | 'success' | 'error') => void

  // Reset
  resetForm: () => void
}

export type { HiringManagerFormContextType }
