'use client'

import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
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
import { BenefitCards } from './BenefitCards'
import { HeaderAndButtons } from './ui/HeaderAndButtons'
import type { BenefitWithIcon } from '@/types/TwoSidesExplanation.types'
import type { UserType } from '@/types/FormData.types'

/**
 * Icon mapping configuration for benefits
 * Ensures type safety and prevents index-based icon assignment issues
 */
const VETTER_BENEFIT_ICONS: readonly LucideIcon[] = [
  DollarSign,
  Calendar,
  TrendingUp,
  Network,
] as const

const CANDIDATE_BENEFIT_ICONS: readonly LucideIcon[] = [
  Medal,
  FastForward,
  Rocket,
  QrCode,
] as const

export function TwoSidesExplanation() {
  const [activeTab, setActiveTab] = useState<UserType>('member')

  const vetterBenefits: BenefitWithIcon[] =
    strings.howItWorks.techProfessionals.benefits.map((benefit, index) => ({
      ...benefit,
      icon: VETTER_BENEFIT_ICONS[index] ?? DollarSign,
    }))

  const candidateBenefits: BenefitWithIcon[] =
    strings.howItWorks.members.benefits.map((benefit, index) => ({
      ...benefit,
      icon: CANDIDATE_BENEFIT_ICONS[index] ?? Medal,
    }))

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
