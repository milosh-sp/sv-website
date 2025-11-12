/**
 * Custom hook for managing Candidate Waitlist Form
 * Reuses the generic useForm hook with candidate-specific validators
 */

import { useForm } from '@/hooks/useForm'
import {
  validateEmail,
  validateLinkedIn,
  validateGitHub,
} from '@/lib/validation'
import { validateCandidateForm } from '@/lib/waitlistFormValidators'
import type { CandidateFormData } from '@/types/CandidateFormData.types'
import { INITIAL_CANDIDATE_FORM_DATA } from '@/types/CandidateFormData.types'

interface UseCandidateFormConfig {
  onSuccess?: () => void
  debounceDelay?: number
}

export function useCandidateForm(config?: UseCandidateFormConfig) {
  const form = useForm<CandidateFormData>({
    initialData: INITIAL_CANDIDATE_FORM_DATA,
    fields: [
      { name: 'email', validator: validateEmail },
      { name: 'linkedIn', validator: validateLinkedIn },
      { name: 'github', validator: validateGitHub },
    ],
    validateForm: validateCandidateForm,
    onSubmit: async (formData, honeypotValue, formStartTime) => {
      // Skip API requests as per requirements
      // In production, this would submit to Netlify function
      console.log('Candidate form submitted:', {
        formData,
        honeypotValue,
        formStartTime,
      })

      // Simulate successful submission
      return { success: true }
    },
    onSuccess: config?.onSuccess,
    debounceDelay: config?.debounceDelay,
  })

  return form
}
