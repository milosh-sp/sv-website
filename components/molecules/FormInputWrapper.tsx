import { cn } from '@/lib/utils'
import type { FormInputWrapperProps } from '@/types/FormInputWrapper.types'
import { Label } from '@/components/atoms/Label'
import { FieldError } from '@/components/atoms/FieldError'

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
        {label && <Label inputId={inputId} label={label} required={required} />}
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
        {error && <FieldError error={error} id={errorId} />}
      </div>
    </div>
  )
}
