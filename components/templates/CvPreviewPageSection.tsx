import { CV2TeaserPreview } from '@/components/molecules/CV2TeaserPreview'
import { PageHero } from '@/components/templates/PageHero'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types/Sections.types'

export function CvPreviewPageSection({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      className={cn(
        'flex justify-center bg-linear-to-b from-accent to-accent/50 py-16 md:py-24 overflow-hidden'
      )}
      aria-labelledby='cv-preview-hero-heading'
      aria-describedby='cv-preview-hero-description'
    >
      <PageHero
        headingId='cv-preview-hero-heading'
        descriptionId='cv-preview-hero-description'
        mainHeading={strings.cvPreview.heroHeading}
        mainHeadingHighlight={strings.cvPreview.heroHeadingHighlight}
        subHeading={strings.cvPreview.heroSubheading}
        callToAction={strings.cvPreview.callToAction}
        trustIndicators={strings.cvPreview.trustIndicators}
        accessibility={{
          heroActions: strings.cvPreview.accessibility.heroActions,
          trustIndicators: strings.cvPreview.accessibility.trustIndicators,
          heroVisual: strings.cvPreview.accessibility.heroVisual,
        }}
        showCandidate
        showVerifier
        visual={<CV2TeaserPreview showVerificationHistory />}
      />
    </SectionWrapper>
  )
}
