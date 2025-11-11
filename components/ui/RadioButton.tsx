'use client'

import { useFormInputAccessibility } from '@/hooks/useFormInputAccessibility'
import { cn } from '@/lib/utils'
import type { RadioButtonProps } from '@/types/RadioButton.types'

import { FormInputWrapper } from './FormInputWrapper'

export function RadioButton({
  className,
  size = 'default',
  label,
  description,
  error,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-required': ariaRequired,
  required,
  disabled,
  id,
  ...props
}: RadioButtonProps) {
  const {
    inputId: radioId,
    descriptionId,
    errorId,
    combinedAriaDescribedBy,
    isInvalid,
    computedAriaLabel,
  } = useFormInputAccessibility({
    id,
    prefix: 'radio',
    label,
    description,
    error,
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid,
    'aria-label': ariaLabel,
    'aria-required': ariaRequired,
    required,
    defaultAriaLabel: 'Radio button',
  })

  const radioElement = (
    <input
      type='radio'
      id={radioId}
      data-slot='radio'
      aria-label={computedAriaLabel}
      aria-describedby={combinedAriaDescribedBy}
      aria-invalid={isInvalid}
      disabled={disabled}
      required={required}
      className={cn(
        'peer shrink-0 rounded-full border transition-all',
        'cursor-pointer outline-none appearance-none',
        'border-input bg-background hover:border-ring',
        'checked:border-primary',
        'checked:bg-[radial-gradient(circle,var(--primary)_40%,transparent_40%)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2',
        'focus-visible:outline-ring',
        'focus-visible:ring-2 focus-visible:ring-ring',
        'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
        'dark:aria-invalid:ring-destructive/40',
        'disabled:cursor-not-allowed disabled:opacity-50',
        size === 'sm' && 'h-4 w-4',
        size === 'default' && 'h-5 w-5',
        size === 'lg' && 'h-6 w-6',
        className
      )}
      {...props}
    />
  )

  return (
    <FormInputWrapper
      inputId={radioId}
      label={label}
      description={description}
      error={error}
      required={required}
      size={size}
      descriptionId={descriptionId}
      errorId={errorId}
    >
      {radioElement}
    </FormInputWrapper>
  )
}
