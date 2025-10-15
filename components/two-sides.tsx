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

export function TwoSides() {
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
      className='section-padding bg-gradient-to-b from-white to-slate-50/50'
      id='how-it-works'
      aria-label={strings.howItWorks.accessibility.howItWorksSection}
    >
      <div className='container-wide'>
        <div className='text-center mb-16 animate-fade-in-up'>
          <h2 className='text-heading-1 text-slate-900 mb-6 text-balance'>
            {strings.howItWorks.heading}
            <span className='ml-1.5 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              {strings.howItWorks.headingHighlight}
            </span>
          </h2>
          <p className='text-body-large text-slate-600 max-w-4xl mx-auto text-pretty leading-relaxed'>
            {strings.howItWorks.description}
          </p>
        </div>

        <div className='flex justify-center mb-12'>
          <div
            className='flex bg-slate-100/80 backdrop-blur-sm rounded-xl p-1.5 shadow-sm border border-slate-200/50'
            role='tablist'
            aria-label={strings.howItWorks.tabAccessibility.chooseUserType}
          >
            <button
              type='button'
              onClick={() => setActiveTab('candidate')}
              className={`flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === 'candidate'
                  ? 'bg-white text-blue-600 shadow-md border border-blue-100'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
              role='tab'
              aria-selected={activeTab === 'candidate'}
              aria-controls='candidate-panel'
            >
              <Award className='h-5 w-5' aria-hidden='true' />
              {strings.howItWorks.tabs.members}
            </button>
            <button
              type='button'
              onClick={() => setActiveTab('vetter')}
              className={`flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === 'vetter'
                  ? 'bg-white text-blue-600 shadow-md border border-blue-100'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
              role='tab'
              aria-selected={activeTab === 'vetter'}
              aria-controls='vetter-panel'
            >
              <DollarSign className='h-5 w-5' aria-hidden='true' />
              {strings.howItWorks.tabs.techProfessionals}
            </button>
          </div>
        </div>

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
              <div className='grid md:grid-cols-2 gap-8'>
                {vetterBenefits.map((benefit, index) => {
                  const BenefitIcon = benefit.icon
                  return (
                    <div
                      // biome-ignore lint/suspicious/noArrayIndexKey: Required for mapping array items in two sides
                      key={index}
                      className='card-interactive p-8 text-left group cursor-pointer'
                    >
                      <div className='w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200'>
                        <BenefitIcon
                          className='h-7 w-7 text-blue-600'
                          aria-hidden='true'
                        />
                      </div>
                      <h3 className='text-xl font-semibold text-slate-900 mb-3'>
                        {benefit.title}
                      </h3>
                      <p className='text-slate-600 leading-relaxed'>
                        {benefit.description}
                      </p>
                    </div>
                  )
                })}
              </div>
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
              <div className='grid md:grid-cols-2 gap-8'>
                {candidateBenefits.map((benefit, index) => {
                  const BenefitIcon = benefit.icon
                  return (
                    <div
                      // biome-ignore lint/suspicious/noArrayIndexKey: Required for mapping array items in two sides
                      key={index}
                      className='card-interactive p-8 text-left group cursor-pointer'
                    >
                      <div className='w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200'>
                        <BenefitIcon
                          className='h-7 w-7 text-emerald-600'
                          aria-hidden='true'
                        />
                      </div>
                      <h3 className='text-xl font-semibold text-slate-900 mb-3'>
                        {benefit.title}
                      </h3>
                      <p className='text-slate-660 leading-relaxed'>
                        {benefit.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
