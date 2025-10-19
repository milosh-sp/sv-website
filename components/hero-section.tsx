'use client'

import { Button } from '@/components/ui/button'
import { Shield, Clock, UserCheck, DollarSign, Award } from 'lucide-react'
import { useSignupModal } from '@/contexts/signup-modal-context'
import { strings } from '@/lib/strings'

export function HeroSection() {
  const { openModal } = useSignupModal()

  return (
    <section
      id='home'
      className='section-padding gradient-hero flex items-center pb-15'
      aria-label={strings.hero.accessibility.heroSection}
    >
      <div className='container-narrow'>
        <div className='text-center animate-fade-in-up'>
          <h1 className='text-display-1 text-slate-900 mb-6 text-balance text-center'>
            {strings.hero.mainHeading}
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              {strings.hero.mainHeadingHighlight}
            </span>
          </h1>

          <p className='text-body-large text-slate-600 mb-8 max-w-4xl mx-auto text-pretty text-center'>
            {strings.hero.subHeading}
          </p>

          <p className='text-lg text-slate-700 mb-8 font-medium'>
            {strings.hero.callToAction}
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
            <Button
              onClick={() => openModal('member')}
              size='lg'
              className='h-16 px-12 text-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg font-medium cursor-pointer'
              aria-label={strings.hero.accessibility.openSignupModal}
            >
              <Award className='h-5 w-5' aria-hidden='true' />

              {strings.hero.buttons.verifySkills}
            </Button>
            <Button
              onClick={() => openModal('tech-pro')}
              size='lg'
              className='h-16 px-12 text-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg font-medium cursor-pointer'
              aria-label={strings.hero.accessibility.openEarnModal}
            >
              <DollarSign className='mr-1' aria-hidden='true' />
              {strings.hero.buttons.earnByVerifying}
            </Button>
          </div>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-6 text-sm'>
            {strings.hero.trustIndicators.map((indicator, index) => {
              const icons = [Shield, Clock, UserCheck]
              const Icon = icons[index]
              return (
                <div
                  key={indicator}
                  className='flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-white/20'
                >
                  <Icon
                    className='h-5 w-5 text-emerald-500'
                    aria-hidden='true'
                  />
                  <span className='font-medium text-slate-700'>
                    {indicator}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
