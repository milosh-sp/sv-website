import type { HTMLAttributes } from 'react'

interface HiringDemandChallengesStepProps
  extends HTMLAttributes<HTMLDivElement> {
  rolesHiring: string // JSON stringified array
  seniorityLevel: string
  hiringInterviewHours: string
  hiringFrustrations: string // JSON stringified array
  hiringFailures: string // JSON stringified array
  errors: Record<string, string>
  isSubmitting: boolean
  onRolesHiringChange: (values: string[]) => void
  onSeniorityLevelChange: (value: string) => void
  onHiringInterviewHoursChange: (value: string) => void
  onHiringFrustrationsChange: (values: string[]) => void
  onHiringFailuresChange: (values: string[]) => void
}

export type { HiringDemandChallengesStepProps }

