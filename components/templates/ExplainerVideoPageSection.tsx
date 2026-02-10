import { SectionWrapper } from '@/components/templates/SectionWrapper'
import type { SectionProps } from '@/types/Sections.types'
import { strings } from '@/lib/strings'
import { HeaderAndDescription } from '../molecules/HeaderAndDescription'
import { HeroButtons } from '../molecules/HeroButtons'
import { VideoPlayer } from '../atoms/VideoPlayer'
import { cn } from '@/lib/utils'

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
          className={cn(
            'rounded-xl overflow-hidden w-full border-radius-[10px]'
          )}
        >
          <VideoPlayer
            poster={
              'https://image.mux.com/02DysWxqMAjYPRcNVZ7XBM01YV00h02JmN5N5J5021XPilRA/thumbnail.webp?time=38'
            }
            blurDataURL={
              'https://image.mux.com/02DysWxqMAjYPRcNVZ7XBM01YV00h02JmN5N5J5021XPilRA/thumbnail.webp?time=38&width=16&blur=100'
            }
            src={
              'https://stream.mux.com/02DysWxqMAjYPRcNVZ7XBM01YV00h02JmN5N5J5021XPilRA.m3u8'
            }
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
