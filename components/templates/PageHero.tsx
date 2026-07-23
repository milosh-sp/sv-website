import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { HeroButtons } from '@/components/molecules/HeroButtons'
import { HeroVisual } from '@/components/organisms/HeroVisual'
import { cn } from '@/lib/utils'
import type { PageHeroAudience, PageHeroProps } from '@/types/PageHero.types'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const AUDIENCE_THEME: Record<
  PageHeroAudience,
  { highlight: string; bar: string; eyebrow: string }
> = {
  companies: {
    highlight: 'from-companies to-companies/60',
    bar: 'bg-linear-to-b from-companies to-companies/60',
    eyebrow: 'text-companies',
  },
  talent: {
    highlight: 'from-success to-success/60',
    bar: 'bg-linear-to-b from-success to-success/60',
    eyebrow: 'text-success',
  },
}

export function PageHero({
  audience,
  eyebrow,
  headingId,
  descriptionId,
  mainHeading,
  mainHeadingHighlight,
  subHeading,
  callToAction,
  ctaBadge,
  trustIndicators,
  accessibility,
  showHiringManager,
  showCandidate,
  showVerifier,
  secondaryPrompt,
}: PageHeroProps) {
  const theme = AUDIENCE_THEME[audience]

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
              className={cn('hidden lg:block w-1 rounded-full', theme.bar)}
              aria-hidden='true'
            />
            <div>
              <Text
                variant='caption'
                className={cn(
                  'mb-3 font-semibold uppercase tracking-widest',
                  theme.eyebrow
                )}
              >
                {eyebrow}
              </Text>
              <Heading level={1} variant='display' id={headingId}>
                {mainHeading}
                <strong
                  className={cn(
                    'bg-linear-to-r bg-clip-text text-transparent',
                    theme.highlight
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

            {ctaBadge && (
              <span
                className={cn(
                  '-mt-6 inline-flex items-center gap-2 self-center lg:self-start rounded-full',
                  'bg-companies/10 px-4 py-1.5 text-sm font-semibold text-companies'
                )}
              >
                <span
                  className={cn('h-2 w-2 rounded-full bg-companies')}
                  aria-hidden='true'
                />
                {ctaBadge}
              </span>
            )}
          </nav>

          {secondaryPrompt && (
            <Text
              variant='body'
              className={cn(
                'mb-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 lg:justify-start'
              )}
            >
              {secondaryPrompt.prompt}{' '}
              <Link
                href={secondaryPrompt.href}
                className={cn(
                  'group inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10',
                  'px-4 py-1.5 font-semibold text-success shadow-sm transition-all',
                  'hover:border-success/50 hover:bg-success/15 hover:shadow-md',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success/50'
                )}
              >
                {secondaryPrompt.linkText}
                <ArrowRight
                  className={cn(
                    'h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1'
                  )}
                  aria-hidden='true'
                />
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
                    className={cn('h-5 w-5 text-purple shrink-0')}
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
          <HeroVisual />
        </figure>
      </article>
    </div>
  )
}
