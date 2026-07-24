import type { RadioButtonProps } from '@/types/RadioButton.types'
import { BaseToggleInput } from '@/components/atoms/BaseToggleInput'
import { strings } from '@/lib/strings'

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
  return (
    <BaseToggleInput
      variant='radio'
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
      defaultAriaLabel={strings.radioButton.accessibility.defaultLabel}
      {...props}
    />
  )
}
