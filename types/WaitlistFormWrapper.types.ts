import type { ReactNode } from 'react'
import type { StepId } from '@/lib/stepIdentifiers'
import type { CandidateFormData } from '@/types/CandidateFormData.types'
import type { VerifierFormData } from '@/types/VerifierFormData.types'
import type { HiringManagerFormData } from '@/types/HiringManagerFormData.types'

interface WaitlistFormWrapperProps {
  currentStep: StepId
  totalSteps: number
  isSubmitting: boolean
  isCurrentStepValid: boolean
  submitStatus: 'idle' | 'success' | 'error'
  errors: Record<string, string>
  honeypotValue: string
  onHoneypotChange: (value: string) => void
  onStepClick: (step: StepId) => void
  onPrevious: () => void
  onNext: () => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: ReactNode
  formData: CandidateFormData | VerifierFormData | HiringManagerFormData
}

export type { WaitlistFormWrapperProps }
