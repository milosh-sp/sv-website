/**
 * Custom hook for managing Hiring Manager Waitlist Form
 * Reuses the generic useForm hook with hiring manager-specific validators
 * Note: LinkedIn is NOT required for Hiring Managers
 */

import { useForm } from '@/hooks/useForm'
import { validateEmail, validateGitHub } from '@/lib/validation'
import { validateHiringManagerForm } from '@/lib/waitlistFormValidators'
import type { HiringManagerFormData } from '@/types/HiringManagerFormData.types'
import { INITIAL_HIRING_MANAGER_FORM_DATA } from '@/types/HiringManagerFormData.types'

interface UseHiringManagerFormConfig {
  onSuccess?: () => void
  debounceDelay?: number
}

export function useHiringManagerForm(config?: UseHiringManagerFormConfig) {
  const form = useForm<HiringManagerFormData>({
    initialData: INITIAL_HIRING_MANAGER_FORM_DATA,
    fields: [
      { name: 'email', validator: validateEmail },
      { name: 'github', validator: validateGitHub },
    ],
    validateForm: validateHiringManagerForm,
    onSubmit: async (formData, honeypotValue, formStartTime) => {
      // Skip API requests as per requirements
      // In production, this would submit to Netlify function
      console.log('Hiring Manager form submitted:', {
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
