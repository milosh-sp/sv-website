/**
 * Verifier Waitlist Form Data Types
 * Represents the complete form data for verifier persona
 */

export interface VerifierFormData extends Record<string, string> {
  // Step 1: Contact & Consent
  email: string
  linkedIn: string
  github: string
  privacyConsent: string // Stored as 'true' or 'false'
  newsletterOptIn: string // Stored as 'true' or 'false'

  // Step 2: Skills Profile
  skillAreas: string // JSON stringified array
  technicalSkills: string // JSON stringified array

  // Step 3: Verifier Profile
  yearsOfExperience: string // 3-5, 6-10, 10+
  hoursPerWeek: string // 1-3, 4-7, 8+
  professionalStatus: string // Student, Unemployed, Employed (full-time), etc.
  coachingMentoring: string // Yes, No
  githubGitlabUrl: string

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
    title: 'Contact & Consent',
    description: 'Let us know how to reach you',
    fields: [
      'email',
      'linkedIn',
      'github',
      'privacyConsent',
      'newsletterOptIn',
    ],
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

export const INITIAL_VERIFIER_FORM_DATA: VerifierFormData = {
  email: '',
  linkedIn: '',
  github: '',
  privacyConsent: 'false',
  newsletterOptIn: 'false',
  skillAreas: '[]',
  technicalSkills: '[]',
  yearsOfExperience: '',
  hoursPerWeek: '',
  professionalStatus: '',
  coachingMentoring: '',
  githubGitlabUrl: '',
  verifierMotivations: '[]',
  verifierMotivationOther: '',
  professionalFrustration: '',
  professionalFrustrationOther: '',
}
