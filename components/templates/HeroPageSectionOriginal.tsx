import { strings } from '@/lib/strings'
import { HeroButtons } from '@/components/molecules/HeroButtons'
import type { SectionProps } from '@/types/Sections.types'

export function HeroPageSectionOriginal({ id }: SectionProps) {
  return (
    <section
      id={id}
      className='section-padding gradient-hero flex items-center pb-15'
      aria-labelledby='hero-heading'
      aria-describedby='hero-description'
    >
      <div className='container-narrow'>
        <header className='text-center animate-fade-in-up'>
          <h1
            id='hero-heading'
            className='text-display-1 text-slate-900 mb-6 text-balance'
          >
            {strings.hero.mainHeading}
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              {strings.hero.mainHeadingHighlight}
            </span>
          </h1>

          <p
            id='hero-description'
            className='text-body-large text-slate-600 mb-8 max-w-4xl mx-auto text-pretty text-center'
          >
            {strings.hero.subHeading}
          </p>

          <p className='text-lg text-slate-700 mb-8 font-medium'>
            {strings.hero.callToAction}
          </p>

          <HeroButtons />

          <ul
            className='flex flex-col sm:flex-row items-center justify-center gap-6 text-sm list-none'
            aria-label='Trust indicators'
          >
            {strings.hero.trustIndicators.map((indicator) => {
              const Icon = indicator.icon
              return (
                <li
                  key={indicator.text}
                  className='flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-white/20'
                >
                  <Icon
                    className='h-5 w-5 text-emerald-500'
                    aria-hidden='true'
                  />
                  <span className='font-medium text-slate-700'>
                    {indicator.text}
                  </span>
                </li>
              )
            })}
          </ul>
        </header>
      </div>
    </section>
  )
}
