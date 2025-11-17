'use client'

import { HeaderAndDescription } from '@/components/molecules/HeaderAndDescription'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { companyDiscovery, strings } from '@/lib/strings'
import type { SectionProps } from '@/types/Sections.types'
import { Button } from '@/components/atoms/Button'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { BuildingIcon } from 'lucide-react'
import { BenefitCards } from '../organisms/BenefitCards'

export function CompanyDiscoveryPageSection({ id }: SectionProps) {
  const router = useRouter()

  return (
    <SectionWrapper
      className={cn('py-16 bg-slate-50')}
      id={id}
      aria-labelledby='company-discovery-heading'
      aria-describedby='company-discovery-description'
    >
      <main
        className={cn(
          'container-wide flex justify-center items-center flex-col'
        )}
      >
        <HeaderAndDescription
          id='company-discovery-heading'
          heading={strings.companyDiscovery.heading}
          description={strings.companyDiscovery.description}
        />

        <Button
          variant='verdict'
          onClick={() => router.push('/hiring-manager')}
          className={cn('mb-8 p-6')}
        >
          {strings.companyDiscovery.buttons.hiringManagerCta}
        </Button>

        <BenefitCards
          icon={
            <BuildingIcon
              aria-label={strings.companyDiscovery.iconAriaLabel}
              aria-hidden='true'
              className={cn('h-10 w-10 text-white')}
            />
          }
          benefits={companyDiscovery.benefits}
          colorScheme='blue'
        />
      </main>
    </SectionWrapper>
  )
}
