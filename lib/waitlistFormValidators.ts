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
  validateConditionalOtherField,
  validateContactConsentStep,
  validateJsonArrayField,
  validateRadioField,
  validateSkillsProfileStep,
  validateUrlField,
} from '@/lib/waitlistValidators'
import { getStepNumber } from '@/lib/stepIdentifiers'
import type { StepId } from '@/lib/stepIdentifiers'
import type { CandidateFormData } from '@/types/CandidateFormData.types'
import type { HiringManagerFormData } from '@/types/HiringManagerFormData.types'
import type { VerifierFormData } from '@/types/VerifierFormData.types'
import type { ValidationErrors } from '@/types/WaitlistValidation.types'

/**
 * Validate a specific step of the Candidate form
 */
function validateCandidateStep(
  step: StepId,
  data: CandidateFormData
): ValidationErrors {
  const errors: Record<string, string> = {}
  const stepNumber = getStepNumber(step)

  switch (stepNumber) {
    case 1: {
      // Contact Information (shared validator)
      const contactErrors = validateContactConsentStep({
        email: data.email,
        linkedIn: data.linkedIn,
        github: data.github,
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
        validateUrlField(data.githubGitlabUrl, 'githubGitlabUrl', false)
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
function validateVerifierStep(
  step: StepId,
  data: VerifierFormData
): ValidationErrors {
  const errors: Record<string, string> = {}
  const stepNumber = getStepNumber(step)

  switch (stepNumber) {
    case 1: {
      // Contact Information (shared validator)
      const contactErrors = validateContactConsentStep({
        email: data.email,
        linkedIn: data.linkedIn,
        github: data.github,
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
        validateUrlField(data.githubGitlabUrl, 'githubGitlabUrl', false)
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
function validateHiringManagerStep(
  step: StepId,
  data: HiringManagerFormData
): ValidationErrors {
  const errors: Record<string, string> = {}
  const stepNumber = getStepNumber(step)

  switch (stepNumber) {
    case 1: {
      // Contact Information (NO LinkedIn or GitHub)
      const contactErrors = validateContactConsentStep({
        email: data.email,
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
 * Validate entire Candidate Form Data
 * Validates all steps sequentially
 */
function validateCandidateForm(data: CandidateFormData): ValidationErrors {
  const errors: Record<string, string> = {}
  const stepIds: StepId[] = ['step1', 'step2', 'step3', 'step4']

  // Validate all steps
  for (const stepId of stepIds) {
    const stepErrors = validateCandidateStep(stepId, data)
    Object.assign(errors, stepErrors.errors)
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Validate entire Verifier Form Data
 * Validates all steps sequentially
 */
function validateVerifierForm(data: VerifierFormData): ValidationErrors {
  const errors: Record<string, string> = {}
  const stepIds: StepId[] = ['step1', 'step2', 'step3', 'step4']

  // Validate all steps
  for (const stepId of stepIds) {
    const stepErrors = validateVerifierStep(stepId, data)
    Object.assign(errors, stepErrors.errors)
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Validate entire Hiring Manager Form Data
 * Validates all steps sequentially
 */
function validateHiringManagerForm(
  data: HiringManagerFormData
): ValidationErrors {
  const errors: Record<string, string> = {}
  const stepIds: StepId[] = ['step1', 'step2', 'step3', 'step4']

  // Validate all steps
  for (const stepId of stepIds) {
    const stepErrors = validateHiringManagerStep(stepId, data)
    Object.assign(errors, stepErrors.errors)
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

export {
  validateCandidateStep,
  validateVerifierStep,
  validateHiringManagerStep,
  validateCandidateForm,
  validateVerifierForm,
  validateHiringManagerForm,
}
