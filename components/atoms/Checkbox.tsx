import { useEffect, useRef } from 'react'
import type { CheckboxProps } from '@/types/Checkbox.types'
import { BaseToggleInput } from '@/components/atoms/BaseToggleInput'
import { strings } from '@/lib/strings'

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

  // Handle indeterminate state - checkbox-specific functionality
  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  return (
    <BaseToggleInput
      variant='checkbox'
      inputRef={checkboxRef}
      className={className}
      size={size}
      label={label}
      description={description}
      error={error}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-invalid={ariaInvalid}
      aria-required={ariaRequired}
      required={required}
      disabled={disabled}
      id={id}
      defaultAriaLabel={strings.checkbox.accessibility.defaultLabel}
      {...props}
    />
  )
}
