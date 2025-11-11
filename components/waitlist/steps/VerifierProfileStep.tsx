'use client'

import { FormField } from '@/components/ui/FormField'
import { RadioButtonGroup } from '@/components/waitlist/ui/RadioButtonGroup'
import { cn } from '@/lib/utils'
import type { VerifierProfileStepProps } from '@/types/VerifierProfileStep.types'

const YEARS_OF_EXPERIENCE_OPTIONS = [
  { value: '3-5', label: '3–5 years' },
  { value: '6-10', label: '6–10 years' },
  { value: '10+', label: '10+ years' },
]

const HOURS_PER_WEEK_OPTIONS = [
  { value: '1-3', label: '1-3 hours' },
  { value: '4-7', label: '4-7 hours' },
  { value: '8+', label: '8+ hours' },
]

const PROFESSIONAL_STATUS_OPTIONS = [
  { value: 'student', label: 'Student' },
  { value: 'unemployed', label: 'Unemployed' },
  { value: 'employed-full-time', label: 'Employed (full-time)' },
  { value: 'employed-part-time', label: 'Employed (part-time)' },
  { value: 'freelancer', label: 'Freelancer' },
]

const COACHING_MENTORING_OPTIONS = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
]

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
        label='Years of experience'
        options={YEARS_OF_EXPERIENCE_OPTIONS}
        value={yearsOfExperience}
        onChange={onYearsOfExperienceChange}
        error={errors.yearsOfExperience}
        disabled={isSubmitting}
      />

      {/* Hours Per Week */}
      <RadioButtonGroup
        name='hoursPerWeek'
        label='Roughly how many hours per week would you be available for verification work?'
        options={HOURS_PER_WEEK_OPTIONS}
        value={hoursPerWeek}
        onChange={onHoursPerWeekChange}
        error={errors.hoursPerWeek}
        disabled={isSubmitting}
      />

      {/* Professional Status */}
      <RadioButtonGroup
        name='professionalStatus'
        label='What is your current professional status?'
        options={PROFESSIONAL_STATUS_OPTIONS}
        value={professionalStatus}
        onChange={onProfessionalStatusChange}
        error={errors.professionalStatus}
        disabled={isSubmitting}
      />

      {/* Coaching/Mentoring */}
      <RadioButtonGroup
        name='coachingMentoring'
        label='Have you ever done coaching or mentoring?'
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
        placeholder='https://github.com/username or https://gitlab.com/username'
        value={githubGitlabUrl}
        onChange={(e) => onGithubGitlabUrlChange(e.target.value)}
        error={errors.githubGitlabUrl}
        disabled={isSubmitting}
        icon={<div className='w-5 h-5' />}
        label='GitHub/GitLab Profile URL'
        ariaDescribedBy='githubGitlabUrl-error'
      />
    </div>
  )
}
