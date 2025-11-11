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

export type { FormNavigationProps }
