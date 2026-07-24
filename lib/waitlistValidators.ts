/**
 * Waitlist Validator Factory
 * Composes and shares common validation logic across form personas
 */

import {
  validateEmail,
  validateGitHubGitlab,
  validateLinkedIn,
  validateUrl,
} from '@/lib/validation'
import { strings } from '@/lib/strings'
import type { ValidationErrors } from '@/types/WaitlistValidation.types'

const waitlistValidation = strings.waitlistForms.validation
const commonValidation = strings.validationCommon

function formatMessage(
  template: string,
  values: Record<string, string>
): string {
  return Object.entries(values).reduce(
    (message, [key, value]) => message.replaceAll(`{${key}}`, value),
    template
  )
}

const RADIO_FIELD_MESSAGES: Record<string, string> = {
  professionalStatus: waitlistValidation.professionalStatusRequired,
  techCommunityMembership: waitlistValidation.techCommunityMembershipRequired,
  skillValidationConfidence:
    waitlistValidation.skillValidationConfidenceRequired,
  yearsOfExperience: waitlistValidation.yearsOfExperienceRequired,
  hoursPerWeek: waitlistValidation.hoursPerWeekRequired,
  coachingMentoring: waitlistValidation.coachingMentoringRequired,
  managerRole: waitlistValidation.managerRoleRequired,
  fundingStage: waitlistValidation.fundingStageRequired,
  engineeringTeamSize: waitlistValidation.engineeringTeamSizeRequired,
  seniorityLevel: waitlistValidation.seniorityLevelRequired,
  hiringInterviewHours: waitlistValidation.hiringInterviewHoursRequired,
}

const ARRAY_FIELD_MESSAGES: Record<string, string> = {
  skillAreas: waitlistValidation.skillAreasRequired,
  technicalSkills: waitlistValidation.technicalSkillsRequired,
  jobSearchChallenges: waitlistValidation.jobSearchChallengesRequired,
  valuableOutcomes: waitlistValidation.valuableOutcomesRequired,
  verifierMotivations: waitlistValidation.verifierMotivationsRequired,
  professionalFrustration: waitlistValidation.professionalFrustrationRequired,
  rolesHiring: waitlistValidation.rolesHiringRequired,
  hiringFrustrations: waitlistValidation.hiringFrustrationsRequired,
  hiringFailures: waitlistValidation.hiringFailuresRequired,
}

const OTHER_FIELD_MESSAGES: Record<string, string> = {
  jobSearchChallengeOther: waitlistValidation.jobSearchChallengeOtherRequired,
  valuableOutcomeOther: waitlistValidation.valuableOutcomeOtherRequired,
  verifierMotivationOther: waitlistValidation.verifierMotivationOtherRequired,
  professionalFrustrationOther:
    waitlistValidation.professionalFrustrationOtherRequired,
  rolesHiringOther: waitlistValidation.rolesHiringOtherRequired,
  hiringFrustrationsOther: waitlistValidation.hiringFrustrationsOtherRequired,
  hiringFailuresOther: waitlistValidation.hiringFailuresOtherRequired,
}

const URL_FIELD_MESSAGES: Record<
  string,
  { required: string; invalid: string }
> = {
  githubGitlabUrl: {
    required: waitlistValidation.githubGitlabUrlRequired,
    invalid: waitlistValidation.githubGitlabUrlInvalid,
  },
  companyUrl: {
    required: commonValidation.companyUrlRequired,
    invalid: commonValidation.companyUrlInvalid,
  },
}

function validateContactConsentStep(data: {
  email: string
  linkedIn?: string
  githubGitlabUrl?: string
  companyUrl?: string
}): ValidationErrors {
  const errors: Record<string, string> = {}

  const emailValidation = validateEmail(data.email)
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message || waitlistValidation.emailInvalid
  }

  if (data.linkedIn !== undefined) {
    const linkedInValidation = validateLinkedIn(data.linkedIn)
    if (!linkedInValidation.isValid) {
      errors.linkedIn =
        linkedInValidation.message || waitlistValidation.linkedInInvalid
    }
  }

  if (data.githubGitlabUrl !== undefined) {
    const githubGitlabValidation = validateGitHubGitlab(data.githubGitlabUrl)
    if (!githubGitlabValidation.isValid) {
      errors.githubGitlabUrl =
        githubGitlabValidation.message ||
        waitlistValidation.githubGitlabUrlInvalid
    }
  }

  if (data.companyUrl !== undefined) {
    if (!data.companyUrl || data.companyUrl.trim() === '') {
      errors.companyUrl = commonValidation.companyUrlRequired
    } else {
      const companyUrlValidation = validateUrl(data.companyUrl)
      if (!companyUrlValidation.isValid) {
        errors.companyUrl =
          companyUrlValidation.message || commonValidation.companyUrlInvalid
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

function validateSkillsProfileStep(data: {
  skillAreas: string
  technicalSkills: string
}): ValidationErrors {
  const errors: Record<string, string> = {}

  if (!data.skillAreas || data.skillAreas === '[]') {
    errors.skillAreas = waitlistValidation.skillAreasRequired
  }

  if (!data.technicalSkills || data.technicalSkills === '[]') {
    errors.technicalSkills = waitlistValidation.technicalSkillsRequired
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

function validateJsonArrayField(
  fieldValue: string,
  fieldName: string,
  minItems: number = 1
): Record<string, string> {
  const errors: Record<string, string> = {}
  const message =
    ARRAY_FIELD_MESSAGES[fieldName] ||
    formatMessage(commonValidation.minOptionsSelected, {
      count: String(minItems),
    })

  try {
    const parsed = JSON.parse(fieldValue)
    if (!Array.isArray(parsed) || parsed.length < minItems) {
      errors[fieldName] = message
    }
  } catch {
    errors[fieldName] = message
  }

  return errors
}

function validateConditionalOtherField(
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
          OTHER_FIELD_MESSAGES[otherFieldName] ||
          formatMessage(commonValidation.fieldRequired, {
            fieldName: otherFieldName,
          })
      }
    }
  } catch {
    // Silently ignore JSON parse errors
  }

  return errors
}

function validateUrlField(
  fieldValue: string,
  fieldName: string,
  required: boolean = true
): Record<string, string> {
  const errors: Record<string, string> = {}
  const fieldMessages = URL_FIELD_MESSAGES[fieldName]

  if (!fieldValue || fieldValue.trim() === '') {
    if (required) {
      errors[fieldName] =
        fieldMessages?.required ||
        formatMessage(commonValidation.fieldRequired, { fieldName })
    }
  } else {
    const urlValidation = validateUrl(fieldValue)
    if (!urlValidation.isValid) {
      errors[fieldName] =
        urlValidation.message ||
        fieldMessages?.invalid ||
        formatMessage(commonValidation.invalidField, { fieldName })
    }
  }

  return errors
}

function validateRadioField(
  fieldValue: string,
  fieldName: string
): Record<string, string> {
  const errors: Record<string, string> = {}

  if (!fieldValue || fieldValue.trim() === '') {
    errors[fieldName] =
      RADIO_FIELD_MESSAGES[fieldName] || commonValidation.selectOptionRequired
  }

  return errors
}

export {
  validateContactConsentStep,
  validateSkillsProfileStep,
  validateJsonArrayField,
  validateConditionalOtherField,
  validateUrlField,
  validateRadioField,
}
