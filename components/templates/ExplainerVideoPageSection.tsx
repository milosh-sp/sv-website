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
            'rounded-xl overflow-hidden w-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3),0_20px_60px_-15px_rgba(0,0,0,0.3)] animate-fade-in-up'
          )}
        >
          <VideoPlayer
            playbackId='02DysWxqMAjYPRcNVZ7XBM01YV00h02JmN5N5J5021XPilRA'
            poster={
              'https://image.mux.com/02DysWxqMAjYPRcNVZ7XBM01YV00h02JmN5N5J5021XPilRA/thumbnail.webp?time=38'
            }
            blurDataURL={
              'data:image/webp;base64,UklGRqgAAABXRUJQVlA4IJwAAAAwAgCdASoQAAkAAQAcJQBOhgiIMnBdh20v2AD+/diAj/0yMomtUSWQiJM/0GAtSlC/g5I7/gtNNTt8K3LNeJHRZtd9at8blo3NabBjXRMTIhW2mnYmcy2PCRhMbY8+rIL9e/DP5+y/t1sB/gzP0PfvHh/z3NJ75MrLZ+6oMS7T5RzZN/ocD+38Zs4IHjfrfmFlc7HHx8qn+AAAAAA='
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
