'use client'

import { cn } from '@/lib/utils'
import type { ConditionalFieldProps } from '@/types/ConditionalField.types'

/**
 * Wrapper component for conditionally rendering fields.
 * Provides consistent styling and spacing for conditional field display.
 */
export function ConditionalField({
  condition,
  children,
  className,
  ...props
}: ConditionalFieldProps) {
  if (!condition) return null

  return (
    <div className={cn('ml-7 mt-2', className)} {...props}>
      {children}
    </div>
  )
}
