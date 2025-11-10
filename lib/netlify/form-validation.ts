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

export {
  validateFormData,
  validateContactFormData,
  detectBot,
  validateHoneypot,
  validateFormTiming,
  validateRequiredEmail,
  validateEmailFormat,
  validateUrlIfProvided,
  validateLinkedInIfProvided,
  validateGitHubIfProvided,
}
