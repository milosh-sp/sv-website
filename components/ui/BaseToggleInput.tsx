'use client'

import { useFormInputAccessibility } from '@/hooks/useFormInputAccessibility'
import { cn } from '@/lib/utils'
import type { BaseToggleInputProps } from '@/types/BaseToggleInput.types'
import { FormInputWrapper } from './FormInputWrapper'

/**
 * Base component for toggle inputs (checkbox and radio button).
 * Encapsulates shared rendering logic and styling.
 *
 * This component follows the Single Responsibility Principle by handling
 * only the common input rendering logic, while variant-specific behavior
 * is delegated to the consuming components.
 */
export function BaseToggleInput({
  className,
  size = 'default',
  variant,
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
  inputRef,
  defaultAriaLabel,
  ...props
}: BaseToggleInputProps) {
  const {
    inputId,
    descriptionId,
    errorId,
    combinedAriaDescribedBy,
    isInvalid,
    computedAriaLabel,
    computedAriaRequired,
  } = useFormInputAccessibility({
    id,
    prefix: variant,
    label,
    description,
    error,
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid,
    'aria-label': ariaLabel,
    'aria-required': ariaRequired,
    required,
    defaultAriaLabel,
  })

  // Variant-specific styles
  const variantStyles = {
    checkbox: {
      borderRadius: 'rounded',
      checkedState: [
        'checked:bg-primary checked:border-primary',
        'checked:bg-[url("data:image/svg+xml,%3csvg%20viewBox=%270%200%2016%2016%27%20fill=%27white%27%20xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath%20d=%27M12.207%205.793a1%201%200%200%201%200%201.414l-5%205a1%201%200%200%201-1.414%200l-2-2a1%201%200%200%201%201.414-1.414L6.5%2010.086l4.293-4.293a1%201%200%200%201%201.414%200z%27/%3e%3c/svg%3e")]',
        'checked:bg-center checked:bg-no-repeat',
      ],
    },
    radio: {
      borderRadius: 'rounded-full',
      checkedState: [
        'checked:border-primary',
        'checked:bg-[radial-gradient(circle,var(--primary)_40%,transparent_40%)]',
      ],
    },
  }

  const currentVariant = variantStyles[variant]

  const inputElement = (
    <input
      ref={inputRef}
      type={variant}
      id={inputId}
      data-slot={variant}
      aria-label={computedAriaLabel}
      aria-describedby={combinedAriaDescribedBy}
      aria-invalid={isInvalid}
      aria-required={computedAriaRequired}
      disabled={disabled}
      required={required}
      className={cn(
        // Base styles - shared across all variants
        'peer shrink-0 border transition-all',
        'cursor-pointer outline-none appearance-none',
        'border-input bg-background hover:border-ring',
        // Focus styles
        'focus-visible:outline-2 focus-visible:outline-offset-2',
        'focus-visible:outline-ring',
        'focus-visible:ring-2 focus-visible:ring-ring',
        'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        // Invalid state styles
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
        'dark:aria-invalid:ring-destructive/40',
        // Disabled state styles
        'disabled:cursor-not-allowed disabled:opacity-50',
        // Variant-specific border radius
        currentVariant.borderRadius,
        // Variant-specific checked state
        currentVariant.checkedState,
        // Size variants
        size === 'sm' && 'h-4 w-4',
        size === 'default' && 'h-5 w-5',
        size === 'lg' && 'h-6 w-6',
        // Custom className
        className
      )}
      {...props}
    />
  )

  return (
    <FormInputWrapper
      inputId={inputId}
      label={label}
      description={description}
      error={error}
      required={required}
      size={size}
      descriptionId={descriptionId}
      errorId={errorId}
    >
      {inputElement}
    </FormInputWrapper>
  )
}
