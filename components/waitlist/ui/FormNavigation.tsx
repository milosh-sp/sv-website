'use client'

import { SubmitButton } from '@/components/ui/SubmitButton'
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface FormNavigationProps extends HTMLAttributes<HTMLDivElement> {
  currentStep: number
  totalSteps: number
  onPrevious: () => void
  onNext: () => void
  isSubmitting: boolean
  canProceed: boolean
  submitLabel?: string
  submitLoadingLabel?: string
  submitAriaLabel?: string
}

export function FormNavigation({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  isSubmitting,
  canProceed,
  submitLabel = 'Submit',
  submitLoadingLabel = 'Submitting...',
  submitAriaLabel = 'Submit form',
  className,
  ...props
}: FormNavigationProps) {
  const isFirstStep = currentStep === 1
  const isLastStep = currentStep === totalSteps

  return (
    <div className={cn('flex justify-between gap-4', className)} {...props}>
      <button
        type='button'
        onClick={onPrevious}
        disabled={isFirstStep || isSubmitting}
        className='px-6 py-2 border border-gray-300 rounded-md disabled:opacity-50'
      >
        Previous
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
          className='px-6 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50'
        >
          Next
        </button>
      )}
    </div>
  )
}
