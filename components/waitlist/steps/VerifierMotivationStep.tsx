'use client'

import { cn } from '@/lib/utils'
import { FormField } from '@/components/ui/FormField'
import { RadioButtonGroup } from '@/components/ui/RadioButtonGroup'
import { CheckboxGroup } from '@/components/ui/CheckboxGroup'
import { ConditionalField } from '@/components/ui/ConditionalField'
import {
  VERIFIER_MOTIVATION_OPTIONS,
  PROFESSIONAL_FRUSTRATION_OPTIONS,
} from '@/lib/waitlistConstants'
import { strings } from '@/lib/strings'
import type { VerifierMotivationStepProps } from '@/types/VerifierMotivationStep.types'

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
            label={strings.waitlistForms.labels.verifierMotivations}
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
              placeholder={
                strings.waitlistForms.fields.verifierMotivationOther.placeholder
              }
              value={verifierMotivationOther}
              onChange={(e) =>
                onVerifierMotivationOtherChange?.(e.target.value)
              }
              error={errors.verifierMotivationOther}
              disabled={isSubmitting}
              icon={<div className='w-5 h-5' />}
              label={strings.waitlistForms.fields.verifierMotivationOther.label}
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
            label={strings.waitlistForms.labels.professionalFrustration}
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
              placeholder={
                strings.waitlistForms.fields.professionalFrustrationOther
                  .placeholder
              }
              value={professionalFrustrationOther}
              onChange={(e) =>
                onProfessionalFrustrationOtherChange?.(e.target.value)
              }
              error={errors.professionalFrustrationOther}
              disabled={isSubmitting}
              icon={<div className='w-5 h-5' />}
              label={
                strings.waitlistForms.fields.professionalFrustrationOther.label
              }
              ariaDescribedBy='professionalFrustrationOther-error'
            />
          </ConditionalField>
        </>
      )}
    </div>
  )
}
