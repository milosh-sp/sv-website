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
import { TwoSidesButtons } from './ui/two-sides-buttons'
import { HeaderAndDescription } from './ui/header-and-description'
import { BenefitCards } from './benefit-cards'

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

interface BenefitWithIcon {
  title: string
  description: string
  icon: LucideIcon
}

export function TwoSidesExplanation() {
  const [activeTab, setActiveTab] = useState<'candidate' | 'vetter'>(
    'candidate'
  )

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
    <section
      className='p-15 bg-gradient-to-b from-white to-slate-50/50'
      id='how-it-works'
      aria-label={strings.howItWorks.accessibility.howItWorksSection}
    >
      <div className='container-wide'>
        <HeaderAndDescription
          heading={strings.howItWorks.heading}
          headingHighlight={strings.howItWorks.headingHighlight}
          description={strings.howItWorks.description}
        />

        <TwoSidesButtons activeTab={activeTab} onTabChange={setActiveTab} />

        <div className='max-w-6xl mx-auto'>
          {activeTab === 'candidate' && (
            <BenefitCards
              icon={
                <CircleStar
                  className='h-14 w-14 text-white'
                  aria-hidden='true'
                />
              }
              description={strings.howItWorks.members.description}
              benefits={candidateBenefits}
              colorScheme='emerald'
            />
          )}
          {activeTab === 'vetter' && (
            <BenefitCards
              icon={
                <Award
                  className='h-14 w-14 text-white'
                  aria-hidden='true'
                  aria-label={
                    strings.howItWorks.techProfessionals.iconAriaLabel
                  }
                />
              }
              description={strings.howItWorks.techProfessionals.description}
              benefits={vetterBenefits}
              colorScheme='blue'
            />
          )}
        </div>
      </div>
    </section>
  )
}
