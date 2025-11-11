'use client'

import { FormField } from '@/components/ui/FormField'
import { RadioButtonGroup } from '@/components/waitlist/ui/RadioButtonGroup'
import { CheckboxGroup } from '@/components/waitlist/ui/CheckboxGroup'
import { ConditionalField } from '@/components/waitlist/ui/ConditionalField'
import { cn } from '@/lib/utils'
import type { VerifierMotivationStepProps } from '@/types/VerifierMotivationStep.types'

const VERIFIER_MOTIVATION_OPTIONS = [
  { value: 'improve-hiring', label: 'Improve hiring standards in tech' },
  { value: 'earn-income', label: 'Earn extra income' },
  { value: 'mentor-talent', label: 'Mentor and grow future talent' },
  {
    value: 'build-reputation',
    label: 'Build my external reputation and credibility',
  },
  {
    value: 'leadership-work',
    label: 'Transition into more leadership/advisory work',
  },
  { value: 'community', label: 'To be a part of a like minded community' },
  {
    value: 'stay-updated',
    label: 'Staying up-to-date with modern engineering practices and tools',
  },
  { value: 'other', label: 'Other:' },
]

const PROFESSIONAL_FRUSTRATION_OPTIONS = [
  {
    value: 'expertise-not-recognized',
    label: "My leadership and expertise aren't fully recognized or utilized.",
  },
  {
    value: 'undervalued',
    label: 'I feel undervalued or unfairly compensated for my experience.',
  },
  {
    value: 'lack-autonomy',
    label: 'Lack of autonomy and too much micromanagement',
  },
  {
    value: 'hiring-flawed',
    label: 'The technical hiring processes I see are flawed or biased.',
  },
  {
    value: 'no-growth',
    label: 'Not having the opportunity to grow in my current position',
  },
  {
    value: 'burnout-culture',
    label: 'Burnout culture disguised as "hustle" or "startup mindset".',
  },
  {
    value: 'meetings-context-switching',
    label:
      'Excessive meetings or context-switching hurts productivity and deep work.',
  },
  { value: 'other', label: 'Other:' },
]

export function VerifierMotivationStep({
  verifierMotivations = '[]',
  verifierMotivationOther = '',
  professionalFrustration = '',
  professionalFrustrationOther = '',
  errors,
  isSubmitting,
  onVerifierMotivationsChange,
  onVerifierMotivationOtherChange,
  onProfessionalFrustrationChange,
  onProfessionalFrustrationOtherChange,
  className,
  ...props
}: VerifierMotivationStepProps) {
  // Parse JSON arrays for checkboxes
  const parsedMotivations = JSON.parse(verifierMotivations)

  return (
    <div className={cn('space-y-6', className)} {...props}>
      {/* Verifier Motivations - Checkboxes */}
      {onVerifierMotivationsChange && (
        <>
          <CheckboxGroup
            name='verifierMotivations'
            label='Why are you interested in becoming a Verifier? [Select all that apply]'
            options={VERIFIER_MOTIVATION_OPTIONS}
            values={parsedMotivations}
            onChange={(values) => onVerifierMotivationsChange(values)}
            error={errors.verifierMotivations}
            disabled={isSubmitting}
          />

          {/* Conditional field for "other" motivation */}
          <ConditionalField
            condition={
              parsedMotivations.includes('other') &&
              !!onVerifierMotivationOtherChange
            }
          >
            <FormField
              id='verifierMotivationOther'
              type='text'
              placeholder='Please specify your motivation'
              value={verifierMotivationOther}
              onChange={(e) =>
                onVerifierMotivationOtherChange?.(e.target.value)
              }
              error={errors.verifierMotivationOther}
              disabled={isSubmitting}
              icon={<div className='w-5 h-5' />}
              label='Other motivation'
              ariaDescribedBy='verifierMotivationOther-error'
            />
          </ConditionalField>
        </>
      )}

      {/* Professional Frustration - Radio Buttons */}
      {onProfessionalFrustrationChange && (
        <>
          <RadioButtonGroup
            name='professionalFrustration'
            label='What is your biggest professional frustration?'
            options={PROFESSIONAL_FRUSTRATION_OPTIONS}
            value={professionalFrustration}
            onChange={onProfessionalFrustrationChange}
            error={errors.professionalFrustration}
            disabled={isSubmitting}
          />

          {/* Conditional field for "other" frustration */}
          <ConditionalField
            condition={
              professionalFrustration === 'other' &&
              !!onProfessionalFrustrationOtherChange
            }
          >
            <FormField
              id='professionalFrustrationOther'
              type='text'
              placeholder='Please specify your frustration'
              value={professionalFrustrationOther}
              onChange={(e) =>
                onProfessionalFrustrationOtherChange?.(e.target.value)
              }
              error={errors.professionalFrustrationOther}
              disabled={isSubmitting}
              icon={<div className='w-5 h-5' />}
              label='Other frustration'
              ariaDescribedBy='professionalFrustrationOther-error'
            />
          </ConditionalField>
        </>
      )}
    </div>
  )
}
