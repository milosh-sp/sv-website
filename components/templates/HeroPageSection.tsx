import { strings } from '@/lib/strings'
import { TALENT_PATH } from '@/lib/navigationData'
import { PageHero } from '@/components/templates/PageHero'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types/Sections.types'
import { ExplainerVideoPageSection } from './ExplainerVideoPageSection'

export function HeroPageSection({ id }: SectionProps) {
  return (
    <>
      <SectionWrapper
        id={id}
        className={cn(
          'flex justify-center bg-linear-to-b from-companies/12 via-accent/40 to-background py-16 md:py-24'
        )}
        aria-labelledby='hero-heading'
        aria-describedby='hero-description'
      >
        <PageHero
          audience='companies'
          eyebrow={strings.hero.eyebrow}
          headingId='hero-heading'
          descriptionId='hero-description'
          mainHeading={strings.hero.mainHeading}
          mainHeadingHighlight={strings.hero.mainHeadingHighlight}
          subHeading={strings.hero.subHeading}
          callToAction={strings.hero.callToAction}
          trustIndicators={strings.hero.trustIndicators}
          accessibility={{
            heroActions: strings.hero.accessibility.heroActions,
            trustIndicators: strings.hero.accessibility.trustIndicators,
            heroVisual: strings.hero.accessibility.heroVisual,
          }}
          showHiringManager
          secondaryPrompt={{
            prompt: strings.hero.talentPrompt,
            linkText: strings.hero.talentLinkText,
            href: TALENT_PATH,
          }}
        />
      </SectionWrapper>
      <ExplainerVideoPageSection id='explainer-video' hideCtaButtons />
    </>
  )
}
