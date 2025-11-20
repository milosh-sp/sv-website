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

interface CandidateFormStep {
  stepNumber: number
  title: string
  description: string
  fields: string[]
}

const CANDIDATE_FORM_STEPS: CandidateFormStep[] = [
  {
    stepNumber: 1,
    title: 'Contact Information',
    description: 'Let us know how to reach you',
    fields: ['email', 'linkedIn', 'githubGitlabUrl', 'newsletterOptIn'],
  },
  {
    stepNumber: 2,
    title: 'Skills Profile',
    description: 'Tell us about your skills',
    fields: ['skillAreas', 'technicalSkills'],
  },
  {
    stepNumber: 3,
    title: 'Your Candidate Profile',
    description: 'Tell us about your professional background',
    fields: [
      'professionalStatus',
      'techCommunityMembership',
      'techCommunityDetails',
      'githubGitlabUrl',
    ],
  },
  {
    stepNumber: 4,
    title: 'Motivation & Challenges',
    description: 'Help us understand your goals',
    fields: [
      'skillValidationConfidence',
      'jobSearchChallenges',
      'jobSearchChallengeOther',
      'valuableOutcomes',
      'valuableOutcomeOther',
    ],
  },
]

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

export type { CandidateFormData, CandidateFormStep }
export { CANDIDATE_FORM_STEPS, INITIAL_CANDIDATE_FORM_DATA }
