import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { HeroButtons } from '@/components/molecules/HeroButtons'
import { HeroVisual } from '@/components/organisms/HeroVisual'
import { cn } from '@/lib/utils'
import type { PageHeroProps } from '@/types/PageHero.types'
import Link from 'next/link'

export function PageHero({
  headingId,
  descriptionId,
  mainHeading,
  mainHeadingHighlight,
  subHeading,
  callToAction,
  trustIndicators,
  accessibility,
  showHiringManager,
  showCandidate,
  showVerifier,
  secondaryPrompt,
  visual,
}: PageHeroProps) {
  return (
    <div className={cn('max-w-400 mx-auto px-4')}>
      <article
        className={cn(
          'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'
        )}
      >
        <header className={cn('animate-fade-in-up text-center lg:text-left')}>
          <hgroup
            className={cn('flex gap-4 mb-8 justify-center lg:justify-start')}
          >
            <div
              className={cn(
                'hidden lg:block w-1 bg-linear-to-b from-primary to-primary/60 rounded-full'
              )}
              aria-hidden='true'
            />
            <div>
              <Heading level={1} variant='display' id={headingId}>
                {mainHeading}
                <strong
                  className={cn(
                    'bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent'
                  )}
                >
                  {mainHeadingHighlight}
                </strong>
              </Heading>
            </div>
          </hgroup>

          <div
            className={cn('flex gap-4 mb-8 justify-center lg:justify-start')}
          >
            <div
              className={cn('hidden lg:block w-1 bg-success rounded-full')}
              aria-hidden='true'
            />
            <Text id={descriptionId} variant='body-large' pretty>
              {subHeading}
            </Text>
          </div>

          <aside
            className={cn('flex gap-4 mb-8 justify-center lg:justify-start')}
          >
            <div
              className={cn('hidden lg:block w-1 rounded-full bg-purple')}
              aria-hidden='true'
            />
            <Text variant='body' className='font-medium'>
              {callToAction}
            </Text>
          </aside>

          <nav
            className={cn(
              'mb-4 flex flex-col items-center lg:items-start gap-3'
            )}
            aria-label={accessibility.heroActions}
          >
            <HeroButtons
              showHiringManager={showHiringManager}
              showCandidate={showCandidate}
              showVerifier={showVerifier}
            />
          </nav>

          {secondaryPrompt && (
            <Text
              variant='body'
              className={cn('mb-12 text-center lg:text-left')}
            >
              {secondaryPrompt.prompt}{' '}
              <Link
                href={secondaryPrompt.href}
                className={cn(
                  'font-semibold text-primary hover:underline underline-offset-4'
                )}
              >
                {secondaryPrompt.linkText}
                <span aria-hidden='true'> &rarr;</span>
              </Link>
            </Text>
          )}

          <ul
            className={cn(
              'flex flex-row flex-wrap gap-3 text-sm list-none justify-center lg:justify-start',
              secondaryPrompt ? undefined : 'mt-8'
            )}
            aria-label={accessibility.trustIndicators}
          >
            {trustIndicators.map((indicator) => {
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
                  <span className={cn('font-medium')}>{indicator.text}</span>
                </li>
              )
            })}
          </ul>
        </header>

        <figure
          className={cn('animate-fade-in-up w-full')}
          aria-label={accessibility.heroVisual}
        >
          {visual ?? <HeroVisual />}
        </figure>
      </article>
    </div>
  )
}
