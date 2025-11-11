import type { ReactNode } from 'react'

interface WaitlistFormLayoutProps {
  currentStep: number
  totalSteps: number
  onStepClick?: (step: number) => void
  isStepClickable?: (step: number) => boolean
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
