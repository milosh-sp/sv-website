interface ValidationResult {
  isValid: boolean
  message?: string
}

interface ContactFormValidationData {
  email: string
  contactName: string
  message: string
}

interface FormValidationResult {
  isValid: boolean
  errors: Record<string, string>
}

export type {
  ValidationResult,
  ContactFormValidationData,
  FormValidationResult,
}
