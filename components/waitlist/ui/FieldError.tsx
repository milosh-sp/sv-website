'use client'

import { cn } from '@/lib/utils'
import type { FieldErrorProps } from '@/types/FieldError.types'

export function FieldError({
  error,
  id,
  className,
  ...props
}: FieldErrorProps) {
  if (!error) return null

  return (
    <p
      id={id}
      className={cn(
        'text-destructive text-sm mt-2 flex items-start gap-2 px-1',
        className
      )}
      role='alert'
      aria-live='polite'
      {...props}
    >
      <span
        className='text-destructive font-medium text-xs mt-0.5'
        aria-hidden='true'
      >
        ⚠
      </span>
      <span className='leading-relaxed'>{error}</span>
    </p>
  )
}
