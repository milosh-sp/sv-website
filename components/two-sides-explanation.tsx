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
} from 'lucide-react'
import { strings } from '@/lib/strings'
import { BenefitGrid } from './ui/grid-cards'
import { TwoSidesButtons } from './ui/two-sides-buttons'
import { HeaderAndDescription } from './ui/header-and-description'

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
          {activeTab === 'vetter' && (
            <div
              className='text-center animate-fade-in-scale'
              role='tabpanel'
              id='vetter-panel'
              aria-labelledby='vetter-tab'
            >
              <div className='w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg'>
                <DollarSign
                  className='h-14 w-14 text-white'
                  aria-hidden='true'
                />
              </div>
              <p className='text-body-large text-slate-600 mb-12 max-w-3xl mx-auto text-pretty'>
                {strings.howItWorks.techProfessionals.description}
              </p>
              <BenefitGrid benefits={vetterBenefits} colorScheme='emerald' />
            </div>
          )}

          {activeTab === 'candidate' && (
            <div
              className='text-center animate-fade-in-scale'
              role='tabpanel'
              id='candidate-panel'
              aria-labelledby='candidate-tab'
            >
              <div className='w-28 h-28 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg'>
                <Award className='h-14 w-14 text-white' aria-hidden='true' />
              </div>
              <p className='text-body-large text-slate-600 mb-12 max-w-3xl mx-auto text-pretty'>
                {strings.howItWorks.members.description}
              </p>
              <BenefitGrid benefits={candidateBenefits} colorScheme='blue' />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
