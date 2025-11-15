/**
 * Base Form Data Type
 * Contains common fields shared between Verifier, Candidate, and Hiring Manager forms
 * Follows DRY principle by centralizing common form fields
 */

export interface BaseFormData extends Record<string, string> {
  // Step 1: Contact Information (common across all forms)
  email: string
  linkedIn: string
  githubGitlabUrl: string
  newsletterOptIn: string // Stored as 'true' or 'false'

  // Step 2: Skills Profile (common across Verifier and Candidate)
  skillAreas: string // JSON stringified array
  technicalSkills: string // JSON stringified array

  // Step 3: Professional Status (common across Verifier and Candidate)
  professionalStatus: string // Student, Unemployed, Employed (full-time), etc.
}

/**
 * Initial values for BaseFormData
 * Used as a foundation for form-specific initial data
 */
export const INITIAL_BASE_FORM_DATA: BaseFormData = {
  email: '',
  linkedIn: '',
  githubGitlabUrl: '',
  newsletterOptIn: 'false',
  skillAreas: '[]',
  technicalSkills: '[]',
  professionalStatus: '',
}
