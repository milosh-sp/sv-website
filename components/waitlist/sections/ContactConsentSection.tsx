'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { Checkbox } from '@/components/ui/Checkbox'
import { FormField } from '@/components/ui/FormField'
import { PrivacyPolicyConsent } from '@/components/ui/PrivacyPolicyConsent'
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface ContactConsentSectionProps extends HTMLAttributes<HTMLDivElement> {
  email: string
  linkedIn?: string
  github: string
  privacyConsent: string | boolean // Accept both for compatibility
  newsletterOptIn: string | boolean // Accept both for compatibility
  includeLinkedIn: boolean
  errors: Record<string, string>
  isSubmitting: boolean
  onEmailChange: (value: string) => void
  onLinkedInChange?: (value: string) => void
  onGitHubChange: (value: string) => void
  onPrivacyConsentChange: (checked: boolean) => void
  onNewsletterOptInChange: (checked: boolean) => void
}

export function ContactConsentSection({
  email,
  linkedIn = '',
  github,
  privacyConsent,
  newsletterOptIn,
  includeLinkedIn,
  errors,
  isSubmitting,
  onEmailChange,
  onLinkedInChange,
  onGitHubChange,
  onPrivacyConsentChange,
  onNewsletterOptInChange,
  className,
  ...props
}: ContactConsentSectionProps) {
  // Convert string booleans to actual booleans
  const privacyConsentBool =
    typeof privacyConsent === 'string'
      ? privacyConsent === 'true'
      : privacyConsent
  const newsletterOptInBool =
    typeof newsletterOptIn === 'string'
      ? newsletterOptIn === 'true'
      : newsletterOptIn

  return (
    <div className={cn('space-y-4', className)} {...props}>
      {/* Email Field */}
      <FormField
        id='email'
        type='email'
        placeholder='your@email.com'
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        error={errors.email}
        disabled={isSubmitting}
        icon={<Mail className='w-5 h-5' />}
        label='Email Address'
        ariaDescribedBy='email-error'
      />

      {/* LinkedIn Field - Conditional */}
      {includeLinkedIn && (
        <FormField
          id='linkedIn'
          type='url'
          placeholder='https://linkedin.com/in/yourprofile'
          value={linkedIn}
          onChange={(e) => onLinkedInChange?.(e.target.value)}
          error={errors.linkedIn}
          disabled={isSubmitting}
          icon={<Linkedin className='w-5 h-5' />}
          label='LinkedIn Profile URL'
          ariaDescribedBy='linkedin-error'
        />
      )}

      {/* GitHub Field - Optional */}
      <FormField
        id='github'
        type='url'
        placeholder='https://github.com/yourprofile (optional)'
        value={github}
        onChange={(e) => onGitHubChange(e.target.value)}
        error={errors.github}
        disabled={isSubmitting}
        icon={<Github className='w-5 h-5' />}
        label='GitHub/GitLab Profile URL'
        ariaDescribedBy='github-error'
      />

      {/* Privacy Policy Consent - Required */}
      <Checkbox
        id='privacyConsent'
        label='I agree to the Privacy Policy'
        checked={privacyConsentBool}
        onChange={(e) => onPrivacyConsentChange(e.target.checked)}
        error={errors.privacyConsent}
        disabled={isSubmitting}
        required
        aria-required={true}
      />

      {/* Newsletter Opt-in - Optional */}
      <Checkbox
        id='newsletterOptIn'
        label='Subscribe to our newsletter'
        checked={newsletterOptInBool}
        onChange={(e) => onNewsletterOptInChange(e.target.checked)}
        disabled={isSubmitting}
      />

      {/* Privacy Policy Link */}
      <PrivacyPolicyConsent
        prefix='By signing up, you agree to our '
        linkText='Privacy Policy'
        href='/privacy-policy'
        ariaLabel='Read our privacy policy'
      />
    </div>
  )
}
