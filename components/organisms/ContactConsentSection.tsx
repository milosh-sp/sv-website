import { Building, Github, Linkedin, Mail, User } from 'lucide-react'

import { Checkbox } from '@/components/atoms/Checkbox'
import { FormField } from '@/components/molecules/FormField'
import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'
import type { ContactConsentSectionProps } from '@/types/ContactConsentSection.types'
import { PrivacyPolicyConsent } from '@/components/molecules/PrivacyPolicyConsent'

export function ContactConsentSection({
  name,
  email,
  linkedIn = '',
  githubGitlabUrl = '',
  companyName = '',
  companyUrl = '',
  newsletterOptIn,
  fields,
  errors,
  isSubmitting,
  onNameChange,
  onEmailChange,
  onLinkedInChange,
  onGitHubGitlabUrlChange,
  onCompanyNameChange,
  onCompanyUrlChange,
  onNewsletterOptInChange,
  className,
  namePlaceholder,
  ...props
}: ContactConsentSectionProps) {
  const newsletterOptInBool =
    typeof newsletterOptIn === 'string'
      ? newsletterOptIn === 'true'
      : newsletterOptIn

  // Determine which fields to show
  // If fields array is provided, use it; otherwise fall back to includeLinkedIn/includeGitHub
  const showEmail = !fields || fields.includes('email')
  const showLinkedIn = fields?.includes('linkedIn')
  const showGitHubGitlab = fields?.includes('githubGitlabUrl')
  const showNewsletter = !fields || fields.includes('newsletterOptIn')
  const showCompanyUrl = fields?.includes('companyUrl')
  const showCompanyName = fields?.includes('companyName')
  const showName = fields?.includes('name')

  return (
    <fieldset className={cn('space-y-4', className)} {...props}>
      {/* Name Field - Conditional */}
      {showName && (
        <FormField
          id='name'
          type='text'
          placeholder={
            namePlaceholder ?? strings.waitlistForms.fields.name.placeholder
          }
          value={name}
          onChange={(e) => onNameChange?.(e.target.value)}
          error={errors.name}
          disabled={isSubmitting}
          icon={<User className={cn('w-5 h-5')} />}
          label={strings.waitlistForms.fields.name.label}
          ariaDescribedBy='name-error'
        />
      )}

      {/* Company Name Field - Conditional */}
      {showCompanyName && (
        <FormField
          id='companyName'
          type='text'
          placeholder={strings.waitlistForms.fields.companyName.placeholder}
          value={companyName}
          onChange={(e) => onCompanyNameChange?.(e.target.value)}
          error={errors.companyName}
          disabled={isSubmitting}
          icon={<Building className={cn('w-5 h-5')} />}
          label={strings.waitlistForms.fields.companyName.label}
          ariaDescribedBy='companyName-error'
        />
      )}

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

      {/* Company URL Field */}
      {showCompanyUrl && (
        <FormField
          id='companyUrl'
          type='url'
          placeholder={strings.waitlistForms.fields.companyUrl.placeholder}
          value={companyUrl}
          onChange={(e) => onCompanyUrlChange?.(e.target.value)}
          error={errors.companyUrl}
          disabled={isSubmitting}
          icon={<Building className={cn('w-5 h-5')} />}
          label={strings.waitlistForms.fields.companyUrl.label}
          ariaDescribedBy='companyUrl-error'
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

      <PrivacyPolicyConsent
        prefix={strings.waitlistForms.privacyPolicyConsent.prefix}
        linkText={strings.waitlistForms.privacyPolicyConsent.linkText}
        href={strings.waitlistForms.privacyPolicyConsent.href}
        ariaLabel={strings.waitlistForms.privacyPolicyConsent.ariaLabel}
      />
    </fieldset>
  )
}
