import { cn } from '@/lib/utils'
import type { LabelProps } from '@/types/Label.types'

export function Label({
  inputId,
  label,
  required,
  size = 'default',
  className,
  ...props
}: LabelProps) {
  return (
    <label
      htmlFor={inputId}
      className={cn(
        'font-light text-foreground cursor-pointer select-none',
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        size === 'sm' && 'text-sm',
        size === 'default' && 'text-base',
        size === 'lg' && 'text-lg',
        className
      )}
      {...props}
    >
      {label}
      {required && (
        <span className='text-destructive ml-1' aria-hidden='true'>
          *
        </span>
      )}
    </label>
  )
}
