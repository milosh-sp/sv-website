import type { ReactNode } from 'react'

interface WaitlistFormWrapperProps {
  currentStep: number
  totalSteps: number
  isSubmitting: boolean
  isCurrentStepValid: boolean
  submitStatus: 'idle' | 'success' | 'error'
  errors: Record<string, string>
  honeypotValue: string
  onHoneypotChange: (value: string) => void
  onStepClick: (step: number) => void
  onPrevious: () => void
  onNext: () => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: ReactNode
}

export type { WaitlistFormWrapperProps }

