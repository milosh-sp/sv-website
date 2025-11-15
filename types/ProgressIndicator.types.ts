import type { HTMLAttributes } from 'react'
import type { StepId } from '@/lib/stepIdentifiers'

interface ProgressIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  currentStep: StepId
  totalSteps: number
  onStepClick?: (step: StepId) => void
  isStepClickable?: (step: StepId) => boolean
  isSubmitting?: boolean
}

export type { ProgressIndicatorProps }
