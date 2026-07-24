import { useHiringManagerFormContext } from '@/context/HiringManagerFormContext'
import { useForm } from '@/hooks/useForm'
import { submitUnifiedForm } from '@/lib/api'
import { referralCodeKey } from '@/lib/consts'
import { validateEmail, validateUrl } from '@/lib/validation'
import { validateHiringManagerForm } from '@/lib/waitlistFormValidators'
import type { HiringManagerFormData } from '@/types/HiringManagerFormData.types'
import { INITIAL_HIRING_MANAGER_FORM_DATA } from '@/types/HiringManagerFormData.types'
import type { UseHiringManagerFormConfig } from '@/types/UseHiringManagerForm.types'
import type { HiringManagerFormSubmission } from '@/types/netlify.types'

export function useHiringManagerForm(config?: UseHiringManagerFormConfig) {
  const context = useHiringManagerFormContext()
  const { currentStep } = context

  const form = useForm<HiringManagerFormData>({
    initialData: INITIAL_HIRING_MANAGER_FORM_DATA,
    fields: [
      { name: 'email', validator: validateEmail },
      { name: 'companyUrl', validator: validateUrl },
    ],
    validateForm: validateHiringManagerForm,
    onSubmit: async (formData, honeypotValue, formStartTime) => {
      const referralCode = localStorage.getItem(referralCodeKey) ?? ''

      return submitUnifiedForm({
        formType: 'hiring-manager',
        email: formData.email,
        companyName: formData.companyName,
        companyUrl: formData.companyUrl,
        managerRole: formData.managerRole,
        fundingStage: formData.fundingStage,
        engineeringTeamSize: formData.engineeringTeamSize,
        rolesHiring: formData.rolesHiring,
        rolesHiringOther: formData.rolesHiringOther,
        hiringFrustrationsOther: formData.hiringFrustrationsOther,
        hiringFailuresOther: formData.hiringFailuresOther,
        seniorityLevel: formData.seniorityLevel,
        hiringInterviewHours: formData.hiringInterviewHours,
        hiringFrustrations: formData.hiringFrustrations,
        hiringFailures: formData.hiringFailures,
        website: honeypotValue,
        form_start_time: formStartTime,
        referredByReferralCode: referralCode,
        newsLetterOptIn: formData.newsletterOptIn,
        privacyPolicyAgreed: new Date().toISOString(),
      } as HiringManagerFormSubmission)
    },
    onSuccess: () => {
      context.setSubmitStatus(currentStep === 'step1' ? 'idle' : 'success')

      if (currentStep === 'step1') {
        context.goToStep('step2')
        context.setSubmitStatus('idle')
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
