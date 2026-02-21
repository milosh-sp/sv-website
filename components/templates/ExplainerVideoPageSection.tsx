import { SectionWrapper } from '@/components/templates/SectionWrapper'
import type { SectionProps } from '@/types/Sections.types'
import { strings } from '@/lib/strings'
import { HeaderAndDescription } from '../molecules/HeaderAndDescription'
import { HeroButtons } from '../molecules/HeroButtons'
import { VideoPlayer } from '../atoms/VideoPlayer'
import { cn, secondsToISODuration } from '@/lib/utils'
import explainerVideo from '@/videos/explainer-skill-verdict.mp4'
import videoMetadata from '@/videos/explainer-skill-verdict.mp4.json'
import Script from 'next/script'
import { generateVideoSchema } from '@/lib/seo'

export function ExplainerVideoPageSection({
  id,
  hideCtaButtons,
}: SectionProps) {
  const { heading, headingHighlight } = strings.explainerVideo

  console.log(secondsToISODuration(videoMetadata.duration))

  return (
    <SectionWrapper
      id={id}
      className='py-20'
      aria-labelledby='explainer-video-heading'
    >
      <Script
        type='application/ld+json'
        /* biome-ignore lint/security/noDangerouslySetInnerHtml: Web schemas require dynamic content for structured data */
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateVideoSchema({
              name: videoMetadata.title,
              description: videoMetadata.description,
              thumbnailUrl: [videoMetadata.poster],
              uploadDate: new Date(videoMetadata.createdAt).toISOString(),
              duration: videoMetadata.duration
                ? secondsToISODuration(videoMetadata.duration)
                : undefined,
              contentUrl: videoMetadata.sources?.[0]?.src,
              embedUrl: videoMetadata.sources?.[0]?.src,
            })
          ),
        }}
      />
      <div className='container-wide'>
        <HeaderAndDescription
          heading={heading}
          headingHighlight={headingHighlight}
        />

        <div
          className={cn(
            'rounded-xl overflow-hidden w-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3),0_20px_60px_-15px_rgba(0,0,0,0.3)] anime-fade-in-up'
          )}
        >
          <VideoPlayer
            src={explainerVideo}
            poster={explainerVideo.poster}
            blurDataURL={explainerVideo.blurDataURL}
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
