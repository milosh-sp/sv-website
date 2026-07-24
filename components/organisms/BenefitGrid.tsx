'use client'

import { cn } from '@/lib/utils'
import { strings } from '@/lib/strings'
import type { BenefitGridProps } from '@/types/GridCards.types'
import { BenefitCard } from '@/components/molecules/BenefitCard'
import { Carousel } from '@/components/organisms/Carousel'

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

  const carouselSlides = benefits.map((benefit) => ({
    id: benefit.title.toLowerCase().replace(/\s+/g, '-'),
    element: (
      <BenefitCard
        benefit={benefit}
        colorScheme={colorScheme}
        className={cn('w-full')}
      />
    ),
  }))

  return (
    <>
      {/* Mobile: Carousel */}
      <div className={cn('md:hidden', className)}>
        <Carousel
          options={{ loop: true, duration: 15 }}
          slides={carouselSlides}
          aria-label={strings.benefits.accessibility.benefitsCarousel}
        />
      </div>

      {/* Desktop: Grid */}
      <ul
        className={cn(
          'hidden md:grid gap-8 list-none',
          gridCols[columns],
          className
        )}
        aria-label={strings.benefits.accessibility.benefitsList}
        {...props}
      >
        {benefits.map((benefit, index) => (
          <li
            key={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <BenefitCard
              benefit={benefit}
              colorScheme={colorScheme}
              aria-posinset={index + 1}
              aria-setsize={benefits.length}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
