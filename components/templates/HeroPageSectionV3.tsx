import { strings } from '@/lib/strings'
import { HeroButtons } from '@/components/molecules/HeroButtons'
import { HeroVisualV3 } from '@/components/molecules/HeroVisualV3'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import type { SectionProps } from '@/types/Sections.types'

export function HeroPageSectionV3({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      className='bg-white py-16 md:py-24'
      aria-labelledby='hero-heading'
      aria-describedby='hero-description'
    >
      <div className='container-wide'>
        {/* Top Section - Full Width Heading */}
        <div className='mb-16 md:mb-20'>
          <div className='max-w-4xl'>
            <h1
              id='hero-heading'
              className='text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 text-balance leading-tight'
            >
              {strings.hero.mainHeading}
              <span className='bg-linear-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent'>
                {strings.hero.mainHeadingHighlight}
              </span>
            </h1>
          </div>
        </div>

        {/* Bottom Section - Two Column Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
          {/* Left - Content */}
          <div className='animate-fade-in-up'>
            {/* Subheading */}
            <p
              id='hero-description'
              className='text-lg md:text-xl text-slate-600 mb-8 text-pretty leading-relaxed'
            >
              {strings.hero.subHeading}
            </p>

            {/* Call to Action */}
            <p className='text-base md:text-lg text-slate-700 font-semibold mb-8'>
              {strings.hero.callToAction}
            </p>

            {/* Buttons */}
            <div className='mb-12'>
              <HeroButtons />
            </div>

            {/* Trust Indicators - Stacked */}
            <ul
              className='space-y-4 text-sm list-none'
              aria-label='Trust indicators'
            >
              {strings.hero.trustIndicators.map((indicator) => {
                const Icon = indicator.icon
                return (
                  <li
                    key={indicator.text}
                    className='flex items-center gap-3 text-slate-600 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors'
                  >
                    <Icon
                      className='h-5 w-5 text-emerald-500 shrink-0'
                      aria-hidden='true'
                    />
                    <span className='font-medium'>{indicator.text}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Right - Visual */}
          <div>
            <HeroVisualV3 />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
