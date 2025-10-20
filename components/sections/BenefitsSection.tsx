'use client'

import { useState } from 'react'
import {
  DollarSign,
  Award,
  Calendar,
  TrendingUp,
  Network,
  Medal,
  FastForward,
  Rocket,
  QrCode,
  CircleStar,
} from 'lucide-react'
import { strings } from '@/lib/strings'
import type { BenefitWithIcon } from '@/types/TwoSidesExplanation.types'
import type { UserType } from '@/types/FormData.types'
import { BenefitCards } from '../ui/BenefitCards'
import { HeaderAndButtons } from '../ui/HeaderAndButtons'

const vetterBenefits: BenefitWithIcon[] =
  strings.howItWorks.techProfessionals.benefits.map((benefit, index) => ({
    ...benefit,
    icon: [DollarSign, Calendar, TrendingUp, Network][index] ?? DollarSign,
  }))

const candidateBenefits: BenefitWithIcon[] =
  strings.howItWorks.members.benefits.map((benefit, index) => ({
    ...benefit,
    icon: [Medal, FastForward, Rocket, QrCode][index] ?? Medal,
  }))

export function BenefitsSection() {
  const [activeTab, setActiveTab] = useState<UserType>('member')

  return (
    <HeaderAndButtons
      sectionId='how-it-works'
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
