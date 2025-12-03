import type { BaseFormData } from '@/types/BaseFormData.types'
import { INITIAL_BASE_FORM_DATA } from '@/types/BaseFormData.types'

interface VerifierFormData extends BaseFormData {
  // Step 3: Verifier Profile (extends base professionalStatus)
  yearsOfExperience: string // 3-5, 6-10, 10+
  hoursPerWeek: string // 1-3, 4-7, 8+
  coachingMentoring: string // Yes, No

  // Step 4: Motivation & Challenges
  verifierMotivations: string // JSON stringified array
  verifierMotivationOther: string // Custom motivation if "Other" selected
  professionalFrustration: string // Single selection
  professionalFrustrationOther: string // Custom frustration if "Other" selected
}

interface VerifierFormStep {
  stepNumber: number
  title: string
  description: string
  fields: string[]
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

export type { VerifierFormData, VerifierFormStep }
export { INITIAL_VERIFIER_FORM_DATA }
