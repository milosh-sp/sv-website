import type { ReactNode } from 'react'
import type { StepId } from './netlify.types'

interface WaitlistFormLayoutProps {
  currentStep: StepId
  totalSteps: number
  onStepClick?: (step: StepId) => void
  isStepClickable?: (step: StepId) => boolean
  isSubmitting: boolean
  canProceed: boolean
  onPrevious: () => void
  onNext: () => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: ReactNode
  submitStatus?: 'idle' | 'success' | 'error'
  submitError?: string
  honeypotValue: string
  onHoneypotChange: (value: string) => void
  submitLabel?: string
  submitLoadingLabel?: string
  submitAriaLabel?: string
}

export type { WaitlistFormLayoutProps }
