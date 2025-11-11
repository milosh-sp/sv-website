'use client'

import { CheckboxGroup } from '@/components/ui/CheckboxGroup'
import { ConditionalField } from '@/components/ui/ConditionalField'
import { FormField } from '@/components/ui/FormField'
import { RadioButtonGroup } from '@/components/ui/RadioButtonGroup'
import { cn } from '@/lib/utils'
import type { FormFieldsStepProps } from '@/types/FormFieldsStep.types'

/**
 * Generic, reusable form fields step component
 *
 * Implements Dependency Inversion Principle:
 * - Depends on FormFieldConfig abstraction (interface) rather than concrete implementations
 * - Accepts configuration data as props instead of hardcoding field logic
 * - Polymorphic: renders the same UI structure with different data injected via props
 *
 * Single Responsibility: Only handles rendering form fields based on configuration
 * No business logic, no persona-specific knowledge
 *
 * Usage:
 * ```tsx
 * <FormFieldsStep
 *   fields={[
 *     {
 *       id: 'motivation',
 *       type: 'checkbox',
 *       label: 'Why are you interested?',
 *       options: [...],
 *       value: '[]',
 *       onChange: handleMotivationChange,
 *       otherFieldId: 'motivationOther',
 *       otherValue: '',
 *       onOtherChange: handleMotivationOtherChange,
 *     },
 *     // ... more fields
 *   ]}
 *   isSubmitting={false}
 * />
 * ```
 */
export function FormFieldsStep({
  fields,
  isSubmitting,
  className,
  ...props
}: FormFieldsStepProps) {
  return (
    <div className={cn('space-y-6', className)} {...props}>
      {fields.map((field) => {
        // Determine if this field has an "other" option selected
        const hasOtherSelected = (() => {
          if (field.type === 'checkbox') {
            try {
              const parsed = JSON.parse(field.value)
              return Array.isArray(parsed) && parsed.includes('other')
            } catch {
              return false
            }
          }
          return field.value === 'other'
        })()

        return (
          <div key={field.id}>
            {field.type === 'radio' ? (
              <RadioButtonGroup
                name={field.id}
                label={field.label}
                description={field.description}
                options={field.options}
                value={field.value}
                onChange={field.onChange}
                error={field.error}
                disabled={isSubmitting}
              />
            ) : (
              <CheckboxGroup
                name={field.id}
                label={field.label}
                description={field.description}
                options={field.options}
                values={(() => {
                  try {
                    return JSON.parse(field.value)
                  } catch {
                    return []
                  }
                })()}
                onChange={field.onChange}
                error={field.error}
                disabled={isSubmitting}
              />
            )}

            {/* Conditional "other" text input field */}
            {hasOtherSelected && field.otherFieldId && field.onOtherChange && (
              <ConditionalField condition={true}>
                <FormField
                  id={field.otherFieldId}
                  type='text'
                  placeholder={`Please specify...`}
                  value={field.otherValue ?? ''}
                  onChange={(e) => field.onOtherChange?.(e.target.value)}
                  error={field.otherError}
                  disabled={isSubmitting}
                  icon={<div className='w-5 h-5' />}
                  label={`${field.label} - Other`}
                  ariaDescribedBy={`${field.otherFieldId}-error`}
                />
              </ConditionalField>
            )}
          </div>
        )
      })}
    </div>
  )
}
