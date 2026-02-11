import { strings } from '@/lib/strings'
import { HeroButtons } from '@/components/molecules/HeroButtons'
import { HeroVisual } from '@/components/organisms/HeroVisual'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types/Sections.types'
import { ExplainerVideoPageSection } from './ExplainerVideoPageSection'

export function HeroPageSection({ id }: SectionProps) {
  return (
    <>
      <SectionWrapper
        id={id}
        className={cn(
          'flex justify-center bg-linear-to-b from-accent to-accent/50 py-16 md:py-24'
        )}
        aria-labelledby='hero-heading'
        aria-describedby='hero-description'
      >
        <div className={cn('max-w-400')}>
          <article
            className={cn(
              'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'
            )}
          >
            {/* Left Content */}
            <header
              className={cn('animate-fade-in-up text-center lg:text-left')}
            >
              {/* Main Heading with Accent Bar */}
              <hgroup
                className={cn(
                  'flex gap-4 mb-8 justify-center lg:justify-start'
                )}
              >
                <div
                  className={cn(
                    'hidden lg:block w-1 bg-linear-to-b from-primary to-primary/60 rounded-full'
                  )}
                  aria-hidden='true'
                />
                <div>
                  <Heading level={1} variant='display' id='hero-heading'>
                    {strings.hero.mainHeading}
                    <strong
                      className={cn(
                        'bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent'
                      )}
                    >
                      {strings.hero.mainHeadingHighlight}
                    </strong>
                  </Heading>
                </div>
              </hgroup>

              {/* Subheading with Accent Bar */}
              <div
                className={cn(
                  'flex gap-4 mb-8 justify-center lg:justify-start'
                )}
              >
                <div
                  className={cn('hidden lg:block w-1 bg-success rounded-full')}
                  aria-hidden='true'
                />
                <Text id='hero-description' variant='body-large' pretty>
                  {strings.hero.subHeading}
                </Text>
              </div>

              {/* Call to Action with Accent Bar */}
              <aside
                className={cn(
                  'flex gap-4 mb-8 justify-center lg:justify-start'
                )}
              >
                <div
                  className={cn('hidden lg:block w-1 rounded-full bg-purple')}
                  aria-hidden='true'
                />
                <Text variant='body' className='font-medium'>
                  {strings.hero.callToAction}
                </Text>
              </aside>

              {/* Buttons */}
              <nav
                className={cn('mb-12 flex justify-center lg:justify-start')}
                aria-label='Hero actions'
              >
                <HeroButtons showCandidate showVerifier />
              </nav>

              {/* Trust Indicators */}
              <ul
                className={cn(
                  'flex flex-row gap-3 text-sm list-none justify-center lg:justify-start'
                )}
                aria-label='Trust indicators'
              >
                {strings.hero.trustIndicators.map((indicator) => {
                  const Icon = indicator.icon
                  return (
                    <li
                      key={indicator.text}
                      className={cn('flex items-center gap-3')}
                    >
                      <Icon
                        className={cn('h-5 w-5 text-success shrink-0')}
                        aria-hidden='true'
                      />
                      <span className={cn('font-medium')}>
                        {indicator.text}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </header>

            {/* Right Visual */}
            <figure
              className={cn('animate-fade-in-up')}
              aria-label='Hero visual CV2.0'
            >
              <HeroVisual />
            </figure>
          </article>
        </div>
      </SectionWrapper>
      <ExplainerVideoPageSection id='explainer-video' hideCtaButtons />
    </>
  )
}
