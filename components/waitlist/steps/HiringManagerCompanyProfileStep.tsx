'use client'

import { RadioButton } from '@/components/ui/RadioButton'
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
      <div className='space-y-3'>
        <h3 className='text-sm font-medium'>What is your role?</h3>
        <div className='space-y-2'>
          {MANAGER_ROLE_OPTIONS.map((option) => (
            <RadioButton
              key={option.value}
              id={`manager-role-${option.value}`}
              name='managerRole'
              value={option.value}
              label={option.label}
              checked={managerRole === option.value}
              onChange={(e) => onManagerRoleChange(e.target.value)}
              disabled={isSubmitting}
              aria-describedby={
                errors.managerRole ? 'managerRole-error' : undefined
              }
              aria-invalid={!!errors.managerRole}
            />
          ))}
        </div>
        {errors.managerRole && (
          <p
            id='managerRole-error'
            className='text-destructive text-sm'
            role='alert'
          >
            {errors.managerRole}
          </p>
        )}
      </div>

      {/* Funding Stage */}
      <div className='space-y-3'>
        <h3 className='text-sm font-medium'>
          What is your company's current funding stage?
        </h3>
        <div className='space-y-2'>
          {FUNDING_STAGE_OPTIONS.map((option) => (
            <RadioButton
              key={option.value}
              id={`funding-stage-${option.value}`}
              name='fundingStage'
              value={option.value}
              label={option.label}
              checked={fundingStage === option.value}
              onChange={(e) => onFundingStagChange(e.target.value)}
              disabled={isSubmitting}
              aria-describedby={
                errors.fundingStage ? 'fundingStage-error' : undefined
              }
              aria-invalid={!!errors.fundingStage}
            />
          ))}
        </div>
        {errors.fundingStage && (
          <p
            id='fundingStage-error'
            className='text-destructive text-sm'
            role='alert'
          >
            {errors.fundingStage}
          </p>
        )}
      </div>

      {/* Engineering Team Size */}
      <div className='space-y-3'>
        <h3 className='text-sm font-medium'>
          What is the size of your engineering team?
        </h3>
        <div className='space-y-2'>
          {TEAM_SIZE_OPTIONS.map((option) => (
            <RadioButton
              key={option.value}
              id={`team-size-${option.value}`}
              name='engineeringTeamSize'
              value={option.value}
              label={option.label}
              checked={engineeringTeamSize === option.value}
              onChange={(e) => onEngineeringTeamSizeChange(e.target.value)}
              disabled={isSubmitting}
              aria-describedby={
                errors.engineeringTeamSize
                  ? 'engineeringTeamSize-error'
                  : undefined
              }
              aria-invalid={!!errors.engineeringTeamSize}
            />
          ))}
        </div>
        {errors.engineeringTeamSize && (
          <p
            id='engineeringTeamSize-error'
            className='text-destructive text-sm'
            role='alert'
          >
            {errors.engineeringTeamSize}
          </p>
        )}
      </div>
    </div>
  )
}
