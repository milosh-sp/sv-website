import { cn } from '@/lib/utils'
import type { FormInputWrapperProps } from '@/types/FormInputWrapper.types'

export function FormInputWrapper({
  children,
  size = 'default',
  label,
  description,
  error,
  required,
  inputId,
  descriptionId,
  errorId,
}: FormInputWrapperProps) {
  // If no label or description, return input element only
  if (!label && !description) {
    return <>{children}</>
  }

  return (
    <div className='flex items-center gap-2'>
      {children}
      <div className='flex flex-col gap-1'>
        {label && (
          <label
            htmlFor={inputId}
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
