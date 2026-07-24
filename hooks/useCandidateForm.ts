import { useCandidateFormContext } from '@/context/CandidateFormContext'
import { useForm } from '@/hooks/useForm'
import { submitUnifiedForm } from '@/lib/api'
import { referralCodeKey } from '@/lib/consts'
import {
  validateEmail,
  validateGitHubGitlab,
  validateLinkedIn,
} from '@/lib/validation'
import { validateCandidateForm } from '@/lib/waitlistFormValidators'
import type { CandidateFormData } from '@/types/CandidateFormData.types'
import { INITIAL_CANDIDATE_FORM_DATA } from '@/types/CandidateFormData.types'
import type { CandidateFormSubmission } from '@/types/netlify.types'
import type { UseCandidateFormConfig } from '@/types/UseCandidateForm.types'

export function useCandidateForm(config?: UseCandidateFormConfig) {
  const context = useCandidateFormContext()
  const { currentStep } = context

  const form = useForm<CandidateFormData>({
    initialData: INITIAL_CANDIDATE_FORM_DATA,
    fields: [
      { name: 'email', validator: validateEmail },
      { name: 'linkedIn', validator: validateLinkedIn },
      { name: 'githubGitlabUrl', validator: validateGitHubGitlab },
    ],
    validateForm: validateCandidateForm,
    onSubmit: async (formData, honeypotValue, formStartTime) => {
      const referralCode = localStorage.getItem(referralCodeKey) ?? ''

      return submitUnifiedForm({
        formType: 'candidate',
        contactName: formData.name,
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
        referredByReferralCode: referralCode,
        formStep: currentStep,
        newsLetterOptIn: formData.newsletterOptIn,
        privacyPolicyAgreed: new Date().toISOString(),
      } as CandidateFormSubmission)
    },
    onSuccess: () => {
      context.setSubmitStatus(currentStep === 'step1' ? 'idle' : 'success')

      if (currentStep === 'step1') {
        context.goToStep('step2')
      }

      config?.onSuccess?.()
    },
    debounceDelay: config?.debounceDelay,
  })

  const handleStepSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    context.setIsSubmitting(true)

    try {
      await form.handleSubmit(e)
      if (form.submitStatus === 'success') {
        context.setSubmitStatus('success')
      }
    } finally {
      context.setIsSubmitting(false)
    }
  }

  return {
    ...form,
    currentStep: context.currentStep,
    submitStatus: context.submitStatus,
    goToStep: context.goToStep,
    nextStep: context.nextStep,
    previousStep: context.previousStep,
    handleStepSubmit,
  }
}
