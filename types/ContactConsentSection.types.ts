import type { FieldsetHTMLAttributes } from 'react'

interface ContactConsentSectionProps
  extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  email: string
  linkedIn?: string
  githubGitlabUrl?: string
  newsletterOptIn: string | boolean // Accept both for compatibility
  includeLinkedIn?: boolean // Deprecated: use fields array instead
  includeGitHub?: boolean // Deprecated: use fields array instead
  fields?: string[] // New: array of field names to render
  errors: Record<string, string>
  isSubmitting: boolean
  onEmailChange: (value: string) => void
  onLinkedInChange?: (value: string) => void
  onGitHubGitlabUrlChange?: (value: string) => void
  onNewsletterOptInChange: (checked: boolean) => void
}

export type { ContactConsentSectionProps }
