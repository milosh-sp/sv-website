/**
 * Verifier Waitlist Form Data Types
 * Represents the complete form data for verifier persona
 * Extends BaseFormData with verifier-specific fields
 */

import type { BaseFormData } from '@/types/BaseFormData.types'

export interface VerifierFormData extends BaseFormData {
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

export interface VerifierFormStep {
  stepNumber: number
  title: string
  description: string
  fields: string[]
}

export const VERIFIER_FORM_STEPS: VerifierFormStep[] = [
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
    title: 'Your Verification Profile',
    description: 'Share your professional experience',
    fields: [
      'yearsOfExperience',
      'hoursPerWeek',
      'professionalStatus',
      'coachingMentoring',
      'githubGitlabUrl',
    ],
  },
  {
    stepNumber: 4,
    title: 'Your Motivation',
    description: 'Help us understand your goals',
    fields: [
      'verifierMotivations',
      'verifierMotivationOther',
      'professionalFrustration',
      'professionalFrustrationOther',
    ],
  },
]

import { INITIAL_BASE_FORM_DATA } from '@/types/BaseFormData.types'

export const INITIAL_VERIFIER_FORM_DATA: VerifierFormData = {
  ...INITIAL_BASE_FORM_DATA,
  yearsOfExperience: '',
  hoursPerWeek: '',
  coachingMentoring: '',
  verifierMotivations: '[]',
  verifierMotivationOther: '',
  professionalFrustration: '',
  professionalFrustrationOther: '',
}
