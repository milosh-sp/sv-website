'use client'

import { cn } from '@/lib/utils'
import type { ReactNode, HTMLAttributes } from 'react'

interface ConditionalFieldProps extends HTMLAttributes<HTMLDivElement> {
  condition: boolean
  children: ReactNode
}

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
