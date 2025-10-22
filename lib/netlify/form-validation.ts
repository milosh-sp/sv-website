import {
  validateEmail,
  validateGitHub,
  validateLinkedIn,
} from '../validation'
import type {
  BotDetectionResult,
  FormFields,
  FormSubmissionData,
  ValidationError,
} from '../../types/netlify.types'

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

function validateLinkedInIfProvided(
  linkedinUrl: string | undefined
): ValidationError | null {
  if (!linkedinUrl) {
    return null
  }

  const linkedinValidation = validateLinkedIn(linkedinUrl)

  if (!linkedinValidation.isValid) {
    return {
      field: 'linkedin',
      message:
        linkedinValidation.message ||
        'Please provide a valid LinkedIn profile URL.',
    }
  }

  return null
}

function validateGitHubIfProvided(
  githubUrl: string | undefined
): ValidationError | null {
  if (!githubUrl) {
    return null
  }

  const githubValidation = validateGitHub(githubUrl)

  if (!githubValidation.isValid) {
    return {
      field: 'github',
      message:
        githubValidation.message ||
        'Please provide a valid GitHub profile URL.',
    }
  }

  return null
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

export {
  validateFormData,
  detectBot,
  validateHoneypot,
  validateFormTiming,
  validateRequiredEmail,
  validateEmailFormat,
  validateLinkedInIfProvided,
  validateGitHubIfProvided,
}

