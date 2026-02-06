'use client'

import { AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types/Sections.types'
import { HeaderAndDescription } from '../molecules/HeaderAndDescription'

const PROBLEM_COLOR_SCHEME = {
  iconBg: 'from-destructive/20 to-destructive/10',
  iconColor: 'text-destructive',
  gradient: 'from-background to-muted/30',
} as const

const _SOLUTION_COLOR_SCHEME = {
  iconBg: 'from-success/20 to-success/10',
  iconColor: 'text-success',
  gradient: 'from-background to-success/5',
} as const

export function ProblemSection({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      className={cn('p-5 md:p-15', PROBLEM_COLOR_SCHEME.gradient)}
      aria-labelledby='problem-heading'
    >
      <div className='container-wide'>
        {/* Problem Section Header */}
        <HeaderAndDescription
          heading={strings.problem.heading}
          headingHighlight={strings.problem.headingHighlight}
          description={strings.problem.description}
          highlightClassName='from-destructive to-destructive/60'
        />

        {/* Problem Content */}
        <div className='grid gap-12 lg:grid-cols-2 animate-fade-in-up'>
          {/* S1: Trust-based hiring */}
          <article className='space-y-6'>
            <div
              className={cn(
                'w-12 h-12 rounded-full flex items-center justify-center',
                PROBLEM_COLOR_SCHEME.iconBg
              )}
              aria-hidden='true'
            >
              <AlertCircle
                className={cn('h-6 w-6', PROBLEM_COLOR_SCHEME.iconColor)}
              />
            </div>
            <div className='space-y-4'>
              <Heading
                level={3}
                variant='subheading'
                size='md'
                className='font-semibold'
              >
                {strings.problem.s1.title}
              </Heading>
              <Text variant='body' pretty>
                {strings.problem.s1.description}
              </Text>
              <ul className='space-y-3 list-disc pl-5'>
                {strings.problem.s1.points.map((point) => (
                  <li key={point.id} className='text-muted-foreground'>
                    {point.text}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* S2: Reliance on unverified signals */}
          <article className='space-y-6'>
            <div
              className={cn(
                'w-12 h-12 rounded-full flex items-center justify-center',
                PROBLEM_COLOR_SCHEME.iconBg
              )}
              aria-hidden='true'
            >
              <ShieldCheck
                className={cn('h-6 w-6', PROBLEM_COLOR_SCHEME.iconColor)}
              />
            </div>
            <div className='space-y-4'>
              <Heading
                level={3}
                variant='subheading'
                size='md'
                className='font-semibold'
              >
                {strings.problem.s2.title}
              </Heading>
              <Text variant='body' pretty>
                {strings.problem.s2.description}
              </Text>
              <ul className='space-y-3 list-disc pl-5'>
                {strings.problem.s2.points.map((point) => (
                  <li key={point.id} className='text-muted-foreground'>
                    {point.text}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        {/* Two Problems Section */}
        <div className='mt-20 grid gap-8 md:grid-cols-2 animate-fade-in-up'>
          {/* Problem #1 */}
          <article className='space-y-6 p-6 rounded-2xl bg-destructive/5 border border-destructive/10'>
            <div className='flex items-center gap-3'>
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center shrink-0',
                  PROBLEM_COLOR_SCHEME.iconBg
                )}
                aria-hidden='true'
              >
                <AlertCircle
                  className={cn('h-5 w-5', PROBLEM_COLOR_SCHEME.iconColor)}
                />
              </div>
              <Heading
                level={3}
                variant='heading'
                size='md'
                className='font-semibold'
              >
                {strings.problem.problem1.title}
              </Heading>
            </div>
            <Text variant='body' pretty>
              {strings.problem.problem1.description}
            </Text>
            <ul className='space-y-2 list-none'>
              {strings.problem.problem1.reasons.map((reason) => (
                <li
                  key={reason.id}
                  className='flex items-start gap-2 text-muted-foreground'
                >
                  <span className='mt-1.5 text-destructive'>•</span>
                  <span>{reason.text}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Problem #2 */}
          <article className='space-y-6 p-6 rounded-2xl bg-destructive/5 border border-destructive/10'>
            <div className='flex items-center gap-3'>
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center shrink-0',
                  PROBLEM_COLOR_SCHEME.iconBg
                )}
                aria-hidden='true'
              >
                <ShieldCheck
                  className={cn('h-5 w-5', PROBLEM_COLOR_SCHEME.iconColor)}
                />
              </div>
              <Heading
                level={3}
                variant='heading'
                size='md'
                className='font-semibold'
              >
                {strings.problem.problem2.title}
              </Heading>
            </div>
            <Text variant='body' pretty>
              {strings.problem.problem2.description}
            </Text>
            <blockquote className='border-l-2 border-destructive pl-4 italic text-muted-foreground my-4'>
              {strings.problem.problem2.quote}
            </blockquote>
            <ul className='space-y-2 list-none'>
              {strings.problem.problem2.reasons.map((reason) => (
                <li
                  key={reason.id}
                  className='flex items-start gap-2 text-muted-foreground'
                >
                  <span className='mt-1.5 text-destructive'>•</span>
                  <span>{reason.text}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* The Result Section */}
        <div className='mt-20 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/20 animate-fade-in-up'>
          <div className='text-center max-w-3xl mx-auto'>
            <Heading level={2} variant='heading' size='lg' className='mb-6'>
              {strings.problem.result.title}
            </Heading>
            <Text variant='body' pretty className='mb-8'>
              {strings.problem.result.description}
            </Text>
            <div className='grid gap-6 md:grid-cols-2'>
              <div className='space-y-3'>
                <div className='flex items-center gap-2 justify-center md:justify-start'>
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center shrink-0',
                      'from-destructive/20 to-destructive/10 text-destructive'
                    )}
                    aria-hidden='true'
                  >
                    <AlertCircle className='h-4 w-4' />
                  </div>
                  <Heading
                    level={3}
                    variant='subheading'
                    size='md'
                    className='font-semibold'
                  >
                    {strings.problem.result.rewards.title}
                  </Heading>
                </div>
                <ul className='space-y-2 list-none'>
                  {strings.problem.result.rewards.items.map((item) => (
                    <li
                      key={item.id}
                      className='text-muted-foreground text-center md:text-left'
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='space-y-3'>
                <div className='flex items-center gap-2 justify-center md:justify-start'>
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center shrink-0',
                      'from-success/20 to-success/10 text-success'
                    )}
                    aria-hidden='true'
                  >
                    <CheckCircle2 className='h-4 w-4' />
                  </div>
                  <Heading
                    level={3}
                    variant='subheading'
                    size='md'
                    className='font-semibold'
                  >
                    {strings.problem.result.shouldReward.title}
                  </Heading>
                </div>
                <ul className='space-y-2 list-none'>
                  {strings.problem.result.shouldReward.items.map((item) => (
                    <li
                      key={item.id}
                      className='text-muted-foreground text-center md:text-left'
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
