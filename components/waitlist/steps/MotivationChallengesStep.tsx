'use client'

import { cn } from '@/lib/utils'
import { FormField } from '@/components/ui/FormField'
import { RadioButtonGroup } from '@/components/waitlist/ui/RadioButtonGroup'
import { CheckboxGroup } from '@/components/waitlist/ui/CheckboxGroup'
import { ConditionalField } from '@/components/waitlist/ui/ConditionalField'
import {
  SKILL_VALIDATION_OPTIONS,
  JOB_SEARCH_CHALLENGE_OPTIONS,
  VALUABLE_OUTCOME_OPTIONS,
} from '@/lib/waitlistConstants'
import { strings } from '@/lib/strings'
import type { MotivationChallengesStepProps } from '@/types/MotivationChallengesStep.types'

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
          label={strings.waitlistForms.labels.skillValidationConfidence}
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
            label={strings.waitlistForms.labels.jobSearchChallenges}
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
              placeholder={
                strings.waitlistForms.fields.jobSearchChallengeOther.placeholder
              }
              value={jobSearchChallengeOther}
              onChange={(e) =>
                onJobSearchChallengeOtherChange?.(e.target.value)
              }
              error={errors.jobSearchChallengeOther}
              disabled={isSubmitting}
              icon={<div className={cn('w-5 h-5')} />}
              label={strings.waitlistForms.fields.jobSearchChallengeOther.label}
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
            label={strings.waitlistForms.labels.valuableOutcomes}
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
              placeholder={
                strings.waitlistForms.fields.valuableOutcomeOther.placeholder
              }
              value={valuableOutcomeOther}
              onChange={(e) => onValuableOutcomeOtherChange?.(e.target.value)}
              error={errors.valuableOutcomeOther}
              disabled={isSubmitting}
              icon={<div className={cn('w-5 h-5')} />}
              label={strings.waitlistForms.fields.valuableOutcomeOther.label}
              ariaDescribedBy='valuableOutcomeOther-error'
            />
          </ConditionalField>
        </>
      )}
    </div>
  )
}
