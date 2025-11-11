/**
 * Custom hook for managing Verifier Waitlist Form
 * Reuses the generic useForm hook with verifier-specific validators
 */

import { useForm } from '@/hooks/useForm'
import {
  validateEmail,
  validateLinkedIn,
  validateGitHub,
} from '@/lib/validation'
import { validateVerifierForm } from '@/lib/WaitlistValidation'
import type { VerifierFormData } from '@/types/VerifierFormData.types'
import { INITIAL_VERIFIER_FORM_DATA } from '@/types/VerifierFormData.types'

interface UseVerifierFormConfig {
  onSuccess?: () => void
  debounceDelay?: number
}

export function useVerifierForm(config?: UseVerifierFormConfig) {
  const form = useForm<VerifierFormData>({
    initialData: INITIAL_VERIFIER_FORM_DATA,
    fields: [
      { name: 'email', validator: validateEmail },
      { name: 'linkedIn', validator: validateLinkedIn },
      { name: 'github', validator: validateGitHub },
    ],
    validateForm: validateVerifierForm,
    onSubmit: async (formData, honeypotValue, formStartTime) => {
      // Skip API requests as per requirements
      // In production, this would submit to Netlify function
      console.log('Verifier form submitted:', {
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
