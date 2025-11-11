'use client'

import { HoneypotField } from '@/components/ui/HoneypotField'
import { StatusMessage } from '@/components/ui/StatusMessage'
import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'
import { FormNavigation } from './FormNavigation'
import { ProgressIndicator } from './ProgressIndicator'

import type { WaitlistFormLayoutProps } from '@/types/WaitlistFormLayout.types'

export function WaitlistFormLayout({
  currentStep,
  totalSteps,
  onStepClick,
  isStepClickable,
  isSubmitting,
  canProceed,
  onPrevious,
  onNext,
  onSubmit,
  children,
  submitStatus = 'idle',
  submitError,
  honeypotValue,
  onHoneypotChange,
  submitLabel = strings.waitlistForms.buttons.submit,
  submitLoadingLabel = strings.waitlistForms.buttons.submitting,
  submitAriaLabel = strings.waitlistForms.accessibility.submitButton,
}: WaitlistFormLayoutProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={cn('space-y-6 w-full max-w-2xl mx-auto')}
      noValidate
    >
      {/* Progress Indicator */}
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={totalSteps}
        onStepClick={onStepClick}
        isStepClickable={isStepClickable}
        isSubmitting={isSubmitting}
      />

      {/* Current Step Content */}
      <section>{children}</section>

      {/* Honeypot Field */}
      <HoneypotField
        id='website'
        name='website'
        type='text'
        placeholder={strings.waitlistForms.fields.website.placeholder}
        value={honeypotValue}
        onChange={(e) => onHoneypotChange(e.target.value)}
        label={strings.waitlistForms.fields.website.label}
      />

      {/* Status Messages */}
      {submitStatus === 'error' && submitError && (
        <StatusMessage
          status='error'
          errorMessage={submitError}
          errorIcon='❌'
          successIcon='🎉'
          successMessage='Success!'
          defaultErrorMessage='An error occurred. Please try again.'
        />
      )}

      {/* Navigation Buttons */}
      <FormNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        onPrevious={onPrevious}
        onNext={onNext}
        isSubmitting={isSubmitting}
        canProceed={canProceed}
        submitLabel={submitLabel}
        submitLoadingLabel={submitLoadingLabel}
        submitAriaLabel={submitAriaLabel}
      />
    </form>
  )
}
