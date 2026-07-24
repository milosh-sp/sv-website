'use client'

import { HeaderAndDescription } from '@/components/molecules/HeaderAndDescription'
import { BenefitCards } from '@/components/organisms/BenefitCards'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types/Sections.types'
import { Sparkles } from 'lucide-react'

export function DifferentiatorsPageSection({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      className={cn('py-16 bg-slate-50')}
      aria-labelledby={`heading-${strings.differentiators.heading
        .toLowerCase()
        .replace(/\s+/g, '-')}`}
    >
      <div
        className={cn(
          'container-wide flex flex-col items-center justify-center'
        )}
      >
        <HeaderAndDescription
          heading={strings.differentiators.heading}
          description={strings.differentiators.description}
        />

        <BenefitCards
          icon={
            <Sparkles
              aria-label={strings.differentiators.iconAriaLabel}
              aria-hidden='true'
              className={cn('h-10 w-10 text-white')}
            />
          }
          benefits={strings.differentiators.cards}
          colorScheme='companies'
          className={cn('w-full')}
        />
      </div>
    </SectionWrapper>
  )
}
