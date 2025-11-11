import type { ReactNode } from 'react'
import type { WaitlistStepProps } from '@/types/WaitlistStep.types'

export function FormStep({
  title,
  description,
  errors,
  children,
}: WaitlistStepProps): ReactNode {
  return (
    <div className='space-y-6'>
      {/* Step Header */}
      <div className='space-y-2'>
        <h2 className='text-2xl font-semibold text-gray-900'>{title}</h2>
        <p className='text-gray-600'>{description}</p>
      </div>

      {/* Step Content */}
      <div className='space-y-4'>{children}</div>

      {/* Error Summary (if any errors exist) */}
      {Object.keys(errors).length > 0 && (
        <div className='rounded-lg bg-red-50 p-4 border border-red-200'>
          <p className='text-sm font-medium text-red-800'>
            Please fix the following errors:
          </p>
          <ul className='mt-2 space-y-1'>
            {Object.entries(errors).map(([field, message]) => (
              <li key={field} className='text-sm text-red-700'>
                • {message}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
