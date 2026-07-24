import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types/Sections.types'
import { HeaderAndDescription } from '../molecules/HeaderAndDescription'

export function StatsBandPageSection({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      className={cn('bg-companies/5 py-14')}
      aria-labelledby='stats-heading'
    >
      <div className={cn('container-wide')}>
        <HeaderAndDescription
          heading={strings.stats.heading}
          description={strings.stats.description}
        />

        <dl
          className={cn(
            'flex flex-row flex-wrap justify-center gap-10 text-center'
          )}
        >
          {strings.stats.items.map((stat) => (
            <div key={stat.label} className={cn('flex flex-col items-center')}>
              <dt className={cn('sr-only')}>{stat.label}</dt>
              <dd className={cn('flex flex-col items-center gap-2')}>
                <Heading
                  level={3}
                  variant='display'
                  size='sm'
                  className={cn(
                    'bg-linear-to-r from-companies to-companies/60 bg-clip-text text-transparent'
                  )}
                >
                  {stat.value}
                </Heading>
                <Text variant='caption' className={cn('max-w-40')}>
                  {stat.label}
                </Text>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionWrapper>
  )
}
