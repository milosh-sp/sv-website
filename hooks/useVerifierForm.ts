/**
 * Custom hook for managing Verifier Waitlist Form
 * Reuses the generic useForm hook with verifier-specific validators
 */

import { useForm } from '@/hooks/useForm'
import { submitUnifiedForm } from '@/lib/api'
import { validateEmail, validateLinkedIn, validateUrl } from '@/lib/validation'
import { validateVerifierForm } from '@/lib/waitlistFormValidators'
import type { VerifierFormData } from '@/types/VerifierFormData.types'
import { INITIAL_VERIFIER_FORM_DATA } from '@/types/VerifierFormData.types'
import type { VerifierFormSubmission } from '@/types/netlify.types'

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
      { name: 'githubGitlabUrl', validator: validateUrl },
    ],
    validateForm: validateVerifierForm,
    onSubmit: async (formData, honeypotValue, formStartTime) => {
      // Submit to unified Netlify function with verifier-specific fields
      return submitUnifiedForm({
        formType: 'verifier',
        email: formData.email,
        linkedin: formData.linkedIn,
        githubGitlabUrl: formData.githubGitlabUrl,
        skillAreas: formData.skillAreas,
        technicalSkills: formData.technicalSkills,
        yearsOfExperience: formData.yearsOfExperience,
        hoursPerWeek: formData.hoursPerWeek,
        professionalStatus: formData.professionalStatus,
        coachingMentoring: formData.coachingMentoring,
        verifierMotivations: formData.verifierMotivations,
        verifierMotivationOther: formData.verifierMotivationOther,
        professionalFrustration: formData.professionalFrustration,
        professionalFrustrationOther: formData.professionalFrustrationOther,
        website: honeypotValue,
        form_start_time: formStartTime,
      } as VerifierFormSubmission)
    },
    onSuccess: config?.onSuccess,
    debounceDelay: config?.debounceDelay,
  })

  return form
}
