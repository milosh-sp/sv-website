'use client'

import { AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { IconContainer } from '@/components/atoms/IconContainer'
import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types/Sections.types'
import { HeaderAndDescription } from '../molecules/HeaderAndDescription'
import { ProblemCard } from '../molecules/ProblemCard'
import { BulletList } from '../molecules/BulletList'

const PROBLEM_COLOR_SCHEME = {
  gradient: 'from-background to-muted/30',
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
          <ProblemCard
            icon={AlertCircle}
            title={strings.problem.s1.title}
            description={strings.problem.s1.description}
            colorScheme='destructive'
          >
            <BulletList items={strings.problem.s1.points} variant='disc' />
          </ProblemCard>

          {/* S2: Reliance on unverified signals */}
          <ProblemCard
            icon={ShieldCheck}
            title={strings.problem.s2.title}
            description={strings.problem.s2.description}
            colorScheme='destructive'
          >
            <BulletList items={strings.problem.s2.points} variant='disc' />
          </ProblemCard>
        </div>

        {/* Two Problems Section */}
        <div className='mt-20 grid gap-8 md:grid-cols-2 animate-fade-in-up'>
          {/* Problem #1 */}
          <ProblemCard
            icon={AlertCircle}
            title={strings.problem.problem1.title}
            description={strings.problem.problem1.description}
            variant='bordered'
            colorScheme='destructive'
            iconSize='md'
            showIconInline
          >
            <BulletList
              items={strings.problem.problem1.reasons}
              variant='custom'
              bulletColor='destructive'
              spacing='tight'
            />
          </ProblemCard>

          {/* Problem #2 */}
          <ProblemCard
            icon={ShieldCheck}
            title={strings.problem.problem2.title}
            description={strings.problem.problem2.description}
            variant='bordered'
            colorScheme='destructive'
            iconSize='md'
            showIconInline
          >
            <blockquote className='border-l-2 border-destructive pl-4 italic text-muted-foreground my-4'>
              {strings.problem.problem2.quote}
            </blockquote>
            <BulletList
              items={strings.problem.problem2.reasons}
              variant='custom'
              bulletColor='destructive'
              spacing='tight'
            />
          </ProblemCard>
        </div>

        {/* The Result Section */}
        <div className='mt-20 p-8 md:p-12 rounded-2xl bg-linear-to-br from-destructive/10 to-destructive/5 border border-destructive/20 animate-fade-in-up'>
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
                  <IconContainer
                    icon={AlertCircle}
                    size='sm'
                    colorScheme='destructive'
                  />
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
                  <IconContainer
                    icon={CheckCircle2}
                    size='sm'
                    colorScheme='success'
                  />
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
