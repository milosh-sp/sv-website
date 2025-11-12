'use client'

import { useState } from 'react'
import { Award, CircleStar } from 'lucide-react'
import { strings } from '@/lib/strings'
import type { UserType } from '@/types/FormData.types'
import { BenefitCards } from '@/components/organisms/BenefitCards'
import { HeaderAndButtons } from '@/components/molecules/HeaderAndButtons'
import type { SectionProps } from '@/types/Sections.types'

// Benefits already have icons embedded in strings
const vetterBenefits = strings.benefits.guruMembers.benefits
const candidateBenefits = strings.benefits.members.benefits

export function BenefitsPageSection({ id }: SectionProps) {
  const [activeTab, setActiveTab] = useState<UserType>('member')

  return (
    <HeaderAndButtons
      sectionId={id}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      heading={strings.benefits.heading}
      headingHighlight={strings.benefits.headingHighlight}
      description={strings.benefits.description}
      ariaLabel={strings.benefits.accessibility.benefitsSection}
    >
      {activeTab === 'member' && (
        <BenefitCards
          icon={
            <CircleStar className='h-10 w-10 text-white' aria-hidden='true' />
          }
          description={strings.benefits.members.description}
          benefits={candidateBenefits}
          colorScheme='emerald'
        />
      )}
      {activeTab === 'guru' && (
        <BenefitCards
          icon={
            <Award
              className='h-10 w-10 text-white'
              aria-hidden='true'
              aria-label={strings.benefits.guruMembers.iconAriaLabel}
            />
          }
          description={strings.benefits.guruMembers.description}
          benefits={vetterBenefits}
          colorScheme='blue'
        />
      )}
    </HeaderAndButtons>
  )
}
