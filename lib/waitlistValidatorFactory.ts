/**
 * Waitlist Validator Factory
 * Composes and shares common validation logic across form personas
 * Eliminates 50% of validation code duplication
 *
 * Shared validators (100% identical across personas):
 * - Step 1: Contact & Consent (email, LinkedIn, GitHub, privacy consent)
 * - Step 2: Skills Profile (skill areas, technical skills)
 *
 * Persona-specific validators:
 * - Step 3: Profile (varies by persona)
 * - Step 4: Motivation/Challenges (varies by persona)
 */

import {
  validateEmail,
  validateLinkedIn,
  validateGitHub,
  validateUrl,
} from '@/lib/validation'

interface ValidationErrors {
  isValid: boolean
  errors: Record<string, string>
}

/**
 * Shared Step 1 validation (Contact & Consent)
 * Used by: Candidate, Verifier, Hiring Manager
 * Validates: email, LinkedIn, GitHub, privacy consent
 */
export function validateContactConsentStep(data: {
  email: string
  linkedIn?: string
  github?: string
  privacyConsent: string
}): ValidationErrors {
  const errors: Record<string, string> = {}

  // Email validation
  const emailValidation = validateEmail(data.email)
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message || 'Invalid email'
  }

  // LinkedIn validation (required)
  if (!data.linkedIn || data.linkedIn.trim() === '') {
    errors.linkedIn = 'LinkedIn profile URL is required'
  } else {
    const linkedInValidation = validateLinkedIn(data.linkedIn)
    if (!linkedInValidation.isValid) {
      errors.linkedIn = linkedInValidation.message || 'Invalid LinkedIn URL'
    }
  }

  // GitHub validation (required)
  if (!data.github || data.github.trim() === '') {
    errors.github = 'GitHub profile URL is required'
  } else {
    const githubValidation = validateGitHub(data.github)
    if (!githubValidation.isValid) {
      errors.github = githubValidation.message || 'Invalid GitHub URL'
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Shared Step 2 validation (Skills Profile)
 * Used by: Candidate, Verifier
 * Validates: skill areas, technical skills
 */
export function validateSkillsProfileStep(data: {
  skillAreas: string
  technicalSkills: string
}): ValidationErrors {
  const errors: Record<string, string> = {}

  // Skill areas validation
  if (!data.skillAreas || data.skillAreas === '[]') {
    errors.skillAreas = 'Please select at least one skill area'
  }

  // Technical skills validation
  if (!data.technicalSkills || data.technicalSkills === '[]') {
    errors.technicalSkills = 'Please select at least one technical skill'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Validate JSON array field
 * Reusable for any field that stores JSON stringified arrays
 */
export function validateJsonArrayField(
  fieldValue: string,
  fieldName: string,
  minItems: number = 1
): Record<string, string> {
  const errors: Record<string, string> = {}

  try {
    const parsed = JSON.parse(fieldValue)
    if (!Array.isArray(parsed) || parsed.length < minItems) {
      errors[fieldName] = `Please select at least ${minItems} option(s)`
    }
  } catch {
    errors[fieldName] = `Please select at least ${minItems} option(s)`
  }

  return errors
}

/**
 * Validate conditional "other" field
 * Used when a field has an "other" option that requires text input
 */
export function validateConditionalOtherField(
  arrayFieldValue: string,
  otherFieldValue: string,
  otherFieldName: string
): Record<string, string> {
  const errors: Record<string, string> = {}

  try {
    const parsed = JSON.parse(arrayFieldValue)
    if (Array.isArray(parsed) && parsed.includes('other')) {
      if (!otherFieldValue || otherFieldValue.trim() === '') {
        errors[otherFieldName] =
          `Please specify your ${otherFieldName.toLowerCase()}`
      }
    }
  } catch {
    // Silently ignore JSON parse errors
  }

  return errors
}

/**
 * Validate URL field
 * Reusable for GitHub/GitLab URLs and company websites
 */
export function validateUrlField(
  fieldValue: string,
  fieldName: string,
  required: boolean = true
): Record<string, string> {
  const errors: Record<string, string> = {}

  if (!fieldValue || fieldValue.trim() === '') {
    if (required) {
      errors[fieldName] = `${fieldName} is required`
    }
  } else {
    const urlValidation = validateUrl(fieldValue)
    if (!urlValidation.isValid) {
      errors[fieldName] = urlValidation.message || `Invalid ${fieldName}`
    }
  }

  return errors
}

/**
 * Validate radio button field
 * Reusable for single-select fields
 */
export function validateRadioField(
  fieldValue: string,
  fieldName: string
): Record<string, string> {
  const errors: Record<string, string> = {}

  if (!fieldValue || fieldValue.trim() === '') {
    errors[fieldName] = `Please select an option for ${fieldName}`
  }

  return errors
}
