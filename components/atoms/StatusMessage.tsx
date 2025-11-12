import type { StatusMessageProps } from '@/types/FormComponents.types'

export function StatusMessage({
  status,
  errorMessage,
  successIcon,
  errorIcon,
  successMessage,
  defaultErrorMessage,
  className,
  ...props
}: StatusMessageProps) {
  if (status === 'success') {
    return (
      <section
        className='mt-4 p-4 bg-green-50 border border-green-200 rounded-lg'
        aria-live='polite'
        aria-label='Success message'
        {...props}
      >
        <p className='text-green-800 text-sm font-medium flex items-start gap-2'>
          <span className='text-green-600' aria-hidden='true'>
            {successIcon}
          </span>
          <span>{successMessage}</span>
        </p>
      </section>
    )
  }

  if (status === 'error') {
    return (
      <section
        className='mt-4 p-4 bg-red-50 border border-red-200 rounded-lg'
        role='alert'
        aria-live='assertive'
        aria-label='Error message'
        {...props}
      >
        <p className='text-red-800 text-sm font-medium flex items-start gap-2'>
          <span className='text-red-600' aria-hidden='true'>
            {errorIcon}
          </span>
          <span>{errorMessage || defaultErrorMessage}</span>
        </p>
      </section>
    )
  }

  return null
}
