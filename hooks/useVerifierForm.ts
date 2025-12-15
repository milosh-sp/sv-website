import { useForm } from '@/hooks/useForm'
import { submitUnifiedForm } from '@/lib/api'
import { referralCodeKey } from '@/lib/consts'
import {
  validateEmail,
  validateGitHubGitlab,
  validateLinkedIn,
} from '@/lib/validation'
import { validateVerifierForm } from '@/lib/waitlistFormValidators'
import type { VerifierFormData } from '@/types/VerifierFormData.types'
import { INITIAL_VERIFIER_FORM_DATA } from '@/types/VerifierFormData.types'
import type { StepId, VerifierFormSubmission } from '@/types/netlify.types'

interface UseVerifierFormConfig {
  onSuccess?: () => void
  debounceDelay?: number
  currentStep?: StepId
}

export function useVerifierForm(config?: UseVerifierFormConfig) {
  const form = useForm<VerifierFormData>({
    initialData: INITIAL_VERIFIER_FORM_DATA,
    fields: [
      { name: 'email', validator: validateEmail },
      { name: 'linkedIn', validator: validateLinkedIn },
      { name: 'githubGitlabUrl', validator: validateGitHubGitlab },
    ],
    validateForm: validateVerifierForm,
    onSubmit: async (formData, honeypotValue, formStartTime) => {
      const referralCode = localStorage.getItem(referralCodeKey) ?? ''

      // Submit to unified Netlify function with verifier-specific fields
      return submitUnifiedForm({
        formType: 'verifier',
        contactName: formData.name,
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
        referredByReferralCode: referralCode,
        formStep: config?.currentStep,
        newsLetterOptIn: formData.newsletterOptIn,
        privacyPolicyAgreed: new Date().toISOString(),
      } as VerifierFormSubmission)
    },
    onSuccess: config?.onSuccess,
    debounceDelay: config?.debounceDelay,
  })

  return form
}
