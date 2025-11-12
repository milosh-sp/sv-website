'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

import { Checkbox } from '@/components/atoms/Checkbox'
import { FormField } from '@/components/molecules/FormField'
import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'

import type { ContactConsentSectionProps } from '@/types/ContactConsentSection.types'

export function ContactConsentSection({
  email,
  linkedIn = '',
  github = '',
  newsletterOptIn,
  includeLinkedIn,
  includeGitHub = true,
  fields,
  errors,
  isSubmitting,
  onEmailChange,
  onLinkedInChange,
  onGitHubChange,
  onNewsletterOptInChange,
  className,
  ...props
}: ContactConsentSectionProps) {
  const newsletterOptInBool =
    typeof newsletterOptIn === 'string'
      ? newsletterOptIn === 'true'
      : newsletterOptIn

  // Determine which fields to show
  // If fields array is provided, use it; otherwise fall back to includeLinkedIn/includeGitHub
  const showEmail = !fields || fields.includes('email')
  const showLinkedIn = fields
    ? fields.includes('linkedIn')
    : (includeLinkedIn ?? true)
  const showGitHub = fields
    ? fields.includes('github')
    : (includeGitHub ?? true)
  const showNewsletter = !fields || fields.includes('newsletterOptIn')

  return (
    <fieldset className={cn('space-y-4', className)} {...props}>
      {/* Email Field */}
      {showEmail && (
        <FormField
          id='email'
          type='email'
          placeholder={strings.waitlistForms.fields.email.placeholder}
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          error={errors.email}
          disabled={isSubmitting}
          icon={<Mail className={cn('w-5 h-5')} />}
          label={strings.waitlistForms.fields.email.label}
          ariaDescribedBy='email-error'
        />
      )}

      {/* LinkedIn Field - Conditional */}
      {showLinkedIn && (
        <FormField
          id='linkedIn'
          type='url'
          placeholder={strings.waitlistForms.fields.linkedIn.placeholder}
          value={linkedIn}
          onChange={(e) => onLinkedInChange?.(e.target.value)}
          error={errors.linkedIn}
          disabled={isSubmitting}
          icon={<Linkedin className={cn('w-5 h-5')} />}
          label={strings.waitlistForms.fields.linkedIn.label}
          ariaDescribedBy='linkedin-error'
        />
      )}

      {/* GitHub Field - Conditional */}
      {showGitHub && (
        <FormField
          id='github'
          type='url'
          placeholder={strings.waitlistForms.fields.github.placeholder}
          value={github}
          onChange={(e) => onGitHubChange?.(e.target.value)}
          error={errors.github}
          disabled={isSubmitting}
          icon={<Github className={cn('w-5 h-5')} />}
          label={strings.waitlistForms.fields.github.label}
          ariaDescribedBy='github-error'
        />
      )}

      {/* Newsletter Opt-in - Optional */}
      {showNewsletter && (
        <Checkbox
          id='newsletterOptIn'
          label={strings.waitlistForms.labels.newsletterOptIn}
          checked={newsletterOptInBool}
          onChange={(e) => onNewsletterOptInChange(e.target.checked)}
          disabled={isSubmitting}
        />
      )}
    </fieldset>
  )
}
