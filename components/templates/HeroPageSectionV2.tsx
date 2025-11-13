import { strings } from '@/lib/strings'
import { HeroButtons } from '@/components/molecules/HeroButtons'
import { HeroVisualV2 } from '@/components/molecules/HeroVisualV2'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import type { SectionProps } from '@/types/Sections.types'

export function HeroPageSectionV2({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      className='bg-linear-to-br from-slate-50 via-blue-50 to-purple-50 py-20 md:py-32'
      aria-labelledby='hero-heading'
      aria-describedby='hero-description'
    >
      <div className='container-wide'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Right Visual - Appears First on Mobile */}
          <div className='order-2 lg:order-1'>
            <HeroVisualV2 />
          </div>

          {/* Left Content */}
          <header className='order-1 lg:order-2 animate-fade-in-up'>
            {/* Badge/Tag */}
            <div className='inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6 shadow-sm'>
              <span className='w-2 h-2 rounded-full bg-emerald-500' />
              <span className='text-sm font-medium text-slate-700'>
                Trusted by global tech professionals
              </span>
            </div>

            {/* Main Heading */}
            <h1
              id='hero-heading'
              className='text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 text-balance leading-tight'
            >
              {strings.hero.mainHeading}
              <span className='bg-linear-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent'>
                {strings.hero.mainHeadingHighlight}
              </span>
            </h1>

            {/* Subheading */}
            <p
              id='hero-description'
              className='text-lg md:text-xl text-slate-600 mb-8 text-pretty leading-relaxed max-w-xl'
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

            {/* Trust Indicators - Horizontal Layout */}
            <ul
              className='flex flex-wrap gap-6 text-sm list-none'
              aria-label='Trust indicators'
            >
              {strings.hero.trustIndicators.map((indicator) => {
                const Icon = indicator.icon
                return (
                  <li
                    key={indicator.text}
                    className='flex items-center gap-2 text-slate-600'
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
          </header>
        </div>
      </div>
    </SectionWrapper>
  )
}
