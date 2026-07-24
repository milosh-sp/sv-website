import { strings } from '@/lib/strings'
import type {
  ContactFormValidationData,
  FormValidationResult,
  ValidationResult,
} from '@/types/Validation.types'

const contactValidation = strings.contactPage.validation
const commonValidation = strings.validationCommon

function fieldMessage(template: string, fieldName: string): string {
  return template.replaceAll('{fieldName}', fieldName)
}

/**
 * Validate email address format
 */
function validateEmail(email: string): ValidationResult {
  if (!email) {
    return {
      isValid: false,
      message: contactValidation.emailRequired,
    }
  }

  if (typeof email !== 'string') {
    return {
      isValid: false,
      message: commonValidation.emailMustBeString,
    }
  }

  const trimmedEmail = email.trim()
  if (!trimmedEmail) {
    return {
      isValid: false,
      message: contactValidation.emailRequired,
    }
  }

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  if (!emailRegex.test(trimmedEmail)) {
    return {
      isValid: false,
      message: contactValidation.emailInvalid,
    }
  }

  if (trimmedEmail.length > 254) {
    return {
      isValid: false,
      message: commonValidation.emailTooLong,
    }
  }

  return {
    isValid: true,
  }
}

/**
 * Generic URL validator
 */
function validateUrl(url: string, fieldName = 'URL'): ValidationResult {
  if (!url) {
    return {
      isValid: false,
      message: fieldMessage(commonValidation.fieldRequired, fieldName),
    }
  }

  if (typeof url !== 'string') {
    return {
      isValid: false,
      message: fieldMessage(commonValidation.fieldMustBeString, fieldName),
    }
  }

  const trimmedUrl = url.trim()
  if (!trimmedUrl) {
    return {
      isValid: false,
      message: fieldMessage(commonValidation.fieldRequired, fieldName),
    }
  }

  if (trimmedUrl.length > 2048) {
    return {
      isValid: false,
      message: fieldMessage(commonValidation.fieldTooLong, fieldName),
    }
  }

  let parsedUrl: URL
  try {
    parsedUrl = new URL(trimmedUrl)
  } catch (_error) {
    return {
      isValid: false,
      message: commonValidation.urlInvalid,
    }
  }

  if (parsedUrl.protocol !== 'https:') {
    return {
      isValid: false,
      message: fieldMessage(commonValidation.urlHttpsRequired, fieldName),
    }
  }

  if (!parsedUrl.hostname || parsedUrl.hostname.length === 0) {
    return {
      isValid: false,
      message: fieldMessage(commonValidation.urlInvalidDomain, fieldName),
    }
  }

  const domainParts = parsedUrl.hostname.split('.')
  if (domainParts.length < 2) {
    return {
      isValid: false,
      message: fieldMessage(commonValidation.urlInvalidTld, fieldName),
    }
  }

  if (domainParts.some((part) => part.length === 0)) {
    return {
      isValid: false,
      message: fieldMessage(commonValidation.urlInvalidStructure, fieldName),
    }
  }

  return {
    isValid: true,
  }
}

function validateLinkedIn(url: string): ValidationResult {
  if (!url) {
    return {
      isValid: true,
    }
  }

  return validateUrl(url, 'LinkedIn profile URL')
}

function validateGitHubGitlab(url: string): ValidationResult {
  if (!url) {
    return {
      isValid: true,
    }
  }
  return validateUrl(url, 'GitHub or GitLab profile URL')
}

function validateContactName(contactName: string): ValidationResult {
  if (!contactName) {
    return {
      isValid: false,
      message: contactValidation.nameRequired,
    }
  }

  if (typeof contactName !== 'string') {
    return {
      isValid: false,
      message: commonValidation.nameMustBeString,
    }
  }

  const trimmedName = contactName.trim()
  if (!trimmedName) {
    return {
      isValid: false,
      message: contactValidation.nameRequired,
    }
  }

  if (trimmedName.length < 2) {
    return {
      isValid: false,
      message: contactValidation.nameMinLength,
    }
  }

  if (trimmedName.length > 100) {
    return {
      isValid: false,
      message: contactValidation.nameMaxLength,
    }
  }

  return {
    isValid: true,
  }
}

function validateMessage(message: string): ValidationResult {
  if (!message) {
    return {
      isValid: false,
      message: contactValidation.messageRequired,
    }
  }

  if (typeof message !== 'string') {
    return {
      isValid: false,
      message: commonValidation.messageMustBeString,
    }
  }

  const trimmedMessage = message.trim()
  if (!trimmedMessage) {
    return {
      isValid: false,
      message: contactValidation.messageRequired,
    }
  }

  if (trimmedMessage.length < 10) {
    return {
      isValid: false,
      message: contactValidation.messageMinLength,
    }
  }

  if (trimmedMessage.length > 1000) {
    return {
      isValid: false,
      message: contactValidation.messageMaxLength,
    }
  }

  return {
    isValid: true,
  }
}

function validateContactForm(
  data: ContactFormValidationData
): FormValidationResult {
  const errors: Record<string, string> = {}

  const emailValidation = validateEmail(data.email)
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message || commonValidation.invalidEmail
  }

  const contactNameValidation = validateContactName(data.contactName)
  if (!contactNameValidation.isValid) {
    errors.contactName =
      contactNameValidation.message || commonValidation.invalidName
  }

  const messageValidation = validateMessage(data.message)
  if (!messageValidation.isValid) {
    errors.message =
      messageValidation.message || commonValidation.invalidMessage
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

function isContactFormValid(formData: ContactFormValidationData): boolean {
  if (!formData.email || !formData.contactName || !formData.message) {
    return false
  }

  const emailValidation = validateEmail(formData.email)
  if (!emailValidation.isValid) {
    return false
  }

  const contactNameValidation = validateContactName(formData.contactName)
  if (!contactNameValidation.isValid) {
    return false
  }

  const messageValidation = validateMessage(formData.message)
  if (!messageValidation.isValid) {
    return false
  }

  return true
}

export type {
  ValidationResult,
  ContactFormValidationData,
  FormValidationResult,
}

export {
  validateEmail,
  validateUrl,
  validateLinkedIn,
  validateGitHubGitlab,
  validateContactName,
  validateMessage,
  validateContactForm,
  isContactFormValid,
}
