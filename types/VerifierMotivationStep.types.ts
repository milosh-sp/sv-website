import type { HTMLAttributes } from 'react'

interface VerifierMotivationStepProps extends HTMLAttributes<HTMLDivElement> {
  verifierMotivations: string // JSON stringified array
  verifierMotivationOther: string
  professionalFrustration: string
  professionalFrustrationOther: string
  errors: Record<string, string>
  isSubmitting: boolean
  onVerifierMotivationsChange?: (values: string[]) => void
  onVerifierMotivationOtherChange?: (value: string) => void
  onProfessionalFrustrationChange?: (value: string) => void
  onProfessionalFrustrationOtherChange?: (value: string) => void
}

export type { VerifierMotivationStepProps }
