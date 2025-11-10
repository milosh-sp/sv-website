import type { ComponentProps } from 'react'

// Contact form data structure
interface ContactFormData extends Record<string, string> {
  email: string
  name: string
  message: string
}

/**
 * Interface for form field errors
 */
interface ContactFormErrors {
  [key: string]: string
}

/**
 * Type for submit status states
 */
type ContactSubmitStatus = 'idle' | 'success' | 'error'

// Form submission data for API
interface ContactFormSubmissionData {
  email: string
  fields?: {
    name?: string
    message?: string
    website?: string // Honeypot field
    form_start_time?: string // For timing validation
  }
}

// Contact form field props
interface ContactFormFieldProps extends ComponentProps<'div'> {
  id: string
  type: 'email' | 'text'
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  disabled?: boolean
  icon: React.ReactNode
  label: string
  ariaDescribedBy?: string
}

// Contact form textarea props
interface ContactTextAreaFieldProps
  extends Omit<ComponentProps<'div'>, 'onChange'> {
  id: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  error?: string
  disabled?: boolean
  icon: React.ReactNode
  label: string
  ariaDescribedBy?: string
  rows?: number
}

// Contact form props
interface ContactFormProps extends ComponentProps<'form'> {
  formData: ContactFormData
  isSubmitting: boolean
  errors: ContactFormErrors
  submitStatus: ContactSubmitStatus
  honeypotValue: string
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onHoneypotChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

// Contact submit button props
interface ContactSubmitButtonProps extends ComponentProps<'button'> {
  isSubmitting: boolean
  isDisabled: boolean
  ariaLabel: string
  loadingText: string
  idleText: string
}

export type {
  ContactFormData,
  ContactFormErrors,
  ContactSubmitStatus,
  ContactFormSubmissionData,
  ContactFormFieldProps,
  ContactTextAreaFieldProps,
  ContactFormProps,
  ContactSubmitButtonProps,
}
