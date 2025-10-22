import { Github, Linkedin, Mail } from 'lucide-react'
import type { SignupFormProps } from '@/types/SignupModalComponents.types'
import { strings } from '@/lib/strings'
import { isFormValid } from '@/lib/validation'
import { FormField } from './FormField'
import { HoneypotField } from './HoneypotField'
import { PrivacyPolicyConsent } from './PrivacyPolicyConsent'
import { StatusMessage } from './StatusMessage'
import { SubmitButton } from './SubmitButton'

export function SignupForm({
  formData,
  isSubmitting,
  errors,
  submitStatus,
  honeypotValue,
  onEmailChange,
  onLinkedInChange,
  onGitHubChange,
  onHoneypotChange,
  onSubmit,
  className,
  ...props
}: SignupFormProps) {
  const isFormDisabled = isSubmitting || !isFormValid(formData)

  return (
    <form
      onSubmit={onSubmit}
      className='space-y-4 w-80'
      aria-label='Signup form'
      aria-describedby='signup-form-description'
      noValidate
      {...props}
    >
      <FormField
        id='email'
        type='email'
        placeholder={strings.signupModal.form.email.placeholder}
        value={formData.email}
        onChange={onEmailChange}
        error={errors.email}
        disabled={isSubmitting}
        icon={<Mail className='h-5 w-5' aria-hidden='true' />}
        label={strings.signupModal.form.email.label}
        ariaDescribedBy={strings.signupModal.accessibility.emailError}
      />

      <HoneypotField
        id='website'
        name='website'
        type='text'
        placeholder={strings.signupModal.form.website.placeholder}
        value={honeypotValue}
        onChange={onHoneypotChange}
        label={strings.signupModal.form.website.label}
      />

      <FormField
        id='linkedin'
        type='url'
        placeholder={strings.signupModal.form.linkedin.placeholder}
        value={formData.linkedin}
        onChange={onLinkedInChange}
        error={errors.linkedin}
        disabled={isSubmitting}
        icon={<Linkedin className='h-5 w-5' aria-hidden='true' />}
        label={strings.signupModal.form.linkedin.label}
        ariaDescribedBy={strings.signupModal.accessibility.linkedinError}
      />

      <FormField
        id='github'
        type='url'
        placeholder={strings.signupModal.form.github.placeholder}
        value={formData.github}
        onChange={onGitHubChange}
        error={errors.github}
        disabled={isSubmitting}
        icon={<Github className='h-5 w-5' aria-hidden='true' />}
        label={strings.signupModal.form.github.label}
        ariaDescribedBy={strings.signupModal.accessibility.githubError}
      />

      <PrivacyPolicyConsent
        prefix={strings.signupModal.privacyPolicyConsent.prefix}
        linkText={strings.signupModal.privacyPolicyConsent.linkText}
        href={strings.signupModal.privacyPolicyConsent.href}
        ariaLabel={strings.signupModal.privacyPolicyConsent.ariaLabel}
      />

      <SubmitButton
        isSubmitting={isSubmitting}
        isDisabled={isFormDisabled}
        ariaLabel={
          isSubmitting
            ? strings.signupModal.submitButton.ariaLabel.submitting
            : strings.signupModal.submitButton.ariaLabel.idle
        }
        loadingText={strings.signupModal.submitButton.submitting}
        idleText={strings.signupModal.submitButton.idle}
      />

      <StatusMessage
        status={submitStatus}
        errorMessage={errors.submit}
        successIcon={strings.signupModal.status.success.icon}
        errorIcon={strings.signupModal.status.error.icon}
        successMessage={strings.signupModal.status.success.message}
        defaultErrorMessage={strings.signupModal.status.error.message}
      />
    </form>
  )
}
