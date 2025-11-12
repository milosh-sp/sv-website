import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
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
        <h2 className='text-heading-2 font-semibold text-slate-900'>{title}</h2>
        <p className='text-body text-slate-600'>{description}</p>
      </div>

      {/* Step Content */}
      <div className='space-y-4'>{children}</div>

      {/* Error Summary (if any errors exist) */}
      {Object.keys(errors).length > 0 && (
        <div
          className={cn(
            'rounded-lg bg-destructive/10 p-4 border border-destructive/20'
          )}
          role='alert'
          aria-live='polite'
        >
          <p className='text-sm font-medium text-destructive'>
            Please fix the following errors:
          </p>
          <ul className='mt-2 space-y-1'>
            {Object.entries(errors).map(([field, message]) => (
              <li key={field} className='text-sm text-destructive/80'>
                • {message}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
