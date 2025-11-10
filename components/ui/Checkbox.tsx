'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import type { CheckboxProps } from '@/types/Checkbox.types'

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

  const checkboxId =
    id ?? `checkbox-${Math.random().toString(36).substring(2, 9)}`
  const descriptionId = description ? `${checkboxId}-description` : undefined
  const errorId = error ? `${checkboxId}-error` : undefined

  const ids = [ariaDescribedBy, descriptionId, errorId].filter(Boolean)
  const combinedAriaDescribedBy = ids.length > 0 ? ids.join(' ') : undefined

  const isInvalid = ariaInvalid ?? !!error

  const checkboxElement = (
    <input
      ref={checkboxRef}
      type='checkbox'
      id={checkboxId}
      data-slot='checkbox'
      aria-label={ariaLabel ?? (label ? undefined : 'Checkbox')}
      aria-describedby={combinedAriaDescribedBy}
      aria-invalid={isInvalid}
      aria-required={ariaRequired ?? required}
      disabled={disabled}
      required={required}
      className={cn(
        'peer shrink-0 rounded border transition-all cursor-pointer outline-none',
        'border-input bg-background hover:border-ring',
        'checked:bg-primary checked:border-primary checked:text-primary-foreground',
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

  if (!label && !description) {
    return checkboxElement
  }

  return (
    <div className='flex items-start gap-2'>
      {checkboxElement}
      <div className='flex flex-col gap-1'>
        {label && (
          <label
            htmlFor={checkboxId}
            className={cn(
              'font-medium text-foreground cursor-pointer select-none',
              'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
              size === 'sm' && 'text-sm',
              size === 'default' && 'text-base',
              size === 'lg' && 'text-lg'
            )}
          >
            {label}
            {required && (
              <span className='text-destructive ml-1' aria-hidden='true'>
                *
              </span>
            )}
          </label>
        )}
        {description && (
          <p
            id={descriptionId}
            className={cn(
              'text-muted-foreground peer-disabled:opacity-50',
              size === 'sm' && 'text-xs',
              size === 'default' && 'text-sm',
              size === 'lg' && 'text-base'
            )}
          >
            {description}
          </p>
        )}
        {error && (
          <p
            id={errorId}
            className={cn(
              'text-destructive',
              size === 'sm' && 'text-xs',
              size === 'default' && 'text-sm',
              size === 'lg' && 'text-base'
            )}
            role='alert'
            aria-live='polite'
          >
            {error}
          </p>
        )}
      </div>
    </div>
  )
}

export type { CheckboxProps }
