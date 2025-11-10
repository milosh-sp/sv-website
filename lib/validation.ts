export interface ValidationResult {
  isValid: boolean
  message?: string
}

/**
 * Validate email address format
 */
export function validateEmail(email: string): ValidationResult {
  if (!email) {
    return {
      isValid: false,
      message: 'Email is required',
    }
  }

  if (typeof email !== 'string') {
    return {
      isValid: false,
      message: 'Email must be a string',
    }
  }

  const trimmedEmail = email.trim()
  if (!trimmedEmail) {
    return {
      isValid: false,
      message: 'Email is required',
    }
  }

  // More comprehensive email regex that handles edge cases
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  if (!emailRegex.test(trimmedEmail)) {
    return {
      isValid: false,
      message: 'Please enter a valid email address',
    }
  }

  // Check for reasonable length limits
  if (trimmedEmail.length > 254) {
    return {
      isValid: false,
      message: 'Email address is too long',
    }
  }

  return {
    isValid: true,
  }
}

/**
 * Generic URL validator
 * Validates that a string is a properly formatted URL with https:// protocol
 * and valid domain structure
 */
export function validateUrl(url: string, fieldName = 'URL'): ValidationResult {
  if (!url) {
    return {
      isValid: false,
      message: `${fieldName} is required`,
    }
  }

  if (typeof url !== 'string') {
    return {
      isValid: false,
      message: `${fieldName} must be a string`,
    }
  }

  const trimmedUrl = url.trim()
  if (!trimmedUrl) {
    return {
      isValid: false,
      message: `${fieldName} is required`,
    }
  }

  // Check for reasonable length limits
  if (trimmedUrl.length > 2048) {
    return {
      isValid: false,
      message: `${fieldName} is too long`,
    }
  }

  // Try to parse as URL using the URL constructor
  let parsedUrl: URL
  try {
    parsedUrl = new URL(trimmedUrl)
  } catch (_error) {
    return {
      isValid: false,
      message: `Please enter a valid URL (e.g., https://example.com)`,
    }
  }

  // Validate protocol - only allow https
  if (parsedUrl.protocol !== 'https:') {
    return {
      isValid: false,
      message: `${fieldName} must use HTTPS protocol`,
    }
  }

  // Validate hostname exists and has proper structure
  if (!parsedUrl.hostname || parsedUrl.hostname.length === 0) {
    return {
      isValid: false,
      message: `${fieldName} must have a valid domain`,
    }
  }

  // Check for valid domain structure (at least one dot for TLD)
  const domainParts = parsedUrl.hostname.split('.')
  if (domainParts.length < 2) {
    return {
      isValid: false,
      message: `${fieldName} must have a valid domain with a top-level domain`,
    }
  }

  // Validate each domain part is not empty
  if (domainParts.some((part) => part.length === 0)) {
    return {
      isValid: false,
      message: `${fieldName} has an invalid domain structure`,
    }
  }

  return {
    isValid: true,
  }
}

/**
 * Validate LinkedIn profile URL format
 * Now uses generic URL validation
 */
export function validateLinkedIn(url: string): ValidationResult {
  return validateUrl(url, 'LinkedIn profile URL')
}

/**
 * Validate GitHub profile URL format
 * Now uses generic URL validation
 */
export function validateGitHub(url: string): ValidationResult {
  return validateUrl(url, 'GitHub profile URL')
}

/**
 * Validate form data for signup
 */
export interface SignupFormData {
  email: string
  linkedin: string
  github?: string
}

export interface FormValidationResult {
  isValid: boolean
  errors: Record<string, string>
}

export function validateSignupForm(data: SignupFormData): FormValidationResult {
  const errors: Record<string, string> = {}

  // Validate email
  const emailValidation = validateEmail(data.email)
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message || 'Invalid email'
  }

  // Validate LinkedIn
  const linkedinValidation = validateLinkedIn(data.linkedin)
  if (!linkedinValidation.isValid) {
    errors.linkedin = linkedinValidation.message || 'Invalid LinkedIn URL'
  }

  // Validate GitHub if provided
  if (data.github) {
    const githubValidation = validateGitHub(data.github)
    if (!githubValidation.isValid) {
      errors.github = githubValidation.message || 'Invalid GitHub URL'
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Legacy validation functions for backward compatibility
 * These return boolean values like the original functions
 */
function isValidEmail(email: string): boolean {
  return validateEmail(email).isValid
}

function isValidUrl(url: string): boolean {
  return validateUrl(url).isValid
}

function isValidLinkedIn(url: string): boolean {
  return validateLinkedIn(url).isValid
}

function isValidGitHub(url: string): boolean {
  return validateGitHub(url).isValid
}

function isFormValid(formData: {
  email: string
  linkedin: string
  github: string
}): boolean {
  if (!formData.email || !formData.linkedin || !formData.github) {
    return false
  }

  const emailValidation = validateEmail(formData.email)
  if (!emailValidation.isValid) {
    return false
  }

  const linkedinValidation = validateLinkedIn(formData.linkedin)
  if (!linkedinValidation.isValid) {
    return false
  }

  const githubValidation = validateGitHub(formData.github)
  if (!githubValidation.isValid) {
    return false
  }

  return true
}

/**
 * Validate name field for contact form
 */
export function validateName(name: string): ValidationResult {
  if (!name) {
    return {
      isValid: false,
      message: 'Name is required',
    }
  }

  if (typeof name !== 'string') {
    return {
      isValid: false,
      message: 'Name must be a string',
    }
  }

  const trimmedName = name.trim()
  if (!trimmedName) {
    return {
      isValid: false,
      message: 'Name is required',
    }
  }

  if (trimmedName.length < 2) {
    return {
      isValid: false,
      message: 'Name must be at least 2 characters',
    }
  }

  if (trimmedName.length > 100) {
    return {
      isValid: false,
      message: 'Name must be less than 100 characters',
    }
  }

  return {
    isValid: true,
  }
}

/**
 * Validate message field for contact form
 */
export function validateMessage(message: string): ValidationResult {
  if (!message) {
    return {
      isValid: false,
      message: 'Message is required',
    }
  }

  if (typeof message !== 'string') {
    return {
      isValid: false,
      message: 'Message must be a string',
    }
  }

  const trimmedMessage = message.trim()
  if (!trimmedMessage) {
    return {
      isValid: false,
      message: 'Message is required',
    }
  }

  if (trimmedMessage.length < 10) {
    return {
      isValid: false,
      message: 'Message must be at least 10 characters',
    }
  }

  if (trimmedMessage.length > 1000) {
    return {
      isValid: false,
      message: 'Message must be less than 1000 characters',
    }
  }

  return {
    isValid: true,
  }
}

/**
 * Contact form data interface
 */
export interface ContactFormData {
  email: string
  name: string
  message: string
}

/**
 * Validate contact form data
 */
export function validateContactForm(
  data: ContactFormData
): FormValidationResult {
  const errors: Record<string, string> = {}

  // Validate email
  const emailValidation = validateEmail(data.email)
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message || 'Invalid email'
  }

  // Validate name
  const nameValidation = validateName(data.name)
  if (!nameValidation.isValid) {
    errors.name = nameValidation.message || 'Invalid name'
  }

  // Validate message
  const messageValidation = validateMessage(data.message)
  if (!messageValidation.isValid) {
    errors.message = messageValidation.message || 'Invalid message'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Check if contact form is valid (all fields filled and valid)
 */
export function isContactFormValid(formData: ContactFormData): boolean {
  if (!formData.email || !formData.name || !formData.message) {
    return false
  }

  const emailValidation = validateEmail(formData.email)
  if (!emailValidation.isValid) {
    return false
  }

  const nameValidation = validateName(formData.name)
  if (!nameValidation.isValid) {
    return false
  }

  const messageValidation = validateMessage(formData.message)
  if (!messageValidation.isValid) {
    return false
  }

  return true
}

export { isValidEmail, isValidUrl, isValidLinkedIn, isValidGitHub, isFormValid }
