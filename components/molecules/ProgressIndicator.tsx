'use client'

import { cn } from '@/lib/utils'
import { strings } from '@/lib/strings'

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
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1)

  return (
    <nav
      className={cn('flex justify-between items-center mb-8 gap-2', className)}
      aria-label={strings.waitlistForms.accessibility.progressIndicator}
      {...props}
    >
      {steps.map((step) => {
        const isClickable = isStepClickable?.(step) ?? step <= currentStep
        const isCompleted = step < currentStep
        const isCurrent = step === currentStep

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
            aria-label={`${strings.waitlistForms.accessibility.goToStep} ${step}`}
            aria-current={isCurrent ? 'step' : undefined}
            aria-disabled={isSubmitting || !isClickable}
          />
        )
      })}
    </nav>
  )
}
