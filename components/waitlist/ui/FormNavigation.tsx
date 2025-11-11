'use client'

import { SubmitButton } from '@/components/ui/SubmitButton'
import { cn } from '@/lib/utils'
import { strings } from '@/lib/strings'
import type { FormNavigationProps } from '@/types/FormNavigation.types'

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
  const isFirstStep = currentStep === 1
  const isLastStep = currentStep === totalSteps

  return (
    <nav
      className={cn('flex justify-between gap-4', className)}
      aria-label={strings.waitlistForms.accessibility.formNavigation}
      {...props}
    >
      <button
        type='button'
        onClick={onPrevious}
        disabled={isFirstStep || isSubmitting}
        className={cn(
          'px-6 py-2 border border-gray-300 rounded-md',
          'transition-colors duration-200',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        )}
        aria-label={strings.waitlistForms.accessibility.previousButton}
      >
        {strings.waitlistForms.buttons.previous}
      </button>

      {isLastStep ? (
        <SubmitButton
          isSubmitting={isSubmitting}
          isDisabled={isSubmitting || !canProceed}
          ariaLabel={submitAriaLabel}
          idleText={submitLabel}
          loadingText={submitLoadingLabel}
        />
      ) : (
        <button
          type='button'
          onClick={onNext}
          disabled={isSubmitting || !canProceed}
          className={cn(
            'px-6 py-2 bg-blue-600 text-white rounded-md',
            'transition-colors duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          )}
          aria-label={strings.waitlistForms.accessibility.nextButton}
        >
          {strings.waitlistForms.buttons.next}
        </button>
      )}
    </nav>
  )
}
