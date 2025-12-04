import type { BaseFormData } from '@/types/BaseFormData.types'
import { INITIAL_BASE_FORM_DATA } from '@/types/BaseFormData.types'

interface VerifierFormData extends BaseFormData {
  yearsOfExperience: string
  hoursPerWeek: string
  coachingMentoring: string
  verifierMotivations: string
  verifierMotivationOther: string
  professionalFrustration: string
  professionalFrustrationOther: string
}

const INITIAL_VERIFIER_FORM_DATA: VerifierFormData = {
  ...INITIAL_BASE_FORM_DATA,
  yearsOfExperience: '',
  hoursPerWeek: '',
  coachingMentoring: '',
  verifierMotivations: '[]',
  verifierMotivationOther: '',
  professionalFrustration: '',
  professionalFrustrationOther: '',
  name: '',
}

export type { VerifierFormData }
export { INITIAL_VERIFIER_FORM_DATA }
