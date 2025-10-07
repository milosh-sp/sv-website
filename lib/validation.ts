/**
 * Centralized validation utilities for form inputs
 * Shared between client and server to ensure consistency
 */

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

/**
 * Validate email address format
 */
export function validateEmail(email: string): ValidationResult {
  if (!email) {
    return {
      isValid: false,
      message: "Email is required"
    };
  }

  if (typeof email !== 'string') {
    return {
      isValid: false,
      message: "Email must be a string"
    };
  }

  const trimmedEmail = email.trim();
  if (!trimmedEmail) {
    return {
      isValid: false,
      message: "Email is required"
    };
  }

  // More comprehensive email regex that handles edge cases
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  if (!emailRegex.test(trimmedEmail)) {
    return {
      isValid: false,
      message: "Please enter a valid email address"
    };
  }

  // Check for reasonable length limits
  if (trimmedEmail.length > 254) {
    return {
      isValid: false,
      message: "Email address is too long"
    };
  }

  return {
    isValid: true
  };
}

/**
 * Validate LinkedIn profile URL format
 */
export function validateLinkedIn(url: string): ValidationResult {
  if (!url) {
    return {
      isValid: false,
      message: "LinkedIn profile URL is required"
    };
  }

  if (typeof url !== 'string') {
    return {
      isValid: false,
      message: "LinkedIn URL must be a string"
    };
  }

  const trimmedUrl = url.trim();
  if (!trimmedUrl) {
    return {
      isValid: false,
      message: "LinkedIn profile URL is required"
    };
  }

  // LinkedIn profile URL regex - supports various formats
  const linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
  
  if (!linkedinRegex.test(trimmedUrl)) {
    return {
      isValid: false,
      message: "Please enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/yourname)"
    };
  }

  return {
    isValid: true
  };
}

/**
 * Validate form data for signup
 */
export interface SignupFormData {
  email: string;
  linkedin: string;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateSignupForm(data: SignupFormData): FormValidationResult {
  const errors: Record<string, string> = {};

  // Validate email
  const emailValidation = validateEmail(data.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message || "Invalid email";
  }

  // Validate LinkedIn
  const linkedinValidation = validateLinkedIn(data.linkedin);
  if (!linkedinValidation.isValid) {
    errors.linkedin = linkedinValidation.message || "Invalid LinkedIn URL";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Legacy validation functions for backward compatibility
 * These return boolean values like the original functions
 */
export function isValidEmail(email: string): boolean {
  return validateEmail(email).isValid;
}

export function isValidLinkedIn(url: string): boolean {
  return validateLinkedIn(url).isValid;
}
