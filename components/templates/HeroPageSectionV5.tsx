import { strings } from '@/lib/strings'
import { HeroButtons } from '@/components/molecules/HeroButtons'
import { HeroVisualV5 } from '@/components/molecules/HeroVisualV5'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import type { SectionProps } from '@/types/Sections.types'

export function HeroPageSectionV5({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      className='bg-white py-16 md:py-24'
      aria-labelledby='hero-heading'
      aria-describedby='hero-description'
    >
      <div className='container-wide'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left Content */}
          <header className='animate-fade-in-up'>
            {/* Main Heading with Accent Bar */}
            <div className='flex gap-4 mb-8'>
              <div className='w-1 bg-linear-to-b from-blue-600 to-purple-600 rounded-full' />
              <div>
                <h1
                  id='hero-heading'
                  className='text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 text-balance leading-tight'
                >
                  {strings.hero.mainHeading}
                  <span className='bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                    {strings.hero.mainHeadingHighlight}
                  </span>
                </h1>
              </div>
            </div>

            {/* Subheading with Accent Bar */}
            <div className='flex gap-4 mb-8'>
              <div className='w-1 bg-emerald-500 rounded-full' />
              <p
                id='hero-description'
                className='text-lg md:text-xl text-slate-600 text-pretty leading-relaxed'
              >
                {strings.hero.subHeading}
              </p>
            </div>

            {/* Call to Action with Accent Bar */}
            <div className='flex gap-4 mb-8'>
              <div className='w-1 bg-slate-300 rounded-full' />
              <p className='text-base md:text-lg text-slate-700 font-medium'>
                {strings.hero.callToAction}
              </p>
            </div>

            {/* Buttons */}
            <div className='mb-12'>
              <HeroButtons />
            </div>

            {/* Trust Indicators */}
            <ul
              className='flex flex-col gap-3 text-sm list-none'
              aria-label='Trust indicators'
            >
              {strings.hero.trustIndicators.map((indicator) => {
                const Icon = indicator.icon
                return (
                  <li
                    key={indicator.text}
                    className='flex items-center gap-3 text-slate-600'
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

          {/* Right Visual - Image Gallery */}
          <div className='hidden lg:block'>
            <HeroVisualV5 />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
