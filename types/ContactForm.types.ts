import type { ComponentProps } from 'react'

// Contact form data structure
interface ContactFormData extends Record<string, string> {
  email: string
  contactName: string
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
  onContactNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onHoneypotChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export type { ContactFormData, ContactTextAreaFieldProps, ContactFormProps }
