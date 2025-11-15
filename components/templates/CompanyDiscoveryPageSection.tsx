'use client'

import { HeaderAndDescription } from '@/components/molecules/HeaderAndDescription'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { strings } from '@/lib/strings'
import type { SectionProps } from '@/types/Sections.types'
import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const BuildingIcon = strings.companyDiscovery.icon

export function CompanyDiscoveryPageSection({ id }: SectionProps) {
  const router = useRouter()

  return (
    <SectionWrapper
      className={cn('py-16 bg-slate-50')}
      id={id}
      aria-labelledby='company-discovery-heading'
      aria-describedby='company-discovery-description'
    >
      <div className={cn('container-wide')}>
        <div className={cn('max-w-3xl mx-auto text-center')}>
          {/* Main Message */}
          <header className={cn('mb-8')}>
            <div
              className={cn(
                'inline-flex items-center justify-center w-12 h-12',
                'bg-blue-500 rounded-lg mb-4'
              )}
              aria-hidden='true'
            >
              <BuildingIcon
                className={cn('h-6 w-6 text-white')}
                aria-hidden='true'
              />
            </div>
            <HeaderAndDescription
              heading={strings.companyDiscovery.heading}
              description={strings.companyDiscovery.description}
            />
          </header>
          <Button
            variant='secondary'
            onClick={() => router.push('/hiring-manager')}
          >
            {strings.waitlistForms.pageHeaders['hiring-manager'].title}
          </Button>
          {/* Benefits List */}
          <ul
            className={cn(
              'flex flex-wrap justify-center gap-6 text-sm',
              'list-none'
            )}
            aria-label='Company discovery benefits'
          >
            {strings.companyDiscovery.benefits.map((benefit) => {
              const BenefitIcon = benefit.icon
              return (
                <li
                  key={benefit.text}
                  className={cn('flex items-center gap-2')}
                >
                  <BenefitIcon
                    className={cn('h-4 w-4 text-blue-600')}
                    aria-hidden='true'
                  />
                  <Text variant='caption' className={cn('text-slate-600')}>
                    {benefit.text}
                  </Text>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
