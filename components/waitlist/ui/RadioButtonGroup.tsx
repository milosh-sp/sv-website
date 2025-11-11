'use client'

import { cn } from '@/lib/utils'
import { FieldError } from './FieldError'
import { RadioButton } from '@/components/ui/RadioButton'
import type { RadioButtonGroupProps } from '@/types/RadioButtonGroup.types'

export function RadioButtonGroup({
  name,
  options,
  value,
  onChange,
  error,
  disabled = false,
  label,
  description,
  className,
  ...props
}: RadioButtonGroupProps) {
  const errorId = `${name}-error`

  return (
    <div className={cn('space-y-3', className)} {...props}>
      {label && <h3 className={cn('text-sm font-medium')}>{label}</h3>}
      {description && (
        <p className={cn('text-xs text-slate-500')}>{description}</p>
      )}

      <div className={cn('space-y-2')}>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            label={option.label}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            aria-describedby={error ? errorId : undefined}
            aria-invalid={!!error}
          />
        ))}
      </div>

      {error && <FieldError error={error} id={errorId} />}
    </div>
  )
}
