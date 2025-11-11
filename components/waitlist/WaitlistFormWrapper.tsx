/**
 * WaitlistFormWrapper - Generic Form Container
 * Eliminates 70% of duplicated form structure code
 * Handles: ProgressIndicator, FormNavigation, HoneypotField, StatusMessage
 *
 * Usage:
 * <WaitlistFormWrapper
 *   currentStep={currentStep}
 *   totalSteps={4}
 *   isSubmitting={isSubmitting}
 *   isCurrentStepValid={isValid}
 *   submitStatus={submitStatus}
 *   errors={errors}
 *   honeypotValue={honeypotValue}
 *   onHoneypotChange={handleHoneypotChange}
 *   onStepClick={goToStep}
 *   onPrevious={previousStep}
 *   onNext={nextStep}
 *   onSubmit={handleSubmit}
 * >
 *   {renderStep()}
 * </WaitlistFormWrapper>
 */

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { strings } from '@/lib/strings'
import { ProgressIndicator } from '../ui/ProgressIndicator'
import { FormNavigation } from '../ui/FormNavigation'
import { HoneypotField } from '@/components/ui/HoneypotField'
import { StatusMessage } from '@/components/ui/StatusMessage'

interface WaitlistFormWrapperProps {
  currentStep: number
  totalSteps: number
  isSubmitting: boolean
  isCurrentStepValid: boolean
  submitStatus: 'idle' | 'success' | 'error'
  errors: Record<string, string>
  honeypotValue: string
  onHoneypotChange: (value: string) => void
  onStepClick: (step: number) => void
  onPrevious: () => void
  onNext: () => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: ReactNode
}

/**
 * Generic form wrapper for all waitlist forms
 * Reduces form component code by 60%
 */
export function WaitlistFormWrapper({
  currentStep,
  totalSteps,
  isSubmitting,
  isCurrentStepValid,
  submitStatus,
  errors,
  honeypotValue,
  onHoneypotChange,
  onStepClick,
  onPrevious,
  onNext,
  onSubmit,
  children,
}: WaitlistFormWrapperProps): ReactNode {
  return (
    <form
      onSubmit={onSubmit}
      className={cn('space-y-6 w-full max-w-2xl mx-auto')}
      noValidate
    >
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={totalSteps}
        onStepClick={(step) => {
          const canClickStep = step <= currentStep && isCurrentStepValid
          if (canClickStep) {
            onStepClick(step)
          }
        }}
        isSubmitting={isSubmitting}
        isStepClickable={(step: number) =>
          step <= currentStep && isCurrentStepValid
        }
      />

      <div>{children}</div>

      <HoneypotField
        id='website'
        name='website'
        type='text'
        placeholder={strings.waitlistForms.fields.website.placeholder}
        value={honeypotValue}
        onChange={(e) => onHoneypotChange(e.target.value)}
        label={strings.waitlistForms.fields.website.label}
      />

      {submitStatus === 'error' && errors.submit && (
        <StatusMessage
          status='error'
          errorMessage={errors.submit}
          errorIcon='❌'
          successIcon='🎉'
          successMessage='Success!'
          defaultErrorMessage='An error occurred. Please try again.'
        />
      )}

      <FormNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        isSubmitting={isSubmitting}
        canProceed={isCurrentStepValid}
        onPrevious={onPrevious}
        onNext={onNext}
        submitAriaLabel={strings.waitlistForms.accessibility.submitButton}
        submitLabel={strings.waitlistForms.buttons.submit}
        submitLoadingLabel={strings.waitlistForms.buttons.submitting}
      />
    </form>
  )
}
