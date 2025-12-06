import { cn } from '@/lib/utils'
import { HeaderAndDescription } from '../molecules/HeaderAndDescription'
import { SectionWrapper } from './SectionWrapper'
import { strings } from '@/lib/strings'
import { BenefitCards } from '../organisms/BenefitCards'

export function PersonalityPageSection() {
  return (
    <SectionWrapper id='personality-cv' className={cn('py-16 bg-white')}>
      <HeaderAndDescription
        heading={strings.personalitySection.heading}
        description={strings.personalitySection.description}
      />
      <div className='container-wide'>
        <BenefitCards
          benefits={strings.personalitySection.cardColumns}
          colorScheme='companies'
        />
      </div>
    </SectionWrapper>
  )
}
