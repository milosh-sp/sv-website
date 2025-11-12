import type { CandidateFormData } from '@/types/CandidateFormData.types'

interface CandidateFormContextType {
  formData: CandidateFormData
  currentStep: number
  errors: Record<string, string>
  isSubmitting: boolean
  submitStatus: 'idle' | 'success' | 'error'

  // Form data updates
  updateFormData: (data: Partial<CandidateFormData>) => void
  setFormData: (data: CandidateFormData) => void

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

export type { CandidateFormContextType }

