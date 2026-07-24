import {
  validateConditionalOtherField,
  validateContactConsentStep,
  validateJsonArrayField,
  validateRadioField,
  validateSkillsProfileStep,
  validateUrlField,
} from '@/lib/waitlistValidators'
import { getStepNumber } from '@/lib/stepIdentifiers'
import { strings } from '@/lib/strings'
import type { CandidateFormData } from '@/types/CandidateFormData.types'
import type { HiringManagerFormData } from '@/types/HiringManagerFormData.types'
import type { VerifierFormData } from '@/types/VerifierFormData.types'
import type { ValidationErrors } from '@/types/WaitlistValidation.types'
import type { StepId } from '@/types/netlify.types'

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
        githubGitlabUrl: data.githubGitlabUrl,
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
          errors.techCommunityDetails =
            strings.waitlistForms.validation.techCommunityDetailsRequired
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
        githubGitlabUrl: data.githubGitlabUrl,
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
        validateJsonArrayField(
          data.professionalFrustration,
          'professionalFrustration'
        )
      )
      Object.assign(
        errors,
        validateConditionalOtherField(
          data.professionalFrustration,
          data.professionalFrustrationOther,
          'professionalFrustrationOther'
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
      const contactErrors = validateContactConsentStep({
        email: data.email,
        companyUrl: data.companyUrl,
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
      Object.assign(
        errors,
        validateJsonArrayField(data.rolesHiring, 'rolesHiring')
      )
      Object.assign(
        errors,
        validateConditionalOtherField(
          data.rolesHiring,
          data.rolesHiringOther,
          'rolesHiringOther'
        )
      )
      // Hiring Challenges
      Object.assign(
        errors,
        validateJsonArrayField(data.hiringFrustrations, 'hiringFrustrations')
      )
      Object.assign(
        errors,
        validateConditionalOtherField(
          data.hiringFrustrations,
          data.hiringFrustrationsOther,
          'hiringFrustrationsOther'
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
          data.hiringFailuresOther,
          'hiringFailuresOther'
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

    // Because we do a submit on step 1, we need to break out of the loop
    if (stepId === 'step1') {
      Object.assign(errors, stepErrors.errors)
      break
    }

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

    if (stepId === 'step1') {
      Object.assign(errors, stepErrors.errors)
      break
    }

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

    if (stepId === 'step1') {
      Object.assign(errors, stepErrors.errors)
      break
    }

    Object.assign(errors, stepErrors.errors)
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Validate all steps up to and including a specific step
 * Used to determine if a user can jump to a specific step
 * Returns true only if all steps from 1 to the target step are valid
 */
export function validateStepsUpTo(
  targetStep: StepId,
  data: CandidateFormData | VerifierFormData | HiringManagerFormData
): boolean {
  const targetStepNumber = getStepNumber(targetStep)

  for (let stepNum = 1; stepNum <= targetStepNumber; stepNum++) {
    // Map step number to StepId
    const stepId = ['step1', 'step2', 'step3', 'step4'][stepNum - 1] as StepId

    // Determine which validator to use based on data type
    let stepValidation: ValidationErrors

    if ('professionalFrustration' in data) {
      // Verifier form
      stepValidation = validateVerifierStep(stepId, data as VerifierFormData)
    } else if ('managerRole' in data) {
      // Hiring Manager form
      stepValidation = validateHiringManagerStep(
        stepId,
        data as HiringManagerFormData
      )
    } else {
      // Candidate form
      stepValidation = validateCandidateStep(stepId, data as CandidateFormData)
    }

    // If any step has errors, return false
    if (!stepValidation.isValid) {
      return false
    }
  }

  return true
}

export {
  validateCandidateStep,
  validateVerifierStep,
  validateHiringManagerStep,
  validateCandidateForm,
  validateVerifierForm,
  validateHiringManagerForm,
}
