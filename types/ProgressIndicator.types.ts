import type { HTMLAttributes } from 'react'
import type { StepId } from './netlify.types'

interface ProgressIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  currentStep: StepId
  totalSteps: number
  onStepClick?: (step: StepId) => void
  isStepClickable?: (step: StepId) => boolean
  isSubmitting?: boolean
}

export type { ProgressIndicatorProps }
