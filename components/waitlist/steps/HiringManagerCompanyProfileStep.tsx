'use client'

import { cn } from '@/lib/utils'
import { RadioButtonGroup } from '@/components/ui/RadioButtonGroup'
import {
  MANAGER_ROLE_OPTIONS,
  FUNDING_STAGE_OPTIONS,
  TEAM_SIZE_OPTIONS,
} from '@/lib/waitlistConstants'
import { strings } from '@/lib/strings'
import type { HiringManagerCompanyProfileStepProps } from '@/types/HiringManagerCompanyProfileStep.types'

export function HiringManagerCompanyProfileStep({
  managerRole,
  fundingStage,
  engineeringTeamSize,
  errors,
  isSubmitting,
  onManagerRoleChange,
  onFundingStagChange,
  onEngineeringTeamSizeChange,
  className,
  ...props
}: HiringManagerCompanyProfileStepProps) {
  return (
    <div className={cn('space-y-6', className)} {...props}>
      {/* Manager Role */}
      <RadioButtonGroup
        name='managerRole'
        label={strings.waitlistForms.labels.managerRole}
        options={MANAGER_ROLE_OPTIONS}
        value={managerRole}
        onChange={onManagerRoleChange}
        error={errors.managerRole}
        disabled={isSubmitting}
      />

      {/* Funding Stage */}
      <RadioButtonGroup
        name='fundingStage'
        label={strings.waitlistForms.labels.fundingStage}
        options={FUNDING_STAGE_OPTIONS}
        value={fundingStage}
        onChange={onFundingStagChange}
        error={errors.fundingStage}
        disabled={isSubmitting}
      />

      {/* Engineering Team Size */}
      <RadioButtonGroup
        name='engineeringTeamSize'
        label={strings.waitlistForms.labels.engineeringTeamSize}
        options={TEAM_SIZE_OPTIONS}
        value={engineeringTeamSize}
        onChange={onEngineeringTeamSizeChange}
        error={errors.engineeringTeamSize}
        disabled={isSubmitting}
      />
    </div>
  )
}
