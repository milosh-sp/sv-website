'use client'

import { FormField } from '@/components/ui/FormField'
import { RadioButtonGroup } from '@/components/waitlist/ui/RadioButtonGroup'
import { CheckboxGroup } from '@/components/waitlist/ui/CheckboxGroup'
import { ConditionalField } from '@/components/waitlist/ui/ConditionalField'
import { cn } from '@/lib/utils'
import type { MotivationChallengesStepProps } from '@/types/MotivationChallengesStep.types'

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
  jobSearchChallenges = '[]',
  jobSearchChallengeOther = '',
  valuableOutcomes = '[]',
  valuableOutcomeOther = '',
  motivation = '',
  challenges = '',
  errors,
  isSubmitting,
  onSkillValidationConfidenceChange,
  onJobSearchChallengesChange,
  onJobSearchChallengeOtherChange,
  onValuableOutcomesChange,
  onValuableOutcomeOtherChange,
  onMotivationChange,
  onChallengesChange,
  className,
  ...props
}: MotivationChallengesStepProps) {
  // Parse JSON arrays for checkboxes
  const parsedJobSearchChallenges = JSON.parse(jobSearchChallenges)
  const parsedValuableOutcomes = JSON.parse(valuableOutcomes)

  return (
    <div className={cn('space-y-6', className)} {...props}>
      {/* Skill Validation Confidence - Candidate only */}
      {onSkillValidationConfidenceChange && (
        <RadioButtonGroup
          name='skillValidationConfidence'
          label='How much do you agree with the following statement: "I would feel more confident in my job search if my skills were validated anonymously by senior engineers"'
          options={SKILL_VALIDATION_OPTIONS}
          value={skillValidationConfidence}
          onChange={onSkillValidationConfidenceChange}
          error={errors.skillValidationConfidence}
          disabled={isSubmitting}
        />
      )}

      {/* Job Search Challenges - Candidate only */}
      {onJobSearchChallengesChange && (
        <>
          <CheckboxGroup
            name='jobSearchChallenges'
            label='What is the biggest challenge you face in your job search?'
            options={JOB_SEARCH_CHALLENGE_OPTIONS}
            values={parsedJobSearchChallenges}
            onChange={(values) => onJobSearchChallengesChange(values)}
            error={errors.jobSearchChallenges}
            disabled={isSubmitting}
          />

          {/* Conditional field for "other" challenge */}
          <ConditionalField
            condition={
              parsedJobSearchChallenges.includes('other') &&
              !!onJobSearchChallengeOtherChange
            }
          >
            <FormField
              id='jobSearchChallengeOther'
              type='text'
              placeholder='Please specify your challenge'
              value={jobSearchChallengeOther}
              onChange={(e) =>
                onJobSearchChallengeOtherChange?.(e.target.value)
              }
              error={errors.jobSearchChallengeOther}
              disabled={isSubmitting}
              icon={<div className='w-5 h-5' />}
              label='Other challenge'
              ariaDescribedBy='jobSearchChallengeOther-error'
            />
          </ConditionalField>
        </>
      )}

      {/* Valuable Outcomes - Candidate only */}
      {onValuableOutcomesChange && (
        <>
          <CheckboxGroup
            name='valuableOutcomes'
            label='What would be the SINGLE most valuable outcome for you from a skill-validation platform?'
            options={VALUABLE_OUTCOME_OPTIONS}
            values={parsedValuableOutcomes}
            onChange={(values) => onValuableOutcomesChange(values)}
            error={errors.valuableOutcomes}
            disabled={isSubmitting}
          />

          {/* Conditional field for "other" outcome */}
          <ConditionalField
            condition={
              parsedValuableOutcomes.includes('other') &&
              !!onValuableOutcomeOtherChange
            }
          >
            <FormField
              id='valuableOutcomeOther'
              type='text'
              placeholder='Please specify the outcome'
              value={valuableOutcomeOther}
              onChange={(e) => onValuableOutcomeOtherChange?.(e.target.value)}
              error={errors.valuableOutcomeOther}
              disabled={isSubmitting}
              icon={<div className='w-5 h-5' />}
              label='Other outcome'
              ariaDescribedBy='valuableOutcomeOther-error'
            />
          </ConditionalField>
        </>
      )}
    </div>
  )
}
