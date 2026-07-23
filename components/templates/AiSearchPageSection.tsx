import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { Button } from '@/components/atoms/Button'
import { IconContainer } from '@/components/atoms/IconContainer'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types/Sections.types'
import { Sparkles, UserCheck } from 'lucide-react'
import Link from 'next/link'

export function AiSearchPageSection({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      className={cn('bg-white py-16 md:py-24')}
      aria-labelledby='ai-search-heading'
      aria-label={strings.aiSearch.accessibility.section}
    >
      <div
        className={cn(
          'container-wide grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16'
        )}
      >
        <div className={cn('animate-fade-in-up')}>
          <Text
            variant='caption'
            className={cn(
              'mb-3 font-semibold uppercase tracking-widest text-companies'
            )}
          >
            {strings.aiSearch.eyebrow}
          </Text>

          <Heading level={2} size='lg' variant='heading' id='ai-search-heading'>
            {strings.aiSearch.heading}
            <span
              className={cn(
                'bg-linear-to-r from-companies to-companies/60 bg-clip-text text-transparent'
              )}
            >
              {strings.aiSearch.headingHighlight}
            </span>
          </Heading>

          <Text
            variant='body-large'
            className={cn('mt-5 text-muted-foreground')}
            pretty
          >
            {strings.aiSearch.description}
          </Text>

          <p
            className={cn(
              'mt-4 flex items-center gap-2 text-base font-semibold text-foreground'
            )}
          >
            <UserCheck
              className={cn('h-5 w-5 text-companies')}
              aria-hidden='true'
            />
            {strings.aiSearch.humanFirst}
          </p>

          <ul className={cn('mt-8 flex flex-col gap-5 list-none')}>
            {strings.aiSearch.points.map((point) => {
              const Icon = point.icon
              return (
                <li key={point.title} className={cn('flex items-start gap-4')}>
                  <IconContainer icon={Icon} size='md' colorScheme='primary' />
                  <div>
                    <Text variant='body' className={cn('font-semibold')}>
                      {point.title}
                    </Text>
                    <Text variant='caption'>{point.description}</Text>
                  </div>
                </li>
              )
            })}
          </ul>

          <Link href='/hiring-manager' className={cn('mt-8 inline-block')}>
            <Button variant='companies' size='lg' className={cn('h-12 px-8')}>
              {strings.aiSearch.cta}
            </Button>
          </Link>
        </div>

        <figure
          className={cn(
            'animate-fade-in-up rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-xl'
          )}
          aria-label={strings.aiSearch.accessibility.inputMock}
        >
          <div
            className={cn(
              'flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3'
            )}
          >
            <Sparkles
              className={cn('h-5 w-5 text-companies')}
              aria-hidden='true'
            />
            <span className={cn('text-sm text-muted-foreground')}>
              {strings.aiSearch.placeholder}
            </span>
          </div>

          <div className={cn('mt-4 flex flex-col gap-3')} aria-hidden='true'>
            {[92, 88, 84].map((match, index) => (
              <div
                key={match}
                className={cn(
                  'flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3'
                )}
              >
                <div
                  className={cn(
                    'h-9 w-9 shrink-0 rounded-full bg-companies/15'
                  )}
                />
                <div className={cn('flex-1')}>
                  <div
                    className={cn('h-2.5 w-1/2 rounded-full bg-slate-200')}
                    style={{ width: `${60 - index * 8}%` }}
                  />
                  <div
                    className={cn('mt-2 h-2 w-1/3 rounded-full bg-slate-100')}
                  />
                </div>
                <span
                  className={cn(
                    'rounded-full bg-success/15 px-2.5 py-1 text-xs font-semibold text-success'
                  )}
                >
                  {match}% match
                </span>
              </div>
            ))}
          </div>
        </figure>
      </div>
    </SectionWrapper>
  )
}
