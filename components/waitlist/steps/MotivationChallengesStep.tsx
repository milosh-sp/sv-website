'use client'

import type { HTMLAttributes } from 'react'
import { FormField } from '@/components/ui/FormField'
import { RadioButton } from '@/components/ui/RadioButton'
import { cn } from '@/lib/utils'

interface MotivationChallengesStepProps extends HTMLAttributes<HTMLDivElement> {
  // Candidate-specific fields
  skillValidationConfidence?: string
  jobSearchChallenge?: string
  jobSearchChallengeOther?: string
  valuableOutcome?: string
  valuableOutcomeOther?: string
  // Verifier-specific fields (legacy)
  motivation?: string
  challenges?: string
  // Common
  errors: Record<string, string>
  isSubmitting: boolean
  onSkillValidationConfidenceChange?: (value: string) => void
  onJobSearchChallengeChange?: (value: string) => void
  onJobSearchChallengeOtherChange?: (value: string) => void
  onValuableOutcomeChange?: (value: string) => void
  onValuableOutcomeOtherChange?: (value: string) => void
  // Verifier-specific handlers (legacy)
  onMotivationChange?: (value: string) => void
  onChallengesChange?: (value: string) => void
}

const SKILL_VALIDATION_OPTIONS = [
  { value: 'strongly-agree', label: 'Strongly Agree' },
  { value: 'agree', label: 'Agree' },
  { value: 'neutral', label: 'Neutral' },
  { value: 'disagree', label: 'Disagree' },
  { value: 'strongly-disagree', label: 'Strongly Disagree' },
]

const JOB_SEARCH_CHALLENGE_OPTIONS = [
  { value: 'no-response', label: 'Getting no response after applying' },
  { value: 'cv-rejections', label: 'My CV is getting rejections' },
  {
    value: 'no-feedback',
    label:
      'Rejection without clear feedback (even after passing technical rounds)',
  },
  {
    value: 'bias',
    label: 'Bias (e.g., based on location, background, age, gender)',
  },
  { value: 'not-knowing', label: 'Not knowing what to improve' },
  { value: 'lack-mentorship', label: 'Lack of mentorship / guidance' },
  { value: 'other', label: 'Other:' },
]

const VALUABLE_OUTCOME_OPTIONS = [
  {
    value: 'credibility',
    label:
      'Credibility: A trusted certificate/badge for my resume that gets me more interviews.',
  },
  {
    value: 'clarity-growth',
    label:
      'Clarity & Growth: A detailed report with actionable feedback and a personalized plan to improve my skills.',
  },
  {
    value: 'efficiency',
    label:
      'Efficiency: Drastically reducing the number of technical screens I have to do for each company.',
  },
  {
    value: 'opportunity',
    label:
      "Opportunity: Direct access to job opportunities from companies that trust the platform's assessment.",
  },
  { value: 'other', label: 'Other:' },
]

export function MotivationChallengesStep({
  skillValidationConfidence = '',
  jobSearchChallenge = '',
  jobSearchChallengeOther = '',
  valuableOutcome = '',
  valuableOutcomeOther = '',
  motivation = '',
  challenges = '',
  errors,
  isSubmitting,
  onSkillValidationConfidenceChange,
  onJobSearchChallengeChange,
  onJobSearchChallengeOtherChange,
  onValuableOutcomeChange,
  onValuableOutcomeOtherChange,
  onMotivationChange,
  onChallengesChange,
  className,
  ...props
}: MotivationChallengesStepProps) {
  return (
    <div className={cn('space-y-6', className)} {...props}>
      {/* Skill Validation Confidence - Candidate only */}
      {onSkillValidationConfidenceChange && (
        <div className='space-y-3'>
          <h3 className='text-sm font-medium'>
            How much do you agree with the following statement: "I would feel
            more confident in my job search if my skills were validated
            anonymously by senior engineers"
          </h3>
          <div className='space-y-2'>
            {SKILL_VALIDATION_OPTIONS.map((option) => (
              <RadioButton
                key={option.value}
                id={`skill-validation-${option.value}`}
                name='skillValidationConfidence'
                value={option.value}
                label={option.label}
                checked={skillValidationConfidence === option.value}
                onChange={(e) =>
                  onSkillValidationConfidenceChange(e.target.value)
                }
                disabled={isSubmitting}
                aria-describedby={
                  errors.skillValidationConfidence
                    ? 'skillValidationConfidence-error'
                    : undefined
                }
              />
            ))}
          </div>
          {errors.skillValidationConfidence && (
            <p
              id='skillValidationConfidence-error'
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
              <span className='leading-relaxed'>
                {errors.skillValidationConfidence}
              </span>
            </p>
          )}
        </div>
      )}

      {/* Job Search Challenge - Candidate only */}
      {onJobSearchChallengeChange && (
        <div className='space-y-3'>
          <h3 className='text-sm font-medium'>
            What is the biggest challenge you face in your job search?
          </h3>
          <div className='space-y-2'>
            {JOB_SEARCH_CHALLENGE_OPTIONS.map((option) => (
              <div key={option.value}>
                <RadioButton
                  id={`job-search-challenge-${option.value}`}
                  name='jobSearchChallenge'
                  value={option.value}
                  label={option.label}
                  checked={jobSearchChallenge === option.value}
                  onChange={(e) => onJobSearchChallengeChange(e.target.value)}
                  disabled={isSubmitting}
                  aria-describedby={
                    errors.jobSearchChallenge
                      ? 'jobSearchChallenge-error'
                      : undefined
                  }
                />
                {jobSearchChallenge === 'other' &&
                  option.value === 'other' &&
                  onJobSearchChallengeOtherChange && (
                    <div className='ml-7 mt-2'>
                      <FormField
                        id='jobSearchChallengeOther'
                        type='text'
                        placeholder='Please specify your challenge'
                        value={jobSearchChallengeOther}
                        onChange={(e) =>
                          onJobSearchChallengeOtherChange(e.target.value)
                        }
                        error={errors.jobSearchChallengeOther}
                        disabled={isSubmitting}
                        icon={<div className='w-5 h-5' />}
                        label='Other challenge'
                        ariaDescribedBy='jobSearchChallengeOther-error'
                      />
                    </div>
                  )}
              </div>
            ))}
          </div>
          {errors.jobSearchChallenge && (
            <p
              id='jobSearchChallenge-error'
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
              <span className='leading-relaxed'>
                {errors.jobSearchChallenge}
              </span>
            </p>
          )}
        </div>
      )}

      {/* Valuable Outcome - Candidate only */}
      {onValuableOutcomeChange && (
        <div className='space-y-3'>
          <h3 className='text-sm font-medium'>
            What would be the SINGLE most valuable outcome for you from a
            skill-validation platform?
          </h3>
          <div className='space-y-2'>
            {VALUABLE_OUTCOME_OPTIONS.map((option) => (
              <div key={option.value}>
                <RadioButton
                  id={`valuable-outcome-${option.value}`}
                  name='valuableOutcome'
                  value={option.value}
                  label={option.label}
                  checked={valuableOutcome === option.value}
                  onChange={(e) => onValuableOutcomeChange(e.target.value)}
                  disabled={isSubmitting}
                  aria-describedby={
                    errors.valuableOutcome ? 'valuableOutcome-error' : undefined
                  }
                />
                {valuableOutcome === 'other' &&
                  option.value === 'other' &&
                  onValuableOutcomeOtherChange && (
                    <div className='ml-7 mt-2'>
                      <FormField
                        id='valuableOutcomeOther'
                        type='text'
                        placeholder='Please specify the outcome'
                        value={valuableOutcomeOther}
                        onChange={(e) =>
                          onValuableOutcomeOtherChange(e.target.value)
                        }
                        error={errors.valuableOutcomeOther}
                        disabled={isSubmitting}
                        icon={<div className='w-5 h-5' />}
                        label='Other outcome'
                        ariaDescribedBy='valuableOutcomeOther-error'
                      />
                    </div>
                  )}
              </div>
            ))}
          </div>
          {errors.valuableOutcome && (
            <p
              id='valuableOutcome-error'
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
              <span className='leading-relaxed'>{errors.valuableOutcome}</span>
            </p>
          )}
        </div>
      )}
    </div>
  )
}
