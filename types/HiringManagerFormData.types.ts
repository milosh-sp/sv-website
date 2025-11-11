/**
 * Hiring Manager Waitlist Form Data Types
 * Represents the complete form data for hiring manager persona
 * Note: LinkedIn is NOT required for Hiring Managers
 */

export interface HiringManagerFormData extends Record<string, string> {
  // Step 1: Contact & Consent (NO LinkedIn required)
  email: string
  github: string
  privacyConsent: string // Stored as 'true' or 'false'
  newsletterOptIn: string // Stored as 'true' or 'false'

  // Step 2: Company Profile
  companyName: string
  companySize: string
  industry: string
  companyWebsite: string

  // Step 3: Hiring Demand & Challenges
  hiringDemand: string
  skillsNeeded: string // JSON stringified array
  challenges: string
}

export interface HiringManagerFormStep {
  stepNumber: number
  title: string
  description: string
  fields: string[]
}

export const HIRING_MANAGER_FORM_STEPS: HiringManagerFormStep[] = [
  {
    stepNumber: 1,
    title: 'Contact & Consent',
    description: 'Let us know how to reach you',
    fields: ['email', 'github', 'privacyConsent', 'newsletterOptIn'],
  },
  {
    stepNumber: 2,
    title: 'Company Profile',
    description: 'Tell us about your company',
    fields: ['companyName', 'companySize', 'industry', 'companyWebsite'],
  },
  {
    stepNumber: 3,
    title: 'Hiring Demand & Challenges',
    description: 'Share your hiring needs',
    fields: ['hiringDemand', 'skillsNeeded', 'challenges'],
  },
]

export const INITIAL_HIRING_MANAGER_FORM_DATA: HiringManagerFormData = {
  email: '',
  github: '',
  privacyConsent: 'false',
  newsletterOptIn: 'false',
  companyName: '',
  companySize: '',
  industry: '',
  companyWebsite: '',
  hiringDemand: '',
  skillsNeeded: '[]',
  challenges: '',
}
