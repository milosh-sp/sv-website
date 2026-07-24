import { cn } from '@/lib/utils'
import { strings } from '@/lib/strings'
import { getStepNumber } from '@/lib/stepIdentifiers'
import type { FormNavigationProps } from '@/types/FormNavigation.types'
import { Button } from '@/components/atoms/Button'
import { SubmitButton } from '@/components/molecules/SubmitButton'

export function FormNavigation({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  isSubmitting,
  canProceed,
  submitLabel = strings.waitlistForms.buttons.submit,
  submitLoadingLabel = strings.waitlistForms.buttons.submitting,
  submitAriaLabel = strings.waitlistForms.accessibility.submitButton,
  className,
  ...props
}: FormNavigationProps) {
  const currentStepNumber = getStepNumber(currentStep)
  const isFirstStep = currentStepNumber === 1
  const isLastStep = currentStepNumber === totalSteps

  return (
    <nav
      className={cn('flex justify-between gap-4', className)}
      aria-label={strings.waitlistForms.accessibility.formNavigation}
      {...props}
    >
      <Button
        type='button'
        onClick={onPrevious}
        disabled={isFirstStep || isSubmitting}
        variant='outline'
        size='default'
        className='px-6 py-2'
        aria-label={strings.waitlistForms.accessibility.previousButton}
      >
        {strings.waitlistForms.buttons.previous}
      </Button>

      {isLastStep || isFirstStep ? (
        // On step 1 we submit partial information for the user
        <SubmitButton
          isSubmitting={isSubmitting}
          isDisabled={isSubmitting || !canProceed}
          ariaLabel={submitAriaLabel}
          idleText={
            isFirstStep ? strings.waitlistForms.buttons.next : submitLabel
          }
          loadingText={submitLoadingLabel}
        />
      ) : (
        <Button
          variant='verdict'
          type='button'
          onClick={onNext}
          disabled={isSubmitting || !canProceed}
          size='default'
          className='px-6 py-2'
          aria-label={strings.waitlistForms.accessibility.nextButton}
        >
          {strings.waitlistForms.buttons.next}
        </Button>
      )}
    </nav>
  )
}
