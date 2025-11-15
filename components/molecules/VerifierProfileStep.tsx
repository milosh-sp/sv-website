'use client'

import { cn } from '@/lib/utils'
import { RadioButtonGroup } from '@/components/molecules/RadioButtonGroup'
import { strings } from '@/lib/strings'

const {
  yearsOfExperienceOptions,
  hoursPerWeekOptions,
  professionalStatusOptions,
  coachingMentoringOptions,
} = strings.waitlistForms
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
        options={yearsOfExperienceOptions}
        value={yearsOfExperience}
        onChange={onYearsOfExperienceChange}
        error={errors.yearsOfExperience}
        disabled={isSubmitting}
      />

      {/* Hours Per Week */}
      <RadioButtonGroup
        name='hoursPerWeek'
        label={strings.waitlistForms.labels.hoursPerWeek}
        options={hoursPerWeekOptions}
        value={hoursPerWeek}
        onChange={onHoursPerWeekChange}
        error={errors.hoursPerWeek}
        disabled={isSubmitting}
      />

      {/* Professional Status */}
      <RadioButtonGroup
        name='professionalStatus'
        label={strings.waitlistForms.labels.professionalStatus}
        options={professionalStatusOptions}
        value={professionalStatus}
        onChange={onProfessionalStatusChange}
        error={errors.professionalStatus}
        disabled={isSubmitting}
      />

      {/* Coaching/Mentoring */}
      <RadioButtonGroup
        name='coachingMentoring'
        label={strings.waitlistForms.labels.coachingMentoring}
        options={coachingMentoringOptions}
        value={coachingMentoring}
        onChange={onCoachingMentoringChange}
        error={errors.coachingMentoring}
        disabled={isSubmitting}
      />
    </div>
  )
}
