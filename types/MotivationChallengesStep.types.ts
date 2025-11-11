import type { HTMLAttributes } from 'react'

interface MotivationChallengesStepProps extends HTMLAttributes<HTMLDivElement> {
  // Candidate-specific fields
  skillValidationConfidence?: string
  jobSearchChallenges?: string // JSON stringified array
  jobSearchChallengeOther?: string
  valuableOutcomes?: string // JSON stringified array
  valuableOutcomeOther?: string
  // Verifier-specific fields (legacy)
  motivation?: string
  challenges?: string
  // Common
  errors: Record<string, string>
  isSubmitting: boolean
  onSkillValidationConfidenceChange?: (value: string) => void
  onJobSearchChallengesChange?: (values: string[]) => void
  onJobSearchChallengeOtherChange?: (value: string) => void
  onValuableOutcomesChange?: (values: string[]) => void
  onValuableOutcomeOtherChange?: (value: string) => void
  // Verifier-specific handlers (legacy)
  onMotivationChange?: (value: string) => void
  onChallengesChange?: (value: string) => void
}

export type { MotivationChallengesStepProps }
