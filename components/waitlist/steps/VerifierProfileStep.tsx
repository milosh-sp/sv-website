'use client'

import { cn } from '@/lib/utils'
import { FormField } from '@/components/ui/FormField'
import { RadioButtonGroup } from '@/components/waitlist/ui/RadioButtonGroup'
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

      {/* GitHub/GitLab URL */}
      <FormField
        id='githubGitlabUrl'
        type='url'
        placeholder={strings.waitlistForms.fields.github.placeholder}
        value={githubGitlabUrl}
        onChange={(e) => onGithubGitlabUrlChange(e.target.value)}
        error={errors.githubGitlabUrl}
        disabled={isSubmitting}
        icon={<div className='w-5 h-5' />}
        label={strings.waitlistForms.fields.github.label}
        ariaDescribedBy='githubGitlabUrl-error'
      />
    </div>
  )
}
