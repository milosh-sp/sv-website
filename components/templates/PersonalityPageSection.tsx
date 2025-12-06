import { cn } from '@/lib/utils'
import { HeaderAndDescription } from '../molecules/HeaderAndDescription'
import { SectionWrapper } from './SectionWrapper'
import { strings } from '@/lib/strings'
import { Carousel } from '../atoms/Carousel'
import { BenefitCard } from '../organisms/BenefitCard'

export function PersonalityPageSection() {
  return (
    <SectionWrapper id='personality-cv' className={cn('py-16 bg-white')}>
      <HeaderAndDescription
        heading={strings.personalitySection.heading}
        description={strings.personalitySection.description}
      />
      <div className='container-wide'>
        <Carousel
          options={{ loop: true }}
          slides={strings.personalitySection.cardColumns.map((column) => ({
            id: column.title,
            element: (
              <BenefitCard
                benefit={column}
                colorScheme='companies'
                className={cn('w-3xl')}
              />
            ),
          }))}
        />
      </div>
    </SectionWrapper>
  )
}
