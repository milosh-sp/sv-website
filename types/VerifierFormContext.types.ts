import type { VerifierFormData } from '@/types/VerifierFormData.types'
import type { StepId } from './netlify.types'

interface VerifierFormContextType {
  formData: VerifierFormData
  currentStep: StepId
  errors: Record<string, string>
  isSubmitting: boolean
  submitStatus: 'idle' | 'success' | 'error'

  // Form data updates
  updateFormData: (data: Partial<VerifierFormData>) => void
  setFormData: (data: VerifierFormData) => void

  // Step navigation
  goToStep: (step: StepId) => void
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

export type { VerifierFormContextType }
