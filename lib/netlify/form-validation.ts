import {
  validateEmail,
  validateUrl,
  validateContactName,
  validateMessage,
} from '@/lib/validation'
import { strings } from '@/lib/strings'
import type {
  BotDetectionResult,
  FormFields,
  ValidationError,
  UnifiedFormSubmissionData,
} from '@/types/netlify.types'

const contactValidation = strings.contactPage.validation
const commonValidation = strings.validationCommon

function fieldMessage(template: string, fieldName: string): string {
  return template.replaceAll('{fieldName}', fieldName)
}

const FORM_SUBMISSION_MIN_TIME_MS = 1000
const FORM_SUBMISSION_MAX_TIME_MS = 30 * 60 * 1000

/**
 * Convert JSON stringified array to comma-separated string
 * Handles both valid JSON arrays and plain strings
 * O(n) where n is the length of the input string
 */
function convertJsonArrayToCommaSeparated(value: unknown): string {
  if (typeof value !== 'string') {
    return ''
  }

  try {
    const parsed = JSON.parse(value)
    if (Array.isArray(parsed)) {
      return parsed.join(',')
    }
    return value
  } catch {
    // If JSON parsing fails, return the original string
    return value
  }
}

/**
 * Array fields that should be converted from JSON to comma-separated format
 * These fields are submitted as JSON stringified arrays from the frontend
 */
const ARRAY_FIELDS_TO_CONVERT = new Set([
  'skillAreas',
  'technicalSkills',
  'jobSearchChallenges',
  'valuableOutcomes',
  'rolesHiring',
  'hiringFrustrations',
  'hiringFailures',
  'verifierMotivations',
  'professionalFrustration',
  'coachingMentoring',
  'techCommunityMembership',
])

/**
 * Format form fields by converting JSON array fields to comma-separated strings
 * Pure function that returns a new object without mutating the input
 */
function formatFormFields(fields: FormFields): FormFields {
  const formatted: FormFields = {}

  Object.entries(fields).forEach(([key, value]) => {
    if (ARRAY_FIELDS_TO_CONVERT.has(key)) {
      formatted[key] = convertJsonArrayToCommaSeparated(value)
    } else {
      formatted[key] = value
    }
  })

  return formatted
}

function validateHoneypot(fields: FormFields): BotDetectionResult {
  // Disable honeypot in development
  if (process.env.NODE_ENV === 'development') {
    return { isBot: false }
  }

  const honeypotValue = fields.website?.trim() || ''

  // Very lenient validation - only flag obvious bot patterns
  if (honeypotValue.length > 0) {
    // Allow common autofill values and legitimate short entries
    const commonAutofillValues = [
      'http://',
      'https://',
      'www.',
      'website',
      'http',
      'https',
      'www',
    ]
    const isLikelyAutofill = commonAutofillValues.some((pattern) =>
      honeypotValue.toLowerCase().includes(pattern)
    )

    // Only flag as bot if it's a substantial entry (>20 chars) and not autofill
    // This avoids false positives from legitimate short entries or autofill
    if (!isLikelyAutofill && honeypotValue.length > 20) {
      return {
        isBot: true,
        reason: 'Honeypot field filled',
      }
    }
  }

  return { isBot: false }
}

function validateFormTiming(formStartTime: string): BotDetectionResult {
  const startTime = new Date(formStartTime).getTime()
  const currentTime = Date.now()
  const timeTaken = currentTime - startTime

  if (timeTaken < FORM_SUBMISSION_MIN_TIME_MS) {
    return {
      isBot: true,
      reason: 'Form submitted too quickly',
    }
  }

  if (timeTaken > FORM_SUBMISSION_MAX_TIME_MS) {
    return {
      isBot: true,
      reason: 'Form session expired',
    }
  }

  return { isBot: false }
}

function validateRequiredEmail(email: unknown): ValidationError | null {
  if (!email) {
    return {
      field: 'email',
      message: contactValidation.emailRequired,
    }
  }

  return null
}

function validateEmailFormat(email: string): ValidationError | null {
  const emailValidation = validateEmail(email)

  if (!emailValidation.isValid) {
    return {
      field: 'email',
      message: emailValidation.message || commonValidation.emailFormatFallback,
    }
  }

  return null
}

/**
 * Generic URL validation for any field
 */
function validateUrlIfProvided(
  url: string | undefined,
  fieldName: string,
  fieldLabel: string
): ValidationError | null {
  if (!url) {
    return null
  }

  const urlValidation = validateUrl(url, fieldLabel)

  if (!urlValidation.isValid) {
    return {
      field: fieldName,
      message:
        urlValidation.message ||
        fieldMessage(commonValidation.urlFormatFallback, fieldLabel),
    }
  }

  return null
}

/**
 * Validate LinkedIn URL if provided
 * Uses generic URL validation
 */
function validateLinkedInIfProvided(
  linkedinUrl: string | undefined
): ValidationError | null {
  return validateUrlIfProvided(linkedinUrl, 'linkedin', 'LinkedIn profile URL')
}

/**
 * Validate GitHub/GitLab URL if provided
 * Uses generic URL validation
 */
function validateGitHubGitlabUrlIfProvided(
  githubGitlabUrl: string | undefined
): ValidationError | null {
  return validateUrlIfProvided(
    githubGitlabUrl,
    'githubGitlabUrl',
    'GitHub or GitLab profile URL'
  )
}

function detectBot(fields: FormFields): BotDetectionResult {
  const honeypotResult = validateHoneypot(fields)
  if (honeypotResult.isBot) {
    return honeypotResult
  }

  if (fields.form_start_time) {
    const timingResult = validateFormTiming(fields.form_start_time)
    if (timingResult.isBot) {
      return timingResult
    }
  }

  return { isBot: false }
}

/**
 * Universal form validator that routes to appropriate validator based on formType
 * Supports all form types: contact, candidate, hiring-manager, verifier
 * Currently implements validation for: contact, verifier
 * Future forms can be added without changing the unified function
 * Also formats array fields from JSON to comma-separated strings
 */
function validateUnifiedFormData(
  data: UnifiedFormSubmissionData
): ValidationError | null {
  const { formType, email } = data

  // Common validation for all forms
  const emailRequiredError = validateRequiredEmail(email)
  if (emailRequiredError) {
    return emailRequiredError
  }

  const emailFormatError = validateEmailFormat(email as string)
  if (emailFormatError) {
    return emailFormatError
  }

  // Format array fields before validation
  const formattedData = formatFormFields(data as FormFields)
  const dataWithFormattedFields = { ...data, ...formattedData }

  // Form-specific validation routing using object map instead of switch
  const validatorMap: Record<
    string,
    (d: UnifiedFormSubmissionData) => ValidationError | null
  > = {
    contact: (d) =>
      validateContactFormDataUnified(d as typeof d & { formType: 'contact' }),
    verifier: (d) =>
      validateVerifierFormData(d as typeof d & { formType: 'verifier' }),
    candidate: (d) =>
      validateCandidateFormData(d as typeof d & { formType: 'candidate' }),
    'hiring-manager': (d) =>
      validateHiringManagerFormData(
        d as typeof d & { formType: 'hiring-manager' }
      ),
  }

  const validator = validatorMap[formType]
  if (!validator) {
    // This should never happen due to type safety, but handle gracefully
    return null
  }

  return validator(dataWithFormattedFields)
}

/**
 * Validate contact form data (email, contactName, message)
 */
function validateContactFormDataUnified(
  data: UnifiedFormSubmissionData & { formType: 'contact' }
): ValidationError | null {
  // Validate contactName
  if (!data.contactName) {
    return {
      field: 'contactName',
      message: contactValidation.nameRequired,
    }
  }

  const nameValidation = validateContactName(data.contactName as string)
  if (!nameValidation.isValid) {
    return {
      field: 'contactName',
      message: nameValidation.message || commonValidation.nameFormatFallback,
    }
  }

  if (!data.message) {
    return {
      field: 'message',
      message: contactValidation.messageRequired,
    }
  }

  const messageValidation = validateMessage(data.message as string)
  if (!messageValidation.isValid) {
    return {
      field: 'message',
      message:
        messageValidation.message || commonValidation.messageFormatFallback,
    }
  }

  return null
}

/**
 * Validate verifier form data (email, linkedin, githubGitlabUrl)
 */
function validateVerifierFormData(
  data: UnifiedFormSubmissionData & { formType: 'verifier' }
): ValidationError | null {
  const linkedinError = validateLinkedInIfProvided(
    data.linkedin as string | undefined
  )
  if (linkedinError) {
    return linkedinError
  }

  const githubGitlabError = validateGitHubGitlabUrlIfProvided(
    data.githubGitlabUrl as string | undefined
  )
  if (githubGitlabError) {
    return githubGitlabError
  }

  return null
}

/**
 * Validate candidate form data (email, linkedin, githubGitlabUrl)
 */
function validateCandidateFormData(
  data: UnifiedFormSubmissionData & { formType: 'candidate' }
): ValidationError | null {
  const linkedinError = validateLinkedInIfProvided(
    data.linkedin as string | undefined
  )
  if (linkedinError) {
    return linkedinError
  }

  const githubGitlabError = validateGitHubGitlabUrlIfProvided(
    data.githubGitlabUrl as string | undefined
  )
  if (githubGitlabError) {
    return githubGitlabError
  }

  return null
}

/**
 * Validate hiring manager form data (email, linkedin, githubGitlabUrl)
 */
function validateHiringManagerFormData(
  data: UnifiedFormSubmissionData & { formType: 'hiring-manager' }
): ValidationError | null {
  const linkedinError = validateLinkedInIfProvided(
    data.linkedin as string | undefined
  )
  if (linkedinError) {
    return linkedinError
  }

  const githubGitlabError = validateGitHubGitlabUrlIfProvided(
    data.githubGitlabUrl as string | undefined
  )
  if (githubGitlabError) {
    return githubGitlabError
  }

  return null
}

export {
  validateUnifiedFormData,
  detectBot,
  validateHoneypot,
  validateFormTiming,
  validateRequiredEmail,
  validateEmailFormat,
  validateUrlIfProvided,
  validateLinkedInIfProvided,
  validateGitHubGitlabUrlIfProvided,
  formatFormFields,
}
