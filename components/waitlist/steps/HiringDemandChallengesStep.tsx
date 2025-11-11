'use client'

import { cn } from '@/lib/utils'
import { RadioButtonGroup } from '@/components/waitlist/ui/RadioButtonGroup'
import { CheckboxGroup } from '@/components/waitlist/ui/CheckboxGroup'
import {
  ROLES_HIRING_OPTIONS,
  SENIORITY_LEVEL_OPTIONS,
  INTERVIEW_HOURS_OPTIONS,
  HIRING_FRUSTRATIONS_OPTIONS,
  HIRING_FAILURES_OPTIONS,
} from '@/lib/waitlistConstants'
import { strings } from '@/lib/strings'
import type { HiringDemandChallengesStepProps } from '@/types/HiringDemandChallengesStep.types'

export function HiringDemandChallengesStep({
  rolesHiring,
  seniorityLevel,
  hiringInterviewHours,
  hiringFrustrations,
  hiringFailures,
  errors,
  isSubmitting,
  onRolesHiringChange,
  onSeniorityLevelChange,
  onHiringInterviewHoursChange,
  onHiringFrustrationsChange,
  onHiringFailuresChange,
  className,
  ...props
}: HiringDemandChallengesStepProps) {
  const parsedRoles = (() => {
    try {
      return JSON.parse(rolesHiring)
    } catch {
      return []
    }
  })()

  const parsedFrustrations = (() => {
    try {
      return JSON.parse(hiringFrustrations)
    } catch {
      return []
    }
  })()

  const parsedFailures = (() => {
    try {
      return JSON.parse(hiringFailures)
    } catch {
      return []
    }
  })()

  return (
    <div className={cn('space-y-6', className)} {...props}>
      {/* Roles Hiring */}
      <CheckboxGroup
        name='rolesHiring'
        label={strings.waitlistForms.labels.rolesHiring}
        description='Select all that apply'
        options={ROLES_HIRING_OPTIONS}
        values={parsedRoles}
        onChange={(values) => onRolesHiringChange(values)}
        error={errors.rolesHiring}
        disabled={isSubmitting}
      />

      {/* Seniority Level */}
      <RadioButtonGroup
        name='seniorityLevel'
        label={strings.waitlistForms.labels.seniorityLevel}
        options={SENIORITY_LEVEL_OPTIONS}
        value={seniorityLevel}
        onChange={onSeniorityLevelChange}
        error={errors.seniorityLevel}
        disabled={isSubmitting}
      />

      {/* Interview Hours */}
      <RadioButtonGroup
        name='hiringInterviewHours'
        label={strings.waitlistForms.labels.hiringInterviewHours}
        options={INTERVIEW_HOURS_OPTIONS}
        value={hiringInterviewHours}
        onChange={onHiringInterviewHoursChange}
        error={errors.hiringInterviewHours}
        disabled={isSubmitting}
      />

      {/* Hiring Frustrations */}
      <CheckboxGroup
        name='hiringFrustrations'
        label={strings.waitlistForms.labels.hiringFrustrations}
        description='Select all that apply'
        options={HIRING_FRUSTRATIONS_OPTIONS}
        values={parsedFrustrations}
        onChange={(values) => onHiringFrustrationsChange(values)}
        error={errors.hiringFrustrations}
        disabled={isSubmitting}
      />

      {/* Hiring Failures */}
      <CheckboxGroup
        name='hiringFailures'
        label={strings.waitlistForms.labels.hiringFailures}
        description='Select all that apply'
        options={HIRING_FAILURES_OPTIONS}
        values={parsedFailures}
        onChange={(values) => onHiringFailuresChange(values)}
        error={errors.hiringFailures}
        disabled={isSubmitting}
      />
    </div>
  )
}
