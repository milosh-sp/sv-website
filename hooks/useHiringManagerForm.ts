import { useForm } from '@/hooks/useForm'
import { submitUnifiedForm } from '@/lib/api'
import { validateEmail, validateUrl } from '@/lib/validation'
import { validateHiringManagerForm } from '@/lib/waitlistFormValidators'
import type { HiringManagerFormData } from '@/types/HiringManagerFormData.types'
import { INITIAL_HIRING_MANAGER_FORM_DATA } from '@/types/HiringManagerFormData.types'
import type { HiringManagerFormSubmission } from '@/types/netlify.types'

interface UseHiringManagerFormConfig {
  onSuccess?: () => void
  debounceDelay?: number
}

export function useHiringManagerForm(config?: UseHiringManagerFormConfig) {
  const form = useForm<HiringManagerFormData>({
    initialData: INITIAL_HIRING_MANAGER_FORM_DATA,
    fields: [
      { name: 'email', validator: validateEmail },
      { name: 'companyUrl', validator: validateUrl },
    ],
    validateForm: validateHiringManagerForm,
    onSubmit: async (formData, honeypotValue, formStartTime) => {
      // Submit to unified Netlify function with hiring manager-specific fields
      return submitUnifiedForm({
        formType: 'hiring-manager',
        email: formData.email,
        companyUrl: formData.companyUrl,
        managerRole: formData.managerRole,
        fundingStage: formData.fundingStage,
        engineeringTeamSize: formData.engineeringTeamSize,
        rolesHiring: formData.rolesHiring,
        seniorityLevel: formData.seniorityLevel,
        hiringInterviewHours: formData.hiringInterviewHours,
        hiringFrustrations: formData.hiringFrustrations,
        hiringFailures: formData.hiringFailures,
        website: honeypotValue,
        form_start_time: formStartTime,
        referredByReferralCode: formData.referredByReferralCode,
      } as HiringManagerFormSubmission)
    },
    onSuccess: config?.onSuccess,
    debounceDelay: config?.debounceDelay,
  })

  return form
}
