import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

interface TextAreaProps extends ComponentProps<'textarea'> {
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-invalid'?: boolean
  'aria-required'?: boolean
}

export function TextArea({
  className,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-required': ariaRequired,
  required,
  disabled,
  rows = 5,
  ...props
}: TextAreaProps) {
  return (
    <textarea
      data-slot='textarea'
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-invalid={ariaInvalid}
      aria-required={ariaRequired ?? required}
      disabled={disabled}
      required={required}
      rows={rows}
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background',
        'placeholder:text-muted-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'resize-y',
        className
      )}
      {...props}
    />
  )
}
