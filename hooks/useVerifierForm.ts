import { useVerifierFormContext } from '@/context/VerifierFormContext'
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
import type { UseVerifierFormConfig } from '@/types/UseVerifierForm.types'
import type { VerifierFormSubmission } from '@/types/netlify.types'

export function useVerifierForm(config?: UseVerifierFormConfig) {
  const context = useVerifierFormContext()
  const { currentStep } = context

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
        formStep: currentStep,
        newsLetterOptIn: formData.newsletterOptIn,
        privacyPolicyAgreed: new Date().toISOString(),
      } as VerifierFormSubmission)
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
