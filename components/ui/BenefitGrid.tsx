/**
 * Benefit card component for displaying feature benefits
 * Follows Single Responsibility Principle - handles only benefit card rendering
 */

import { cn } from '@/lib/utils'
import type { BenefitGridProps } from '@/types/GridCards.types'
import { BenefitCard } from './BenefitCard'

/**
 * Grid container for benefit cards
 * Provides responsive layout with configurable columns
 */
export function BenefitGrid({
  benefits,
  colorScheme = 'blue',
  columns = 2,
  className,
}: BenefitGridProps) {
  const gridCols = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }

  return (
    <div className={cn('grid gap-8', gridCols[columns], className)}>
      {benefits.map((benefit, index) => (
        <BenefitCard
          key={`${benefit.title}-${index}`}
          benefit={benefit}
          colorScheme={colorScheme}
        />
      ))}
    </div>
  )
}
