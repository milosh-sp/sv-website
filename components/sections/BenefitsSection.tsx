'use client'

import { useState } from 'react'
import { Award, CircleStar } from 'lucide-react'
import { strings } from '@/lib/strings'
import type { UserType } from '@/types/FormData.types'
import { BenefitCards } from '../ui/BenefitCards'
import { HeaderAndButtons } from '../ui/HeaderAndButtons'
import type { SectionProps } from '@/types/Sections.types'

// Benefits already have icons embedded in strings
const vetterBenefits = strings.howItWorks.techProfessionals.benefits
const candidateBenefits = strings.howItWorks.members.benefits

export function BenefitsSection({ id }: SectionProps) {
  const [activeTab, setActiveTab] = useState<UserType>('member')

  return (
    <HeaderAndButtons
      sectionId={id}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      heading={strings.howItWorks.heading}
      headingHighlight={strings.howItWorks.headingHighlight}
      description={strings.howItWorks.description}
      ariaLabel={strings.howItWorks.accessibility.howItWorksSection}
    >
      {activeTab === 'member' && (
        <BenefitCards
          icon={
            <CircleStar className='h-14 w-14 text-white' aria-hidden='true' />
          }
          description={strings.howItWorks.members.description}
          benefits={candidateBenefits}
          colorScheme='emerald'
        />
      )}
      {activeTab === 'guru' && (
        <BenefitCards
          icon={
            <Award
              className='h-14 w-14 text-white'
              aria-hidden='true'
              aria-label={strings.howItWorks.techProfessionals.iconAriaLabel}
            />
          }
          description={strings.howItWorks.techProfessionals.description}
          benefits={vetterBenefits}
          colorScheme='blue'
        />
      )}
    </HeaderAndButtons>
  )
}
