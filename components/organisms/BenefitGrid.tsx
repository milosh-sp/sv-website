import { cn } from '@/lib/utils'
import type { BenefitGridProps } from '@/types/GridCards.types'
import { BenefitCard } from '@/components/organisms/BenefitCard'

export function BenefitGrid({
  benefits,
  colorScheme = 'blue',
  columns = 2,
  className,
  ...props
}: BenefitGridProps) {
  const gridCols = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  } as const

  return (
    <ul
      className={cn('grid gap-8 list-none', gridCols[columns], className)}
      aria-label='Benefits list'
      {...props}
    >
      {benefits.map((benefit, index) => (
        <li key={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}>
          <BenefitCard
            benefit={benefit}
            colorScheme={colorScheme}
            aria-posinset={index + 1}
            aria-setsize={benefits.length}
          />
        </li>
      ))}
    </ul>
  )
}
