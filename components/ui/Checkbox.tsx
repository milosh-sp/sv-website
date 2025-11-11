'use client'

import { useEffect, useRef } from 'react'

import { useFormInputAccessibility } from '@/hooks/useFormInputAccessibility'
import { cn } from '@/lib/utils'
import type { CheckboxProps } from '@/types/Checkbox.types'

import { FormInputWrapper } from './FormInputWrapper'

export function Checkbox({
  className,
  size = 'default',
  label,
  description,
  error,
  indeterminate = false,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-required': ariaRequired,
  required,
  disabled,
  id,
  ...props
}: CheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  const {
    inputId: checkboxId,
    descriptionId,
    errorId,
    combinedAriaDescribedBy,
    isInvalid,
    computedAriaLabel,
    computedAriaRequired,
  } = useFormInputAccessibility({
    id,
    prefix: 'checkbox',
    label,
    description,
    error,
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid,
    'aria-label': ariaLabel,
    'aria-required': ariaRequired,
    required,
    defaultAriaLabel: 'Checkbox',
  })

  const checkboxElement = (
    <input
      ref={checkboxRef}
      type='checkbox'
      id={checkboxId}
      data-slot='checkbox'
      aria-label={computedAriaLabel}
      aria-describedby={combinedAriaDescribedBy}
      aria-invalid={isInvalid}
      aria-required={computedAriaRequired}
      disabled={disabled}
      required={required}
      className={cn(
        'peer shrink-0 rounded border transition-all cursor-pointer outline-none appearance-none',
        'border-input bg-background hover:border-ring',
        'checked:bg-primary checked:border-primary',
        'checked:bg-[url("data:image/svg+xml,%3csvg%20viewBox=%270%200%2016%2016%27%20fill=%27white%27%20xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath%20d=%27M12.207%205.793a1%201%200%200%201%200%201.414l-5%205a1%201%200%200%201-1.414%200l-2-2a1%201%200%200%201%201.414-1.414L6.5%2010.086l4.293-4.293a1%201%200%200%201%201.414%200z%27/%3e%3c/svg%3e")]',
        'checked:bg-center checked:bg-no-repeat',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
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
      inputId={checkboxId}
      label={label}
      description={description}
      error={error}
      required={required}
      size={size}
      descriptionId={descriptionId}
      errorId={errorId}
    >
      {checkboxElement}
    </FormInputWrapper>
  )
}
