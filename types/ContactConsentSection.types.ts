import type { FieldsetHTMLAttributes } from 'react'

interface ContactConsentSectionProps
  extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  email: string
  linkedIn?: string
  githubGitlabUrl?: string
  companyUrl?: string
  newsletterOptIn: string | boolean // Accept both for compatibility
  fields?: string[] // New: array of field names to render
  errors: Record<string, string>
  isSubmitting: boolean
  onEmailChange: (value: string) => void
  onLinkedInChange?: (value: string) => void
  onGitHubGitlabUrlChange?: (value: string) => void
  onCompanyUrlChange?: (value: string) => void
  onNewsletterOptInChange: (checked: boolean) => void
}

export type { ContactConsentSectionProps }
