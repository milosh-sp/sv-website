import { cn } from '@/lib/utils'
import { TextArea } from '@/components/atoms/TextArea'
import { Text } from '@/components/atoms/Text'
import type { ContactTextAreaFieldProps } from '@/types/ContactForm.types'

export function TextAreaField({
  id,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  icon,
  label,
  ariaDescribedBy,
  rows = 5,
  className,
  ...props
}: ContactTextAreaFieldProps) {
  return (
    <div className={cn('space-y-2', className)} {...props}>
      <label htmlFor={id} className='sr-only'>
        {label}
      </label>
      <div className='relative'>
        <div
          className='absolute left-3 top-3 h-5 w-5 text-slate-400'
          role='img'
          aria-label={`${label} icon`}
          aria-hidden='true'
        >
          {icon}
        </div>
        <TextArea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          disabled={disabled}
          rows={rows}
          className={cn(
            'text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 pl-10 pt-3',
            error &&
              'border-red-500 focus:border-red-500 focus:ring-red-500 aria-invalid:border-red-500'
          )}
          aria-label={label}
          aria-describedby={error ? `${id}-error` : ariaDescribedBy}
          aria-invalid={!!error}
        />
      </div>
      {error && (
        <Text
          id={`${id}-error`}
          variant='caption'
          className='text-red-600 mt-1'
          role='alert'
          aria-live='polite'
        >
          {error}
        </Text>
      )}
    </div>
  )
}
