import type { HTMLAttributes } from 'react'

interface ProgressIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  currentStep: number
  totalSteps: number
  onStepClick?: (step: number) => void
  isStepClickable?: (step: number) => boolean
  isSubmitting?: boolean
}

export type { ProgressIndicatorProps }
