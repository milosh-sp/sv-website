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
  yearsOfExperience: string
  currentRole: string
  currentCompany: string
  verificationExperience: string

  // Step 4: Motivation & Challenges
  motivation: string
  challenges: string
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
    title: 'Your Background',
    description: 'Share your professional experience',
    fields: [
      'yearsOfExperience',
      'currentRole',
      'currentCompany',
      'verificationExperience',
    ],
  },
  {
    stepNumber: 4,
    title: 'Motivation & Challenges',
    description: 'Help us understand your goals',
    fields: ['motivation', 'challenges'],
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
  currentRole: '',
  currentCompany: '',
  verificationExperience: '',
  motivation: '',
  challenges: '',
}
