import type { BaseFormData } from '@/types/BaseFormData.types'
import { INITIAL_BASE_FORM_DATA } from '@/types/BaseFormData.types'

interface CandidateFormData extends BaseFormData {
  // Step 3: Candidate Profile (extends base professionalStatus)
  techCommunityMembership: string // New, Yes, No
  techCommunityDetails: string // Details if "Yes" selected, empty otherwise

  // Step 4: Motivation & Challenges
  skillValidationConfidence: string // Strongly Agree, Agree, Neutral, Disagree, Strongly Disagree
  jobSearchChallenges: string // JSON stringified array of selected challenges
  jobSearchChallengeOther: string // Custom challenge if "Other" selected
  valuableOutcomes: string // JSON stringified array of selected outcomes
  valuableOutcomeOther: string // Custom outcome if "Other" selected
}

const INITIAL_CANDIDATE_FORM_DATA: CandidateFormData = {
  ...INITIAL_BASE_FORM_DATA,
  techCommunityMembership: '',
  techCommunityDetails: '',
  skillValidationConfidence: '',
  jobSearchChallenges: '[]',
  jobSearchChallengeOther: '',
  valuableOutcomes: '[]',
  valuableOutcomeOther: '',
  name: '',
}

export type { CandidateFormData }
export { INITIAL_CANDIDATE_FORM_DATA }
