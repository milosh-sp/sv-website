import { strings } from '@/lib/strings'
import { isContactFormValid } from '@/lib/validation'
import type { ContactFormProps } from '@/types/ContactForm.types'
import { FormField } from '@/components/molecules/FormField'
import { HoneypotField } from '@/components/molecules/HoneypotField'
import { StatusMessage } from '@/components/atoms/StatusMessage'
import { SubmitButton } from '@/components/molecules/SubmitButton'
import { TextAreaField } from '@/components/molecules/TextAreaField'
import { cn } from '@/lib/utils'
import { PrivacyPolicyConsent } from '../molecules/PrivacyPolicyConsent'

// Icons are embedded in strings
const MailIcon = strings.contactPage.form.email.icon
const UserIcon = strings.contactPage.form.contactName.icon
const MessageIcon = strings.contactPage.form.message.icon

export function ContactForm({
  formData,
  isSubmitting,
  errors,
  submitStatus,
  honeypotValue,
  onEmailChange,
  onContactNameChange,
  onMessageChange,
  onHoneypotChange,
  onSubmit,
  className,
  ...props
}: ContactFormProps) {
  const isFormDisabled = isSubmitting || !isContactFormValid(formData)

  return (
    <form
      onSubmit={onSubmit}
      className='space-y-6 w-full max-w-2xl mx-auto'
      aria-label={strings.contactPage.accessibility.contactForm}
      noValidate
      {...props}
    >
      <FormField
        id='email'
        type='email'
        placeholder={strings.contactPage.form.email.placeholder}
        value={formData.email}
        onChange={onEmailChange}
        error={errors.email}
        disabled={isSubmitting}
        icon={<MailIcon className='h-5 w-5' aria-hidden='true' />}
        label={strings.contactPage.form.email.label}
        ariaDescribedBy={strings.contactPage.accessibility.emailError}
      />

      <FormField
        id='contactName'
        type='text'
        placeholder={strings.contactPage.form.contactName.placeholder}
        value={formData.contactName}
        onChange={onContactNameChange}
        error={errors.contactName}
        disabled={isSubmitting}
        icon={<UserIcon className='h-5 w-5' aria-hidden='true' />}
        label={strings.contactPage.form.contactName.label}
        ariaDescribedBy={strings.contactPage.accessibility.contactNameError}
      />

      <TextAreaField
        id='message'
        placeholder={strings.contactPage.form.message.placeholder}
        value={formData.message}
        onChange={onMessageChange}
        error={errors.message}
        disabled={isSubmitting}
        icon={<MessageIcon className='h-5 w-5' aria-hidden='true' />}
        label={strings.contactPage.form.message.label}
        ariaDescribedBy={strings.contactPage.accessibility.messageError}
        rows={6}
      />

      <HoneypotField
        id='website'
        name='website'
        type='text'
        placeholder={strings.contactPage.form.website.placeholder}
        value={honeypotValue}
        onChange={onHoneypotChange}
        label={strings.contactPage.form.website.label}
      />

      <PrivacyPolicyConsent />

      <div className={cn('flex justify-center')}>
        <SubmitButton
          isSubmitting={isSubmitting}
          isDisabled={isFormDisabled}
          ariaLabel={
            isSubmitting
              ? strings.contactPage.submitButton.ariaLabel.submitting
              : strings.contactPage.submitButton.ariaLabel.idle
          }
          loadingText={strings.contactPage.submitButton.submitting}
          idleText={strings.contactPage.submitButton.idle}
        />
      </div>

      <StatusMessage
        status={submitStatus}
        errorMessage={errors.submit}
        successIcon={strings.contactPage.status.success.icon}
        errorIcon={strings.contactPage.status.error.icon}
        successMessage={strings.contactPage.status.success.message}
        defaultErrorMessage={strings.contactPage.status.error.message}
      />
    </form>
  )
}
