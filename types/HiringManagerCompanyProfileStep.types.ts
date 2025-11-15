import type { HTMLAttributes } from 'react'

interface HiringManagerCompanyProfileStepProps
  extends HTMLAttributes<HTMLDivElement> {
  managerRole: string
  fundingStage: string
  engineeringTeamSize: string
  errors: Record<string, string>
  isSubmitting: boolean
  onManagerRoleChange: (value: string) => void
  onFundingStagChange: (value: string) => void
  onEngineeringTeamSizeChange: (value: string) => void
}

export type { HiringManagerCompanyProfileStepProps }
