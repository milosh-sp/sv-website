import { cn } from '@/lib/utils'
import { Checkbox } from '@/components/atoms/Checkbox'
import { FieldError } from '@/components/atoms/FieldError'
import type { CheckboxGroupProps } from '@/types/CheckboxGroup.types'

export function CheckboxGroup({
  name,
  options,
  values,
  onChange,
  error,
  disabled = false,
  label,
  description,
  className,
  ...props
}: CheckboxGroupProps) {
  const errorId = `${name}-error`

  const handleToggle = (value: string) => {
    const updated = values.includes(value)
      ? values.filter((v) => v !== value)
      : [...values, value]
    onChange(updated)
  }

  return (
    <div className={cn('space-y-3', className)} {...props}>
      {label && <h3 className={cn('font-medium')}>{label}</h3>}
      {description && (
        <p className={cn('text-xs text-slate-500')}>{description}</p>
      )}

      <div className={cn('space-y-2')}>
        {options.map((option) => (
          <Checkbox
            key={option.value}
            id={`${name}-${option.value}`}
            label={option.label}
            checked={values.includes(option.value)}
            onChange={() => handleToggle(option.value)}
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
