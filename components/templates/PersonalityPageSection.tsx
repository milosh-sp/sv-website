import { cn } from '@/lib/utils'
import { HeaderAndDescription } from '@/components/molecules/HeaderAndDescription'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { strings } from '@/lib/strings'
import { Carousel } from '@/components/organisms/Carousel'
import { BenefitCard } from '@/components/molecules/BenefitCard'

export function PersonalityPageSection() {
  return (
    <SectionWrapper id='personality-cv' className={cn('py-16 bg-white')}>
      <HeaderAndDescription
        heading={strings.personalitySection.heading}
        description={strings.personalitySection.description}
      />
      <div className='container-wide'>
        <Carousel
          // I don't know in what the duration is measured in, kilos? tons? miles?
          options={{ loop: true, duration: 15 }}
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
