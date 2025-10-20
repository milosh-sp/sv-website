/**
 * Interface for form field errors
 */
interface FormErrors {
  [key: string]: string
}

/**
 * Type for submit status states
 */
type SubmitStatus = 'idle' | 'success' | 'error'

/**
 * Form field names for validation
 */
type FormFieldName = 'email' | 'linkedin' | 'github'

/**
 * Form data interface
 */
interface FormData {
  email: string
  linkedin: string
  github: string
}

/**
 * Signup modal context type
 */
interface SignupModalContextType {
  isOpen: boolean
  userType: 'member' | 'contributor' | null
  closeModal: () => void
}

/**
 * Form submission data interface
 */
interface FormSubmissionData {
  email: string
  fields: {
    linkedin: string
    github: string
    user_type: string
    source: string
    website: string
    form_start_time: string
  }
}

export type {
  FormErrors,
  SubmitStatus,
  FormFieldName,
  FormData,
  SignupModalContextType,
  FormSubmissionData,
}
