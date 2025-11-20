/**
 * Hiring Manager Waitlist Form Data Types
 * Represents the complete form data for hiring manager persona
 * Note: LinkedIn is NOT required for Hiring Managers
 */

export interface HiringManagerFormData extends Record<string, string> {
  // Step 1: Contact Information (NO LinkedIn or GitHub required)
  email: string
  companyUrl: string
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

export const INITIAL_HIRING_MANAGER_FORM_DATA: HiringManagerFormData = {
  email: '',
  newsletterOptIn: 'false',
  managerRole: '',
  fundingStage: '',
  engineeringTeamSize: '',
  rolesHiring: '[]',
  seniorityLevel: '',
  hiringInterviewHours: '',
  hiringFrustrations: '[]',
  hiringFailures: '[]',
  companyUrl: '',
}
