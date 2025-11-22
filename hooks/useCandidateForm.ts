import { useForm } from '@/hooks/useForm'
import { submitUnifiedForm } from '@/lib/api'
import type { StepId } from '@/lib/stepIdentifiers'
import {
  validateEmail,
  validateGitHubGitlab,
  validateLinkedIn,
} from '@/lib/validation'
import { validateCandidateForm } from '@/lib/waitlistFormValidators'
import type { CandidateFormData } from '@/types/CandidateFormData.types'
import { INITIAL_CANDIDATE_FORM_DATA } from '@/types/CandidateFormData.types'
import type { CandidateFormSubmission } from '@/types/netlify.types'

interface UseCandidateFormConfig {
  onSuccess?: () => void
  debounceDelay?: number
  currentStep?: StepId
}

export function useCandidateForm(config?: UseCandidateFormConfig) {
  const form = useForm<CandidateFormData>({
    initialData: INITIAL_CANDIDATE_FORM_DATA,
    fields: [
      { name: 'email', validator: validateEmail },
      { name: 'linkedIn', validator: validateLinkedIn },
      { name: 'githubGitlabUrl', validator: validateGitHubGitlab },
    ],
    validateForm: validateCandidateForm,
    onSubmit: async (formData, honeypotValue, formStartTime) => {
      // Submit to unified Netlify function with candidate-specific fields
      return submitUnifiedForm({
        formType: 'candidate',
        name: formData.name,
        email: formData.email,
        linkedin: formData.linkedIn,
        githubGitlabUrl: formData.githubGitlabUrl,
        skillAreas: formData.skillAreas,
        technicalSkills: formData.technicalSkills,
        professionalStatus: formData.professionalStatus,
        techCommunityMembership: formData.techCommunityMembership,
        techCommunityDetails: formData.techCommunityDetails,
        skillValidationConfidence: formData.skillValidationConfidence,
        jobSearchChallenges: formData.jobSearchChallenges,
        jobSearchChallengeOther: formData.jobSearchChallengeOther,
        valuableOutcomes: formData.valuableOutcomes,
        valuableOutcomeOther: formData.valuableOutcomeOther,
        website: honeypotValue,
        form_start_time: formStartTime,
        referredByReferralCode: formData.referredByReferralCode,
        formStep: config?.currentStep,
      } as CandidateFormSubmission)
    },
    onSuccess: config?.onSuccess,
    debounceDelay: config?.debounceDelay,
  })

  return form
}
