import { SectionWrapper } from '@/components/templates/SectionWrapper'
import type { SectionProps } from '@/types/Sections.types'
import { strings } from '@/lib/strings'
import { HeaderAndDescription } from '../molecules/HeaderAndDescription'
import { HeroButtons } from '../molecules/HeroButtons'
import { VideoPlayer } from '../atoms/VideoPlayer'
import videoSrc from '@/videos/explainer-skill-verdict.mp4'

export function ExplainerVideoPageSection({
  id,
  hideCtaButtons,
}: SectionProps) {
  const { heading, headingHighlight } = strings.explainerVideo

  return (
    <SectionWrapper
      id={id}
      className='py-20'
      aria-labelledby='explainer-video-heading'
    >
      <div className='container-wide'>
        <HeaderAndDescription
          heading={heading}
          headingHighlight={headingHighlight}
        />

        <div
          style={{
            borderRadius: '10px',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <VideoPlayer
            poster={videoSrc.poster}
            blurDataURL={videoSrc.blurDataURL}
            src={videoSrc}
            controls
            playsInline
            style={{
              width: '100%',
              aspectRatio: '161/90',
              outline: 'none',
            }}
          />
        </div>
      </div>
      <div className='flex justify-center align-center mt-10 animate-fade-in-up'>
        {!hideCtaButtons && (
          <HeroButtons showHiringManager showCandidate showVerifier />
        )}
      </div>
    </SectionWrapper>
  )
}
