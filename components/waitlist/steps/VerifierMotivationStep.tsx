'use client'

import { Checkbox } from '@/components/ui/Checkbox'
import { RadioButton } from '@/components/ui/RadioButton'
import { FormField } from '@/components/ui/FormField'
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

  const handleMotivationToggle = (value: string) => {
    const updated = parsedMotivations.includes(value)
      ? parsedMotivations.filter((v: string) => v !== value)
      : [...parsedMotivations, value]
    onVerifierMotivationsChange?.(updated)
  }

  return (
    <div className={cn('space-y-6', className)} {...props}>
      {/* Verifier Motivations - Checkboxes */}
      {onVerifierMotivationsChange && (
        <div className='space-y-3'>
          <h3 className='text-sm font-medium'>
            Why are you interested in becoming a Verifier? [Select all that
            apply]
          </h3>
          <div className='space-y-2'>
            {VERIFIER_MOTIVATION_OPTIONS.map((option) => (
              <div key={option.value}>
                <Checkbox
                  id={`verifier-motivation-${option.value}`}
                  checked={parsedMotivations.includes(option.value)}
                  onChange={() => handleMotivationToggle(option.value)}
                  disabled={isSubmitting}
                  label={option.label}
                  aria-describedby={
                    errors.verifierMotivations
                      ? 'verifierMotivations-error'
                      : undefined
                  }
                />
                {parsedMotivations.includes('other') &&
                  option.value === 'other' &&
                  onVerifierMotivationOtherChange && (
                    <div className='ml-7 mt-2'>
                      <FormField
                        id='verifierMotivationOther'
                        type='text'
                        placeholder='Please specify your motivation'
                        value={verifierMotivationOther}
                        onChange={(e) =>
                          onVerifierMotivationOtherChange(e.target.value)
                        }
                        error={errors.verifierMotivationOther}
                        disabled={isSubmitting}
                        icon={<div className='w-5 h-5' />}
                        label='Other motivation'
                        ariaDescribedBy='verifierMotivationOther-error'
                      />
                    </div>
                  )}
              </div>
            ))}
          </div>
          {errors.verifierMotivations && (
            <p
              id='verifierMotivations-error'
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
                {errors.verifierMotivations}
              </span>
            </p>
          )}
        </div>
      )}

      {/* Professional Frustration - Radio Buttons */}
      {onProfessionalFrustrationChange && (
        <div className='space-y-3'>
          <h3 className='text-sm font-medium'>
            What is your biggest professional frustration?
          </h3>
          <div className='space-y-2'>
            {PROFESSIONAL_FRUSTRATION_OPTIONS.map((option) => (
              <div key={option.value}>
                <RadioButton
                  id={`professional-frustration-${option.value}`}
                  name='professionalFrustration'
                  value={option.value}
                  label={option.label}
                  checked={professionalFrustration === option.value}
                  onChange={(e) =>
                    onProfessionalFrustrationChange(e.target.value)
                  }
                  disabled={isSubmitting}
                  aria-describedby={
                    errors.professionalFrustration
                      ? 'professionalFrustration-error'
                      : undefined
                  }
                />
                {professionalFrustration === 'other' &&
                  option.value === 'other' &&
                  onProfessionalFrustrationOtherChange && (
                    <div className='ml-7 mt-2'>
                      <FormField
                        id='professionalFrustrationOther'
                        type='text'
                        placeholder='Please specify your frustration'
                        value={professionalFrustrationOther}
                        onChange={(e) =>
                          onProfessionalFrustrationOtherChange(e.target.value)
                        }
                        error={errors.professionalFrustrationOther}
                        disabled={isSubmitting}
                        icon={<div className='w-5 h-5' />}
                        label='Other frustration'
                        ariaDescribedBy='professionalFrustrationOther-error'
                      />
                    </div>
                  )}
              </div>
            ))}
          </div>
          {errors.professionalFrustration && (
            <p
              id='professionalFrustration-error'
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
                {errors.professionalFrustration}
              </span>
            </p>
          )}
        </div>
      )}
    </div>
  )
}
