import type { UserType } from './FormData.types'
import type { FormData, FormErrors, SubmitStatus } from './SignUpModal.types'

interface UserTypeHeaderProps {
  userType: UserType | null
}

interface FormFieldProps {
  id: string
  type: 'email' | 'url'
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  disabled?: boolean
  icon: React.ReactNode
  label: string
  ariaDescribedBy?: string
}

interface HoneypotFieldProps {
  id: string
  name: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
}

interface SubmitButtonProps {
  isSubmitting: boolean
  isDisabled: boolean
  ariaLabel: string
  loadingText: string
  idleText: string
}

interface StatusMessageProps {
  status: SubmitStatus
  errorMessage?: string
  successIcon: string
  errorIcon: string
  successMessage: string
  defaultErrorMessage: string
}

interface SignupFormProps {
  formData: FormData
  isSubmitting: boolean
  errors: FormErrors
  submitStatus: SubmitStatus
  honeypotValue: string
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onLinkedInChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onGitHubChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onHoneypotChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export type {
  UserTypeHeaderProps,
  FormFieldProps,
  HoneypotFieldProps,
  SubmitButtonProps,
  StatusMessageProps,
  SignupFormProps,
}
