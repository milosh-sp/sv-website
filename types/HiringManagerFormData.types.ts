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
  managerRole: string // CTO/VP, Head of Engineering, Tech Lead, Founder/CEO, Recruiter
  fundingStage: string // Pre-seed, Seed, Series A, Series B, Profitable
  engineeringTeamSize: string // 0, 1-5, 6-15, 16-30, 30+

  // Step 3: Hiring Demand
  rolesHiring: string // JSON stringified array
  seniorityLevel: string // Intern, Mid-level, Senior, Staff/Principal, Generalists
  hiringInterviewHours: string // <10, 10-20, 20-40, 40+, I don't know

  // Step 4: Hiring Challenges
  hiringFrustrations: string // JSON stringified array
  hiringFailures: string // JSON stringified array
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
    title: 'Your Company Profile',
    description: 'Tell us about your company',
    fields: ['managerRole', 'fundingStage', 'engineeringTeamSize'],
  },
  {
    stepNumber: 3,
    title: 'Hiring Demand',
    description: 'Share your hiring needs',
    fields: ['rolesHiring', 'seniorityLevel', 'hiringInterviewHours'],
  },
  {
    stepNumber: 4,
    title: 'Hiring Challenges',
    description: 'Tell us about your challenges',
    fields: ['hiringFrustrations', 'hiringFailures'],
  },
]

export const INITIAL_HIRING_MANAGER_FORM_DATA: HiringManagerFormData = {
  email: '',
  github: '',
  privacyConsent: 'false',
  newsletterOptIn: 'false',
  managerRole: '',
  fundingStage: '',
  engineeringTeamSize: '',
  rolesHiring: '[]',
  seniorityLevel: '',
  hiringInterviewHours: '',
  hiringFrustrations: '[]',
  hiringFailures: '[]',
}
