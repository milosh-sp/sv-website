'use client'

import { RadioButtonGroup } from '@/components/waitlist/ui/RadioButtonGroup'
import { cn } from '@/lib/utils'
import type { HiringManagerCompanyProfileStepProps } from '@/types/HiringManagerCompanyProfileStep.types'

const MANAGER_ROLE_OPTIONS = [
  { value: 'cto-vp', label: 'CTO / VP Engineering' },
  { value: 'head-engineering', label: 'Head of Engineering' },
  { value: 'tech-lead', label: 'Tech Lead / Engineering Manager' },
  { value: 'founder-ceo', label: 'Founder / CEO (hiring first engineers)' },
  { value: 'recruiter', label: 'Recruiter' },
]

const FUNDING_STAGE_OPTIONS = [
  { value: 'pre-seed', label: 'Pre-seed / Bootstrapped' },
  { value: 'seed', label: 'Seed' },
  { value: 'series-a', label: 'Series A' },
  { value: 'series-b', label: 'Series B' },
  { value: 'profitable', label: 'Profitable / Late-Stage' },
]

const TEAM_SIZE_OPTIONS = [
  { value: '0', label: '0' },
  { value: '1-5', label: '1-5' },
  { value: '6-15', label: '6-15' },
  { value: '16-30', label: '16-30' },
  { value: '30+', label: '30+' },
]

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
        label='What is your role?'
        options={MANAGER_ROLE_OPTIONS}
        value={managerRole}
        onChange={onManagerRoleChange}
        error={errors.managerRole}
        disabled={isSubmitting}
      />

      {/* Funding Stage */}
      <RadioButtonGroup
        name='fundingStage'
        label="What is your company's current funding stage?"
        options={FUNDING_STAGE_OPTIONS}
        value={fundingStage}
        onChange={onFundingStagChange}
        error={errors.fundingStage}
        disabled={isSubmitting}
      />

      {/* Engineering Team Size */}
      <RadioButtonGroup
        name='engineeringTeamSize'
        label='What is the size of your engineering team?'
        options={TEAM_SIZE_OPTIONS}
        value={engineeringTeamSize}
        onChange={onEngineeringTeamSizeChange}
        error={errors.engineeringTeamSize}
        disabled={isSubmitting}
      />
    </div>
  )
}
