import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types/Sections.types'
import { AlertCircle } from 'lucide-react'
import { BulletList } from '../molecules/BulletList'
import { HeaderAndDescription } from '../molecules/HeaderAndDescription'
import { BlockQuote } from '../atoms/BlockQuote'
import { BenefitCard } from '../organisms/BenefitCard'

export function ProblemPageSection({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      className={cn('p-5 md:p-15')}
      aria-labelledby='problem-heading'
    >
      <div className='container-wide'>
        {/* Problem Section Header */}
        <HeaderAndDescription
          heading={strings.problem.heading}
          headingHighlight={strings.problem.headingHighlight}
          description={strings.problem.description}
          highlightClassName='from-warning to-destructive/60'
        />

        {/* Problem Content */}
        <div className='grid gap-12 lg:grid-cols-2 animate-fade-in-up'>
          {/* S1: Trust-based hiring */}
          <BenefitCard
            benefit={{
              icon: AlertCircle,
              title: strings.problem.s1.title,
              description: strings.problem.s1.description,
            }}
            colorScheme='warning'
            disableInteractive
          >
            <BulletList
              spacing='tight'
              items={strings.problem.s1.points}
              variant='disc'
            />
          </BenefitCard>

          {/* S2: Reliance on unverified signals */}
          <BenefitCard
            benefit={{
              icon: AlertCircle,
              title: strings.problem.s2.title,
              description: strings.problem.s2.description,
            }}
            colorScheme='warning'
            disableInteractive
          >
            <BulletList
              spacing='tight'
              items={strings.problem.s2.points}
              variant='disc'
            />
          </BenefitCard>
        </div>

        {/* Two Problems Section */}
        <div className='mt-20 grid gap-8 md:grid-cols-2 animate-fade-in-up'>
          {/* Problem #1 */}
          <BenefitCard
            benefit={{
              icon: AlertCircle,
              title: strings.problem.problem1.title,
              description: strings.problem.problem1.description,
            }}
            colorScheme='warning'
            className='border-warning bg-warning/5'
          >
            <BulletList
              items={strings.problem.problem1.reasons}
              variant='custom'
              bulletColor='warning'
              spacing='tight'
            />
          </BenefitCard>

          {/* Problem #2 */}
          <BenefitCard
            benefit={{
              icon: AlertCircle,
              title: strings.problem.problem2.title,
              description: strings.problem.problem2.description,
            }}
            colorScheme='warning'
            className='border-warning bg-warning/5'
          >
            <BlockQuote colorScheme='warning'>
              {strings.problem.problem2.quote}
            </BlockQuote>
            <BulletList
              items={strings.problem.problem2.reasons}
              variant='custom'
              bulletColor='warning'
              spacing='tight'
            />
          </BenefitCard>
        </div>
      </div>
    </SectionWrapper>
  )
}
