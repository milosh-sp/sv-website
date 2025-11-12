import { cn } from '@/lib/utils'
import { Input } from '@/components/atoms/Input'
import type { FormFieldProps } from '@/types/FormComponents.types'

export function FormField({
  id,
  type,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  icon,
  label,
  ariaDescribedBy,
  className,
  ...props
}: FormFieldProps) {
  return (
    <div className={cn('space-y-2', className)} {...props}>
      <label htmlFor={id} className='sr-only'>
        {label}
      </label>
      <div className='relative'>
        <div
          className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400'
          role='img'
          aria-label={`${label} icon`}
          aria-hidden='true'
        >
          {icon}
        </div>
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          disabled={disabled}
          className={cn(
            'h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 pl-10',
            error &&
              'border-destructive focus:border-destructive focus:ring-destructive/20'
          )}
          aria-describedby={ariaDescribedBy}
          aria-invalid={!!error}
          tabIndex={0}
        />
      </div>
      {error && (
        <p
          id={ariaDescribedBy}
          className='text-destructive text-sm mt-2 flex items-start gap-2 px-1'
          role='alert'
          aria-live='polite'
        >
          <span
            className='text-destructive font-medium text-xs mt-0.5'
            aria-hidden='true'
          >
            ⚠
          </span>
          <span className='leading-relaxed'>{error}</span>
        </p>
      )}
    </div>
  )
}
