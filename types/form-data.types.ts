export type UserType = 'candidate' | 'company' | null

export interface FormData {
  name: string
  email: string
  userType: UserType
  message?: string
  honeypot?: string
}

export interface FormErrors {
  name?: string
  email?: string
  userType?: string
  message?: string
}

export interface FormState {
  data: FormData
  errors: FormErrors
  isSubmitting: boolean
  isSubmitted: boolean
}
