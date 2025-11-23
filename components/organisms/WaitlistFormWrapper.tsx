import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { strings } from '@/lib/strings'
import { getStepNumber, type StepId } from '@/lib/stepIdentifiers'
import { validateStepsUpTo } from '@/lib/waitlistFormValidators'
import { ProgressIndicator } from '@/components/molecules/ProgressIndicator'
import { FormNavigation } from '@/components/organisms/FormNavigation'
import { HoneypotField } from '@/components/molecules/HoneypotField'
import { StatusMessage } from '@/components/atoms/StatusMessage'

import type { WaitlistFormWrapperProps } from '@/types/WaitlistFormWrapper.types'
import type { CandidateFormData } from '@/types/CandidateFormData.types'
import type { VerifierFormData } from '@/types/VerifierFormData.types'
import type { HiringManagerFormData } from '@/types/HiringManagerFormData.types'

function isStepNavigationAllowed(
  targetStep: StepId,
  currentStep: StepId,
  isCurrentStepValid: boolean,
  formData: CandidateFormData | VerifierFormData | HiringManagerFormData
): boolean {
  const targetStepNumber = getStepNumber(targetStep)
  const currentStepNumber = getStepNumber(currentStep)

  // Can always navigate to current step
  if (targetStepNumber === currentStepNumber) {
    return true
  }

  // Can navigate backward to previously validated steps
  if (targetStepNumber < currentStepNumber) {
    return validateStepsUpTo(targetStep, formData)
  }

  // Can navigate forward only to validated steps
  // First, check if current step is valid (required to move forward at all)
  if (!isCurrentStepValid) {
    return false
  }

  // Then check if the target step has been validated
  return validateStepsUpTo(targetStep, formData)
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
  formData,
  ...props
}: WaitlistFormWrapperProps): ReactNode {
  return (
    <form
      {...props}
      onSubmit={onSubmit}
      className={cn(`space-y-6 w-full max-w-2xl mx-auto ${props.className}`)}
      noValidate
    >
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={totalSteps}
        onStepClick={(step) => {
          // Allow navigation based on validation and step position
          const canClickStep = isStepNavigationAllowed(
            step,
            currentStep,
            isCurrentStepValid,
            formData
          )
          if (canClickStep) {
            onStepClick(step)
          }
        }}
        isSubmitting={isSubmitting}
        isStepClickable={(step) =>
          isStepNavigationAllowed(
            step,
            currentStep,
            isCurrentStepValid,
            formData
          )
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

      {submitStatus === 'error' && errors.submit && currentStep === 'step4' && (
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
