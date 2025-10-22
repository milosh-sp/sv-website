import type { StatusMessageProps } from '@/types/SignupModalComponents.types'

export function StatusMessage({
  status,
  errorMessage,
  successIcon,
  errorIcon,
  successMessage,
  defaultErrorMessage,
}: StatusMessageProps) {
  if (status === 'success') {
    return (
      <section
        className='mt-4 p-4 bg-green-50 border border-green-200 rounded-lg'
        aria-live='polite'
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
      <div
        className='mt-4 p-4 bg-red-50 border border-red-200 rounded-lg'
        role='alert'
        aria-live='assertive'
      >
        <p className='text-red-800 text-sm font-medium flex items-start gap-2'>
          <span className='text-red-600' aria-hidden='true'>
            {errorIcon}
          </span>
          <span>{errorMessage || defaultErrorMessage}</span>
        </p>
      </div>
    )
  }

  return null
}
