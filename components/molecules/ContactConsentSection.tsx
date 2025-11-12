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
  githubGitlabUrl = '',
  newsletterOptIn,
  includeLinkedIn,
  includeGitHub = true,
  fields,
  errors,
  isSubmitting,
  onEmailChange,
  onLinkedInChange,
  onGitHubGitlabUrlChange,
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
  const showGitHubGitlab = fields
    ? fields.includes('githubGitlabUrl')
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

      {/* GitHub/GitLab Field - Conditional */}
      {showGitHubGitlab && (
        <FormField
          id='githubGitlabUrl'
          type='url'
          placeholder={strings.waitlistForms.fields.githubGitlabUrl.placeholder}
          value={githubGitlabUrl}
          onChange={(e) => onGitHubGitlabUrlChange?.(e.target.value)}
          error={errors.githubGitlabUrl}
          disabled={isSubmitting}
          icon={<Github className={cn('w-5 h-5')} />}
          label={strings.waitlistForms.fields.githubGitlabUrl.label}
          ariaDescribedBy='githubGitlabUrl-error'
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
