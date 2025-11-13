import { strings } from '@/lib/strings'
import { HeroButtons } from '@/components/molecules/HeroButtons'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import type { SectionProps } from '@/types/Sections.types'

export function HeroPageSectionV4({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      className='bg-white py-20 md:py-32'
      aria-labelledby='hero-heading'
      aria-describedby='hero-description'
    >
      <div className='container-narrow'>
        <div className='text-center max-w-3xl mx-auto animate-fade-in-up'>
          {/* Decorative top element */}
          <div className='flex justify-center mb-8'>
            <div className='flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50'>
              <div className='w-2 h-2 rounded-full bg-emerald-500' />
              <span className='text-xs font-semibold text-slate-600 uppercase tracking-wide'>
                Trusted Platform
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1
            id='hero-heading'
            className='text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 text-balance leading-tight'
          >
            {strings.hero.mainHeading}
            <br />
            <span className='bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              {strings.hero.mainHeadingHighlight}
            </span>
          </h1>

          {/* Subheading */}
          <p
            id='hero-description'
            className='text-lg md:text-xl text-slate-600 mb-12 text-pretty leading-relaxed'
          >
            {strings.hero.subHeading}
          </p>

          {/* Call to Action */}
          <p className='text-base md:text-lg text-slate-700 font-semibold mb-10'>
            {strings.hero.callToAction}
          </p>

          {/* Buttons */}
          <div className='mb-16 flex justify-center'>
            <HeroButtons />
          </div>

          {/* Trust Indicators - Horizontal Pills */}
          <ul
            className='flex flex-col sm:flex-row items-center justify-center gap-4 text-sm list-none flex-wrap'
            aria-label='Trust indicators'
          >
            {strings.hero.trustIndicators.map((indicator) => {
              const Icon = indicator.icon
              return (
                <li
                  key={indicator.text}
                  className='flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors'
                >
                  <Icon
                    className='h-4 w-4 text-emerald-500 shrink-0'
                    aria-hidden='true'
                  />
                  <span className='font-medium text-slate-700'>
                    {indicator.text}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
