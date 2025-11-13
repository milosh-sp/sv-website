import { HeaderAndDescription } from '@/components/molecules/HeaderAndDescription'
import { CvFeaturesList } from '@/components/organisms/CvFeaturesList'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { strings } from '@/lib/strings'
import type { SectionProps } from '@/types/Sections.types'
import { CVPreviewBody } from '../organisms/CVPreviewBody'

export function CvPreviewPageSection({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      className='py-20 bg-white'
      aria-labelledby='cv-preview-heading'
    >
      <div className='container mx-auto px-4'>
        <HeaderAndDescription
          heading={strings.cvPreview.heading}
          description={strings.cvPreview.description}
          className='mb-12'
          id='cv-preview-heading'
        />
        <p
          className='text-sm text-gray-500 max-w-3xl mx-auto text-center mb-12'
          role='note'
          aria-label='CV preview disclaimer'
        >
          {strings.cvPreview.note}
        </p>

        <CVPreviewBody />

        <CvFeaturesList />
      </div>
    </SectionWrapper>
  )
}
