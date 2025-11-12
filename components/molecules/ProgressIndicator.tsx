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
    <div className={cn('space-y-2', className)} {...props}>
      <nav
        className={cn('flex justify-between items-center gap-2')}
        aria-label={strings.waitlistForms.accessibility.progressIndicator}
      >
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isClickable =
            isStepClickable?.(step) ?? stepNumber <= currentStepNumber
          const isCurrent = stepNumber === currentStepNumber
          // A step is completed if it's clickable AND not the current step
          // This means it has been validated and the user has moved past it
          const isCompleted = isClickable && !isCurrent

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
                'flex-1 h-2 rounded-full transition-all',
                // Completed steps: filled with green indicator
                isCompleted && 'bg-green-600 hover:bg-green-700',
                // Current step: highlighted with distinct color
                isCurrent && 'bg-blue-600 ring-2 ring-blue-400 ring-offset-2',
                // Future steps: unfilled
                !isCompleted && !isCurrent && 'bg-gray-200',
                // Clickable state
                isClickable && !isSubmitting
                  ? 'cursor-pointer hover:shadow-md'
                  : 'cursor-not-allowed opacity-50',
                // Disabled state
                isSubmitting && 'opacity-50'
              )}
              aria-label={`${strings.waitlistForms.accessibility.goToStep} ${stepNumber}${isCompleted ? ' (completed)' : ''}${isCurrent ? ' (current)' : ''}`}
              aria-current={isCurrent ? 'step' : undefined}
              aria-disabled={isSubmitting || !isClickable}
              title={`Step ${stepNumber}${isCompleted ? ' - Completed' : ''}${isCurrent ? ' - Current' : ''}`}
            />
          )
        })}
      </nav>

      {/* Step counter display */}
      <div className={cn('text-center text-sm text-slate-600')}>
        Step {currentStepNumber} of {totalSteps}
      </div>
    </div>
  )
}
