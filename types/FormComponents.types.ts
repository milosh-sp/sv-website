import type { ComponentProps } from 'react'
import type { UserType } from './FormData.types'

interface UserTypeHeaderProps extends ComponentProps<'header'> {
  userType: UserType | null
}

interface FormFieldProps extends ComponentProps<'input'> {
  error?: string
  icon: React.ReactNode
  label: string
  ariaDescribedBy?: string
  className?: string
}

interface HoneypotFieldProps extends ComponentProps<'div'> {
  id: string
  name: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
}

interface SubmitButtonProps extends ComponentProps<'button'> {
  isSubmitting: boolean
  isDisabled: boolean
  ariaLabel: string
  loadingText: string
  idleText: string
  className?: string
}

type SubmitStatus = 'idle' | 'success' | 'error'

interface StatusMessageProps extends ComponentProps<'section'> {
  status: SubmitStatus
  errorMessage?: string
  successIcon?: React.ReactNode
  errorIcon?: React.ReactNode
  successMessage?: string
  defaultErrorMessage?: string
  className?: string
}

export type {
  UserTypeHeaderProps,
  FormFieldProps,
  HoneypotFieldProps,
  SubmitButtonProps,
  StatusMessageProps,
  SubmitStatus,
}
