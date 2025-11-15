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
        className='mt-4 p-4 bg-success/10 border border-success rounded-lg'
        aria-live='polite'
        aria-label='Success message'
        {...props}
      >
        <p className='text-success text-sm font-medium flex items-start gap-2'>
          <span className='text-success' aria-hidden='true'>
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
        className='mt-4 p-4 bg-destructive/10 border border-destructive rounded-lg'
        role='alert'
        aria-live='assertive'
        aria-label='Error message'
        {...props}
      >
        <p className='text-destructive text-sm font-medium flex items-start gap-2'>
          <span className='text-destructive' aria-hidden='true'>
            {errorIcon}
          </span>
          <span>{errorMessage || defaultErrorMessage}</span>
        </p>
      </section>
    )
  }

  return null
}
