import {
  validateEmail,
  validateUrl,
  validateName,
  validateMessage,
} from '../validation'
import type {
  BotDetectionResult,
  FormFields,
  FormSubmissionData,
  ValidationError,
  UnifiedFormSubmissionData,
} from '../../types/netlify.types'
import type { ContactFormSubmissionData } from '../../types/ContactForm.types'

const FORM_SUBMISSION_MIN_TIME_MS = 2000
const FORM_SUBMISSION_MAX_TIME_MS = 30 * 60 * 1000

function validateHoneypot(fields: FormFields): BotDetectionResult {
  if (fields.website && fields.website.trim() !== '') {
    return {
      isBot: true,
      reason: 'Honeypot field filled',
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
      message: 'Email is required.',
    }
  }

  return null
}

function validateEmailFormat(email: string): ValidationError | null {
  const emailValidation = validateEmail(email)

  if (!emailValidation.isValid) {
    return {
      field: 'email',
      message:
        emailValidation.message || 'Please provide a valid email address.',
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
      message: urlValidation.message || `Please provide a valid ${fieldLabel}.`,
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
 * Validate GitHub URL if provided
 * Uses generic URL validation
 */
function validateGitHubIfProvided(
  githubUrl: string | undefined
): ValidationError | null {
  return validateUrlIfProvided(githubUrl, 'github', 'GitHub profile URL')
}

/**
 * @deprecated Use validateUnifiedFormData instead
 * Legacy validator - kept for reference but no longer used
 */
function validateFormData(data: FormSubmissionData): ValidationError | null {
  const { email, fields = {} } = data

  const emailRequiredError = validateRequiredEmail(email)
  if (emailRequiredError) {
    return emailRequiredError
  }

  const emailFormatError = validateEmailFormat(email as string)
  if (emailFormatError) {
    return emailFormatError
  }

  const linkedinError = validateLinkedInIfProvided(fields.linkedin)
  if (linkedinError) {
    return linkedinError
  }

  const githubError = validateGitHubIfProvided(fields.github)
  if (githubError) {
    return githubError
  }

  return null
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
 * @deprecated Use validateUnifiedFormData instead
 * Legacy validator - kept for reference but no longer used
 * Validate contact form data
 */
function validateContactFormData(
  data: ContactFormSubmissionData
): ValidationError | null {
  const { email, fields = {} } = data

  const emailRequiredError = validateRequiredEmail(email)
  if (emailRequiredError) {
    return emailRequiredError
  }

  const emailFormatError = validateEmailFormat(email as string)
  if (emailFormatError) {
    return emailFormatError
  }

  // Validate name
  if (!fields.name) {
    return {
      field: 'name',
      message: 'Name is required.',
    }
  }

  const nameValidation = validateName(fields.name)
  if (!nameValidation.isValid) {
    return {
      field: 'name',
      message: nameValidation.message || 'Please provide a valid name.',
    }
  }

  // Validate message
  if (!fields.message) {
    return {
      field: 'message',
      message: 'Message is required.',
    }
  }

  const messageValidation = validateMessage(fields.message)
  if (!messageValidation.isValid) {
    return {
      field: 'message',
      message: messageValidation.message || 'Please provide a valid message.',
    }
  }

  return null
}

/**
 * Universal form validator that routes to appropriate validator based on formType
 * Supports all form types: signup, contact, candidate, hiring-manager, verifier
 * Currently implements validation for: signup, contact
 * Future forms can be added without changing the unified function
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

  // Form-specific validation
  switch (formType) {
    case 'signup':
      return validateSignupFormData(
        data as typeof data & { formType: 'signup' }
      )
    case 'contact':
      return validateContactFormDataUnified(
        data as typeof data & { formType: 'contact' }
      )
    case 'candidate':
    case 'hiring-manager':
    case 'verifier': {
      // Future implementations - currently no additional validation
      return null
    }
    default: {
      const _exhaustive: never = formType
      return _exhaustive
    }
  }
}

/**
 * Validate signup form data (email, linkedin, github)
 */
function validateSignupFormData(
  data: UnifiedFormSubmissionData & { formType: 'signup' }
): ValidationError | null {
  const { fields = {} } = data

  const linkedinError = validateLinkedInIfProvided(
    fields.linkedin as string | undefined
  )
  if (linkedinError) {
    return linkedinError
  }

  const githubError = validateGitHubIfProvided(
    fields.github as string | undefined
  )
  if (githubError) {
    return githubError
  }

  return null
}

/**
 * Validate contact form data (email, name, message)
 */
function validateContactFormDataUnified(
  data: UnifiedFormSubmissionData & { formType: 'contact' }
): ValidationError | null {
  const { fields = {} } = data

  // Validate name
  if (!fields.name) {
    return {
      field: 'name',
      message: 'Name is required.',
    }
  }

  const nameValidation = validateName(fields.name as string)
  if (!nameValidation.isValid) {
    return {
      field: 'name',
      message: nameValidation.message || 'Please provide a valid name.',
    }
  }

  // Validate message
  if (!fields.message) {
    return {
      field: 'message',
      message: 'Message is required.',
    }
  }

  const messageValidation = validateMessage(fields.message as string)
  if (!messageValidation.isValid) {
    return {
      field: 'message',
      message: messageValidation.message || 'Please provide a valid message.',
    }
  }

  return null
}

export {
  validateFormData,
  validateContactFormData,
  validateUnifiedFormData,
  detectBot,
  validateHoneypot,
  validateFormTiming,
  validateRequiredEmail,
  validateEmailFormat,
  validateUrlIfProvided,
  validateLinkedInIfProvided,
  validateGitHubIfProvided,
}
