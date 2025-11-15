import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import type { WaitlistStepProps } from '@/types/WaitlistStep.types'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'

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
        <Heading level={2} variant='heading' size='lg'>
          {title}
        </Heading>
        <Text variant='body' className='text-muted-foreground'>
          {description}
        </Text>
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
          <Text variant='caption' className='font-medium text-destructive'>
            Please fix the following errors:
          </Text>
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
