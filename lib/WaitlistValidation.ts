/**
 * Waitlist Form Validation Utilities
 * Reuses existing validators from lib/validation.ts
 */

import {
  validateEmail,
  validateLinkedIn,
  validateGitHub,
  validateUrl,
} from '@/lib/validation'
import type { CandidateFormData } from '@/types/CandidateFormData.types'
import type { VerifierFormData } from '@/types/VerifierFormData.types'
import type { HiringManagerFormData } from '@/types/HiringManagerFormData.types'

interface ValidationErrors {
  isValid: boolean
  errors: Record<string, string>
}

/**
 * Validate Candidate Form Data
 */
export function validateCandidateForm(
  data: CandidateFormData
): ValidationErrors {
  const errors: Record<string, string> = {}

  // Step 1: Contact & Consent
  const emailValidation = validateEmail(data.email)
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message || 'Invalid email'
  }

  const linkedInValidation = validateLinkedIn(data.linkedIn)
  if (!linkedInValidation.isValid) {
    errors.linkedIn = linkedInValidation.message || 'Invalid LinkedIn URL'
  }

  if (data.github) {
    const githubValidation = validateGitHub(data.github)
    if (!githubValidation.isValid) {
      errors.github = githubValidation.message || 'Invalid GitHub URL'
    }
  }

  if (!data.privacyConsent) {
    errors.privacyConsent = 'You must agree to the privacy policy'
  }

  // Step 2: Skills Profile
  if (!data.skillAreas || data.skillAreas.length === 0) {
    errors.skillAreas = 'Please select at least one skill area'
  }

  if (!data.technicalSkills || data.technicalSkills.length === 0) {
    errors.technicalSkills = 'Please select at least one technical skill'
  }

  // Step 3: Candidate Profile
  if (!data.professionalStatus || data.professionalStatus.trim() === '') {
    errors.professionalStatus = 'Please select your professional status'
  }

  if (
    !data.techCommunityMembership ||
    data.techCommunityMembership.trim() === ''
  ) {
    errors.techCommunityMembership =
      'Please select your tech community membership status'
  }

  if (data.techCommunityMembership === 'yes') {
    if (!data.techCommunityDetails || data.techCommunityDetails.trim() === '') {
      errors.techCommunityDetails = 'Please specify which tech community'
    }
  }

  if (!data.githubGitlabUrl || data.githubGitlabUrl.trim() === '') {
    errors.githubGitlabUrl = 'GitHub/GitLab profile URL is required'
  } else {
    const urlValidation = validateUrl(data.githubGitlabUrl)
    if (!urlValidation.isValid) {
      errors.githubGitlabUrl =
        urlValidation.message || 'Invalid GitHub/GitLab URL'
    }
  }

  // Step 4: Motivation & Challenges
  if (
    !data.skillValidationConfidence ||
    data.skillValidationConfidence.trim() === ''
  ) {
    errors.skillValidationConfidence = 'Please select your confidence level'
  }

  // Validate job search challenges (array)
  try {
    const jobSearchChallenges = JSON.parse(data.jobSearchChallenges)
    if (
      !Array.isArray(jobSearchChallenges) ||
      jobSearchChallenges.length === 0
    ) {
      errors.jobSearchChallenges = 'Please select at least one challenge'
    } else if (jobSearchChallenges.includes('other')) {
      if (
        !data.jobSearchChallengeOther ||
        data.jobSearchChallengeOther.trim() === ''
      ) {
        errors.jobSearchChallengeOther = 'Please specify your challenge'
      }
    }
  } catch {
    errors.jobSearchChallenges = 'Please select at least one challenge'
  }

  // Validate valuable outcomes (array)
  try {
    const valuableOutcomes = JSON.parse(data.valuableOutcomes)
    if (!Array.isArray(valuableOutcomes) || valuableOutcomes.length === 0) {
      errors.valuableOutcomes = 'Please select at least one outcome'
    } else if (valuableOutcomes.includes('other')) {
      if (
        !data.valuableOutcomeOther ||
        data.valuableOutcomeOther.trim() === ''
      ) {
        errors.valuableOutcomeOther = 'Please specify the outcome'
      }
    }
  } catch {
    errors.valuableOutcomes = 'Please select at least one outcome'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Validate Verifier Form Data
 */
export function validateVerifierForm(data: VerifierFormData): ValidationErrors {
  const errors: Record<string, string> = {}

  // Step 1: Contact & Consent
  const emailValidation = validateEmail(data.email)
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message || 'Invalid email'
  }

  const linkedInValidation = validateLinkedIn(data.linkedIn)
  if (!linkedInValidation.isValid) {
    errors.linkedIn = linkedInValidation.message || 'Invalid LinkedIn URL'
  }

  if (data.github) {
    const githubValidation = validateGitHub(data.github)
    if (!githubValidation.isValid) {
      errors.github = githubValidation.message || 'Invalid GitHub URL'
    }
  }

  if (!data.privacyConsent) {
    errors.privacyConsent = 'You must agree to the privacy policy'
  }

  // Step 2: Skills Profile
  if (!data.skillAreas || data.skillAreas.length === 0) {
    errors.skillAreas = 'Please select at least one skill area'
  }

  if (!data.technicalSkills || data.technicalSkills.length === 0) {
    errors.technicalSkills = 'Please select at least one technical skill'
  }

  // Step 3: Verifier Profile
  if (!data.yearsOfExperience || data.yearsOfExperience.trim() === '') {
    errors.yearsOfExperience = 'Years of experience is required'
  }

  if (!data.currentRole || data.currentRole.trim() === '') {
    errors.currentRole = 'Current role is required'
  }

  if (!data.currentCompany || data.currentCompany.trim() === '') {
    errors.currentCompany = 'Current company is required'
  }

  if (
    !data.verificationExperience ||
    data.verificationExperience.trim() === ''
  ) {
    errors.verificationExperience = 'Please share your verification experience'
  }

  // Step 4: Motivation & Challenges
  if (!data.motivation || data.motivation.trim() === '') {
    errors.motivation = 'Please tell us your motivation'
  }

  if (!data.challenges || data.challenges.trim() === '') {
    errors.challenges = 'Please share your challenges'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Validate Hiring Manager Form Data
 * Note: LinkedIn is NOT required for Hiring Managers
 */
export function validateHiringManagerForm(
  data: HiringManagerFormData
): ValidationErrors {
  const errors: Record<string, string> = {}

  // Step 1: Contact & Consent (NO LinkedIn)
  const emailValidation = validateEmail(data.email)
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message || 'Invalid email'
  }

  if (data.github) {
    const githubValidation = validateGitHub(data.github)
    if (!githubValidation.isValid) {
      errors.github = githubValidation.message || 'Invalid GitHub URL'
    }
  }

  if (!data.privacyConsent) {
    errors.privacyConsent = 'You must agree to the privacy policy'
  }

  // Step 2: Company Profile
  if (!data.companyName || data.companyName.trim() === '') {
    errors.companyName = 'Company name is required'
  }

  if (!data.companySize || data.companySize.trim() === '') {
    errors.companySize = 'Company size is required'
  }

  if (!data.industry || data.industry.trim() === '') {
    errors.industry = 'Industry is required'
  }

  if (data.companyWebsite) {
    const websiteValidation = validateUrl(
      data.companyWebsite,
      'Company website'
    )
    if (!websiteValidation.isValid) {
      errors.companyWebsite =
        websiteValidation.message || 'Invalid company website URL'
    }
  }

  // Step 3: Hiring Demand & Challenges
  if (!data.hiringDemand || data.hiringDemand.trim() === '') {
    errors.hiringDemand = 'Please describe your hiring demand'
  }

  if (!data.skillsNeeded || data.skillsNeeded.length === 0) {
    errors.skillsNeeded = 'Please select at least one skill needed'
  }

  if (!data.challenges || data.challenges.trim() === '') {
    errors.challenges = 'Please share your challenges'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
