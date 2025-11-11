'use client'

import { FormField } from '@/components/ui/FormField'
import { RadioButton } from '@/components/ui/RadioButton'
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
      <div className='space-y-3'>
        <h3 className='text-sm font-medium'>Years of experience</h3>
        <div className='space-y-2'>
          {YEARS_OF_EXPERIENCE_OPTIONS.map((option) => (
            <div key={option.value}>
              <RadioButton
                id={`years-of-experience-${option.value}`}
                name='yearsOfExperience'
                value={option.value}
                label={option.label}
                checked={yearsOfExperience === option.value}
                onChange={(e) => onYearsOfExperienceChange(e.target.value)}
                disabled={isSubmitting}
                aria-describedby={
                  errors.yearsOfExperience
                    ? 'yearsOfExperience-error'
                    : undefined
                }
              />
            </div>
          ))}
        </div>
        {errors.yearsOfExperience && (
          <p
            id='yearsOfExperience-error'
            className='text-destructive text-sm mt-2 flex items-start gap-2 px-1'
            role='alert'
            aria-live='polite'
          >
            <span
              className='text-destructive font-medium text-xs mt-0.5'
              aria-hidden='true'
            >
              ⚠
            </span>
            <span className='leading-relaxed'>{errors.yearsOfExperience}</span>
          </p>
        )}
      </div>

      {/* Hours Per Week */}
      <div className='space-y-3'>
        <h3 className='text-sm font-medium'>
          Roughly how many hours per week would you be available for
          verification work?
        </h3>
        <div className='space-y-2'>
          {HOURS_PER_WEEK_OPTIONS.map((option) => (
            <div key={option.value}>
              <RadioButton
                id={`hours-per-week-${option.value}`}
                name='hoursPerWeek'
                value={option.value}
                label={option.label}
                checked={hoursPerWeek === option.value}
                onChange={(e) => onHoursPerWeekChange(e.target.value)}
                disabled={isSubmitting}
                aria-describedby={
                  errors.hoursPerWeek ? 'hoursPerWeek-error' : undefined
                }
              />
            </div>
          ))}
        </div>
        {errors.hoursPerWeek && (
          <p
            id='hoursPerWeek-error'
            className='text-destructive text-sm mt-2 flex items-start gap-2 px-1'
            role='alert'
            aria-live='polite'
          >
            <span
              className='text-destructive font-medium text-xs mt-0.5'
              aria-hidden='true'
            >
              ⚠
            </span>
            <span className='leading-relaxed'>{errors.hoursPerWeek}</span>
          </p>
        )}
      </div>

      {/* Professional Status */}
      <div className='space-y-3'>
        <h3 className='text-sm font-medium'>
          What is your current professional status?
        </h3>
        <div className='space-y-2'>
          {PROFESSIONAL_STATUS_OPTIONS.map((option) => (
            <div key={option.value}>
              <RadioButton
                id={`professional-status-${option.value}`}
                name='professionalStatus'
                value={option.value}
                label={option.label}
                checked={professionalStatus === option.value}
                onChange={(e) => onProfessionalStatusChange(e.target.value)}
                disabled={isSubmitting}
                aria-describedby={
                  errors.professionalStatus
                    ? 'professionalStatus-error'
                    : undefined
                }
              />
            </div>
          ))}
        </div>
        {errors.professionalStatus && (
          <p
            id='professionalStatus-error'
            className='text-destructive text-sm mt-2 flex items-start gap-2 px-1'
            role='alert'
            aria-live='polite'
          >
            <span
              className='text-destructive font-medium text-xs mt-0.5'
              aria-hidden='true'
            >
              ⚠
            </span>
            <span className='leading-relaxed'>{errors.professionalStatus}</span>
          </p>
        )}
      </div>

      {/* Coaching/Mentoring */}
      <div className='space-y-3'>
        <h3 className='text-sm font-medium'>
          Have you ever done coaching or mentoring?
        </h3>
        <div className='space-y-2'>
          {COACHING_MENTORING_OPTIONS.map((option) => (
            <div key={option.value}>
              <RadioButton
                id={`coaching-mentoring-${option.value}`}
                name='coachingMentoring'
                value={option.value}
                label={option.label}
                checked={coachingMentoring === option.value}
                onChange={(e) => onCoachingMentoringChange(e.target.value)}
                disabled={isSubmitting}
                aria-describedby={
                  errors.coachingMentoring
                    ? 'coachingMentoring-error'
                    : undefined
                }
              />
            </div>
          ))}
        </div>
        {errors.coachingMentoring && (
          <p
            id='coachingMentoring-error'
            className='text-destructive text-sm mt-2 flex items-start gap-2 px-1'
            role='alert'
            aria-live='polite'
          >
            <span
              className='text-destructive font-medium text-xs mt-0.5'
              aria-hidden='true'
            >
              ⚠
            </span>
            <span className='leading-relaxed'>{errors.coachingMentoring}</span>
          </p>
        )}
      </div>

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
