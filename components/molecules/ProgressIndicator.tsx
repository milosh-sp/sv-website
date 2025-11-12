'use client'

import { cn } from '@/lib/utils'
import { strings } from '@/lib/strings'
import { STEP_ID_ARRAY, getStepNumber } from '@/lib/stepIdentifiers'

import type { ProgressIndicatorProps } from '@/types/ProgressIndicator.types'

export function ProgressIndicator({
  currentStep,
  totalSteps,
  onStepClick,
  isStepClickable,
  isSubmitting = false,
  className,
  ...props
}: ProgressIndicatorProps) {
  const steps = STEP_ID_ARRAY.slice(0, totalSteps)
  const currentStepNumber = getStepNumber(currentStep)

  return (
    <nav
      className={cn('flex justify-between items-center mb-8 gap-2', className)}
      aria-label={strings.waitlistForms.accessibility.progressIndicator}
      {...props}
    >
      {steps.map((step, index) => {
        const stepNumber = index + 1
        const isClickable =
          isStepClickable?.(step) ?? stepNumber <= currentStepNumber
        const isCompleted = stepNumber < currentStepNumber
        const isCurrent = stepNumber === currentStepNumber

        return (
          <button
            key={step}
            type='button'
            onClick={() => {
              if (isClickable && onStepClick) {
                onStepClick(step)
              }
            }}
            disabled={isSubmitting || !isClickable}
            className={cn(
              'flex-1 h-1 rounded-full transition-colors',
              isCompleted || isCurrent ? 'bg-blue-600' : 'bg-gray-200',
              isClickable && !isSubmitting
                ? 'cursor-pointer hover:opacity-80'
                : 'cursor-not-allowed opacity-50'
            )}
            aria-label={`${strings.waitlistForms.accessibility.goToStep} ${stepNumber}`}
            aria-current={isCurrent ? 'step' : undefined}
            aria-disabled={isSubmitting || !isClickable}
          />
        )
      })}
    </nav>
  )
}
