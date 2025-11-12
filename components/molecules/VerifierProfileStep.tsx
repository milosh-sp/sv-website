'use client'

import { cn } from '@/lib/utils'
import { RadioButtonGroup } from '@/components/molecules/RadioButtonGroup'
import {
  YEARS_OF_EXPERIENCE_OPTIONS,
  HOURS_PER_WEEK_OPTIONS,
  PROFESSIONAL_STATUS_OPTIONS,
  COACHING_MENTORING_OPTIONS,
} from '@/lib/waitlistConstants'
import { strings } from '@/lib/strings'
import type { VerifierProfileStepProps } from '@/types/VerifierProfileStep.types'

export function VerifierProfileStep({
  yearsOfExperience,
  hoursPerWeek,
  professionalStatus,
  coachingMentoring,
  githubGitlabUrl,
  errors,
  isSubmitting,
  onYearsOfExperienceChange,
  onHoursPerWeekChange,
  onProfessionalStatusChange,
  onCoachingMentoringChange,
  onGithubGitlabUrlChange,
  className,
  ...props
}: VerifierProfileStepProps) {
  return (
    <div className={cn('space-y-6', className)} {...props}>
      {/* Years of Experience */}
      <RadioButtonGroup
        name='yearsOfExperience'
        label={strings.waitlistForms.labels.yearsOfExperience}
        options={YEARS_OF_EXPERIENCE_OPTIONS}
        value={yearsOfExperience}
        onChange={onYearsOfExperienceChange}
        error={errors.yearsOfExperience}
        disabled={isSubmitting}
      />

      {/* Hours Per Week */}
      <RadioButtonGroup
        name='hoursPerWeek'
        label={strings.waitlistForms.labels.hoursPerWeek}
        options={HOURS_PER_WEEK_OPTIONS}
        value={hoursPerWeek}
        onChange={onHoursPerWeekChange}
        error={errors.hoursPerWeek}
        disabled={isSubmitting}
      />

      {/* Professional Status */}
      <RadioButtonGroup
        name='professionalStatus'
        label={strings.waitlistForms.labels.professionalStatus}
        options={PROFESSIONAL_STATUS_OPTIONS}
        value={professionalStatus}
        onChange={onProfessionalStatusChange}
        error={errors.professionalStatus}
        disabled={isSubmitting}
      />

      {/* Coaching/Mentoring */}
      <RadioButtonGroup
        name='coachingMentoring'
        label={strings.waitlistForms.labels.coachingMentoring}
        options={COACHING_MENTORING_OPTIONS}
        value={coachingMentoring}
        onChange={onCoachingMentoringChange}
        error={errors.coachingMentoring}
        disabled={isSubmitting}
      />
    </div>
  )
}
