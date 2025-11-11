'use client'

import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface ProgressIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  currentStep: number
  totalSteps: number
  onStepClick?: (step: number) => void
  isStepClickable?: (step: number) => boolean
  isSubmitting?: boolean
}

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
    <div
      className={cn('flex justify-between items-center mb-8 gap-2', className)}
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
            aria-label={`Go to step ${step}`}
            aria-current={isCurrent ? 'step' : undefined}
            aria-disabled={isSubmitting || !isClickable}
          />
        )
      })}
    </div>
  )
}
