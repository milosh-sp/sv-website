/**
 * Waitlist Form Validation Utilities
 * Reuses existing validators from lib/validation.ts
 * Uses validator factory to eliminate code duplication
 *
 * Shared validators (100% identical):
 * - Step 1: Contact & Consent (all personas)
 * - Step 2: Skills Profile (Candidate & Verifier)
 *
 * Persona-specific validators:
 * - Step 3: Profile (varies by persona)
 * - Step 4: Motivation/Challenges (varies by persona)
 */

import {
  validateContactConsentStep,
  validateSkillsProfileStep,
  validateJsonArrayField,
  validateConditionalOtherField,
  validateRadioField,
  validateUrlField,
} from '@/lib/waitlistValidatorFactory'
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
 * Validate a specific step of the Candidate form
 */
export function validateCandidateStep(
  step: number,
  data: CandidateFormData
): ValidationErrors {
  const errors: Record<string, string> = {}

  switch (step) {
    case 1: {
      // Contact & Consent (shared validator)
      const contactErrors = validateContactConsentStep({
        email: data.email,
        linkedIn: data.linkedIn,
        github: data.github,
        privacyConsent: data.privacyConsent,
      })
      Object.assign(errors, contactErrors.errors)
      break
    }

    case 2: {
      // Skills Profile (shared validator)
      const skillsErrors = validateSkillsProfileStep({
        skillAreas: data.skillAreas,
        technicalSkills: data.technicalSkills,
      })
      Object.assign(errors, skillsErrors.errors)
      break
    }

    case 3: {
      // Candidate Profile
      Object.assign(
        errors,
        validateRadioField(data.professionalStatus, 'professionalStatus')
      )
      Object.assign(
        errors,
        validateRadioField(
          data.techCommunityMembership,
          'techCommunityMembership'
        )
      )

      if (data.techCommunityMembership === 'yes') {
        if (
          !data.techCommunityDetails ||
          data.techCommunityDetails.trim() === ''
        ) {
          errors.techCommunityDetails = 'Please specify which tech community'
        }
      }

      Object.assign(
        errors,
        validateUrlField(data.githubGitlabUrl, 'githubGitlabUrl', true)
      )
      break
    }

    case 4: {
      // Motivation & Challenges
      Object.assign(
        errors,
        validateRadioField(
          data.skillValidationConfidence,
          'skillValidationConfidence'
        )
      )
      Object.assign(
        errors,
        validateJsonArrayField(data.jobSearchChallenges, 'jobSearchChallenges')
      )
      Object.assign(
        errors,
        validateConditionalOtherField(
          data.jobSearchChallenges,
          data.jobSearchChallengeOther,
          'jobSearchChallengeOther'
        )
      )
      Object.assign(
        errors,
        validateJsonArrayField(data.valuableOutcomes, 'valuableOutcomes')
      )
      Object.assign(
        errors,
        validateConditionalOtherField(
          data.valuableOutcomes,
          data.valuableOutcomeOther,
          'valuableOutcomeOther'
        )
      )
      break
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Validate a specific step of the Verifier form
 */
export function validateVerifierStep(
  step: number,
  data: VerifierFormData
): ValidationErrors {
  const errors: Record<string, string> = {}

  switch (step) {
    case 1: {
      // Contact & Consent (shared validator)
      const contactErrors = validateContactConsentStep({
        email: data.email,
        linkedIn: data.linkedIn,
        github: data.github,
        privacyConsent: data.privacyConsent,
      })
      Object.assign(errors, contactErrors.errors)
      break
    }

    case 2: {
      // Skills Profile (shared validator)
      const skillsErrors = validateSkillsProfileStep({
        skillAreas: data.skillAreas,
        technicalSkills: data.technicalSkills,
      })
      Object.assign(errors, skillsErrors.errors)
      break
    }

    case 3: {
      // Verifier Profile
      Object.assign(
        errors,
        validateRadioField(data.yearsOfExperience, 'yearsOfExperience')
      )
      Object.assign(
        errors,
        validateRadioField(data.hoursPerWeek, 'hoursPerWeek')
      )
      Object.assign(
        errors,
        validateRadioField(data.professionalStatus, 'professionalStatus')
      )
      Object.assign(
        errors,
        validateRadioField(data.coachingMentoring, 'coachingMentoring')
      )
      Object.assign(
        errors,
        validateUrlField(data.githubGitlabUrl, 'githubGitlabUrl', true)
      )
      break
    }

    case 4: {
      // Motivation & Challenges
      Object.assign(
        errors,
        validateJsonArrayField(data.verifierMotivations, 'verifierMotivations')
      )
      Object.assign(
        errors,
        validateConditionalOtherField(
          data.verifierMotivations,
          data.verifierMotivationOther,
          'verifierMotivationOther'
        )
      )
      Object.assign(
        errors,
        validateRadioField(
          data.professionalFrustration,
          'professionalFrustration'
        )
      )

      if (data.professionalFrustration === 'other') {
        if (
          !data.professionalFrustrationOther ||
          data.professionalFrustrationOther.trim() === ''
        ) {
          errors.professionalFrustrationOther =
            'Please specify your frustration'
        }
      }
      break
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Validate a specific step of the Hiring Manager form
 */
export function validateHiringManagerStep(
  step: number,
  data: HiringManagerFormData
): ValidationErrors {
  const errors: Record<string, string> = {}

  switch (step) {
    case 1: {
      // Contact & Consent (NO LinkedIn or GitHub)
      const contactErrors = validateContactConsentStep({
        email: data.email,
        privacyConsent: data.privacyConsent,
      })
      Object.assign(errors, contactErrors.errors)
      break
    }

    case 2: {
      // Company Profile
      Object.assign(errors, validateRadioField(data.managerRole, 'managerRole'))
      Object.assign(
        errors,
        validateRadioField(data.fundingStage, 'fundingStage')
      )
      Object.assign(
        errors,
        validateRadioField(data.engineeringTeamSize, 'engineeringTeamSize')
      )
      break
    }

    case 3: {
      // Hiring Demand
      Object.assign(
        errors,
        validateJsonArrayField(data.rolesHiring, 'rolesHiring')
      )
      Object.assign(
        errors,
        validateRadioField(data.seniorityLevel, 'seniorityLevel')
      )
      Object.assign(
        errors,
        validateRadioField(data.hiringInterviewHours, 'hiringInterviewHours')
      )
      break
    }

    case 4: {
      // Hiring Challenges
      Object.assign(
        errors,
        validateJsonArrayField(data.hiringFrustrations, 'hiringFrustrations')
      )
      Object.assign(
        errors,
        validateConditionalOtherField(
          data.hiringFrustrations,
          data.hiringFrustrationOther,
          'hiringFrustrationOther'
        )
      )
      Object.assign(
        errors,
        validateJsonArrayField(data.hiringFailures, 'hiringFailures')
      )
      Object.assign(
        errors,
        validateConditionalOtherField(
          data.hiringFailures,
          data.hiringFailureOther,
          'hiringFailureOther'
        )
      )
      break
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
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
    errors.yearsOfExperience = 'Please select your years of experience'
  }

  if (!data.hoursPerWeek || data.hoursPerWeek.trim() === '') {
    errors.hoursPerWeek = 'Please select your availability'
  }

  if (!data.professionalStatus || data.professionalStatus.trim() === '') {
    errors.professionalStatus = 'Please select your professional status'
  }

  if (!data.coachingMentoring || data.coachingMentoring.trim() === '') {
    errors.coachingMentoring =
      'Please select if you have coaching or mentoring experience'
  }

  if (!data.githubGitlabUrl || data.githubGitlabUrl.trim() === '') {
    errors.githubGitlabUrl = 'GitHub/GitLab URL is required'
  } else {
    const urlValidation = validateUrl(data.githubGitlabUrl)
    if (!urlValidation.isValid) {
      errors.githubGitlabUrl =
        urlValidation.message || 'Invalid GitHub/GitLab URL'
    }
  }

  // Step 4: Motivation & Challenges
  // Validate verifier motivations (array)
  try {
    const motivations = JSON.parse(data.verifierMotivations)
    if (!Array.isArray(motivations) || motivations.length === 0) {
      errors.verifierMotivations = 'Please select at least one motivation'
    } else if (motivations.includes('other')) {
      if (
        !data.verifierMotivationOther ||
        data.verifierMotivationOther.trim() === ''
      ) {
        errors.verifierMotivationOther = 'Please specify your motivation'
      }
    }
  } catch {
    errors.verifierMotivations = 'Please select at least one motivation'
  }

  if (
    !data.professionalFrustration ||
    data.professionalFrustration.trim() === ''
  ) {
    errors.professionalFrustration = 'Please select your biggest frustration'
  } else if (data.professionalFrustration === 'other') {
    if (
      !data.professionalFrustrationOther ||
      data.professionalFrustrationOther.trim() === ''
    ) {
      errors.professionalFrustrationOther = 'Please specify your frustration'
    }
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

  // Step 1: Contact & Consent (NO LinkedIn or GitHub)
  const emailValidation = validateEmail(data.email)
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message || 'Invalid email'
  }

  if (!data.privacyConsent) {
    errors.privacyConsent = 'You must agree to the privacy policy'
  }

  // Step 2: Company Profile
  if (!data.managerRole || data.managerRole.trim() === '') {
    errors.managerRole = 'Please select your role'
  }

  if (!data.fundingStage || data.fundingStage.trim() === '') {
    errors.fundingStage = 'Please select your funding stage'
  }

  if (!data.engineeringTeamSize || data.engineeringTeamSize.trim() === '') {
    errors.engineeringTeamSize = 'Please select your engineering team size'
  }

  // Step 3: Hiring Demand
  try {
    const rolesHiring = JSON.parse(data.rolesHiring)
    if (!Array.isArray(rolesHiring) || rolesHiring.length === 0) {
      errors.rolesHiring = 'Please select at least one role'
    }
  } catch {
    errors.rolesHiring = 'Please select at least one role'
  }

  if (!data.seniorityLevel || data.seniorityLevel.trim() === '') {
    errors.seniorityLevel = 'Please select a seniority level'
  }

  if (!data.hiringInterviewHours || data.hiringInterviewHours.trim() === '') {
    errors.hiringInterviewHours = 'Please select interview hours'
  }

  // Step 4: Hiring Challenges
  try {
    const frustrations = JSON.parse(data.hiringFrustrations)
    if (!Array.isArray(frustrations) || frustrations.length === 0) {
      errors.hiringFrustrations = 'Please select at least one frustration'
    }
  } catch {
    errors.hiringFrustrations = 'Please select at least one frustration'
  }

  try {
    const failures = JSON.parse(data.hiringFailures)
    if (!Array.isArray(failures) || failures.length === 0) {
      errors.hiringFailures = 'Please select at least one failure'
    }
  } catch {
    errors.hiringFailures = 'Please select at least one failure'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
