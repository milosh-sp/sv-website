type UserType = 'member' | 'guru'

interface FormData {
  name: string
  email: string
  userType: UserType
  message?: string
  honeypot?: string
}

interface FormErrors {
  name?: string
  email?: string
  userType?: string
  message?: string
}

interface FormState {
  data: FormData
  errors: FormErrors
  isSubmitting: boolean
  isSubmitted: boolean
}

// Form data interface for waitlist signup
interface WaitlistFormData {
  email: string
  linkedin: string
  painPoint: string
  userType: UserType
}

// Extended form data with metadata for submission
interface WaitlistSubmission extends WaitlistFormData {
  timestamp: string
  source: string
}

export type {
  FormData,
  FormErrors,
  FormState,
  WaitlistFormData,
  WaitlistSubmission,
  UserType,
}
