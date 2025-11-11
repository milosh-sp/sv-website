import type { HTMLAttributes } from 'react'

interface ContactConsentSectionProps extends HTMLAttributes<HTMLDivElement> {
  email: string
  linkedIn?: string
  github?: string
  privacyConsent: string | boolean // Accept both for compatibility
  newsletterOptIn: string | boolean // Accept both for compatibility
  includeLinkedIn: boolean
  includeGitHub?: boolean
  errors: Record<string, string>
  isSubmitting: boolean
  onEmailChange: (value: string) => void
  onLinkedInChange?: (value: string) => void
  onGitHubChange?: (value: string) => void
  onPrivacyConsentChange: (checked: boolean) => void
  onNewsletterOptInChange: (checked: boolean) => void
}

export type { ContactConsentSectionProps }
