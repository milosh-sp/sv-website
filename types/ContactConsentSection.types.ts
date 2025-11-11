import type { FieldsetHTMLAttributes } from 'react'

interface ContactConsentSectionProps
  extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  email: string
  linkedIn?: string
  github?: string
  newsletterOptIn: string | boolean // Accept both for compatibility
  includeLinkedIn: boolean
  includeGitHub?: boolean
  errors: Record<string, string>
  isSubmitting: boolean
  onEmailChange: (value: string) => void
  onLinkedInChange?: (value: string) => void
  onGitHubChange?: (value: string) => void
  onNewsletterOptInChange: (checked: boolean) => void
}

export type { ContactConsentSectionProps }
