import type { HTMLAttributes } from 'react'
import type { StepId } from '@/lib/stepIdentifiers'

interface FormNavigationProps extends HTMLAttributes<HTMLDivElement> {
  currentStep: StepId
  totalSteps: number
  onPrevious: () => void
  onNext: () => void
  isSubmitting: boolean
  canProceed: boolean
  submitLabel?: string
  submitLoadingLabel?: string
  submitAriaLabel?: string
}

export type { FormNavigationProps }
