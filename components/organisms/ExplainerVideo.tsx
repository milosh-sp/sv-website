'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Play } from 'lucide-react'
import { strings } from '@/lib/strings'
import { cn, muxPosterSrcSet } from '@/lib/utils'
import explainerVideo from '@/videos/explainer-skill-verdict.mp4'

// The player (hls.js + media-chrome) is only downloaded once the user clicks play
const VideoPlayer = dynamic(() =>
  import('@/components/atoms/VideoPlayer').then((mod) => mod.VideoPlayer)
)

const POSTER_WIDTHS = [640, 960, 1280, 1920] as const

export function ExplainerVideo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const { poster } = explainerVideo

  if (!isPlaying || !poster) {
    return (
      <button
        type='button'
        onClick={() => setIsPlaying(true)}
        aria-label={strings.explainerVideo.playVideo}
        className={cn('group relative block w-full cursor-pointer')}
      >
        {poster && (
          // biome-ignore lint/performance/noImgElement: static export has no image optimizer; Mux resizes via the srcSet width param
          <img
            src={poster}
            srcSet={muxPosterSrcSet(poster, POSTER_WIDTHS)}
            sizes='(min-width: 1280px) 1207px, 100vw'
            width={1920}
            height={1074}
            alt=''
            loading='lazy'
            decoding='async'
            className={cn('block aspect-161/90 w-full object-cover')}
          />
        )}
        <span
          className={cn(
            'absolute inset-0 flex items-center justify-center',
            'bg-black/10 transition-colors group-hover:bg-black/20'
          )}
          aria-hidden='true'
        >
          <span
            className={cn(
              'flex h-16 w-16 items-center justify-center rounded-full sm:h-20 sm:w-20',
              'bg-white/90 shadow-lg transition-transform group-hover:scale-110'
            )}
          >
            <Play
              className={cn(
                'ml-1 h-7 w-7 fill-current text-slate-900 sm:h-9 sm:w-9'
              )}
            />
          </span>
        </span>
      </button>
    )
  }

  return (
    <VideoPlayer
      src={explainerVideo}
      poster={poster}
      blurDataURL={explainerVideo.blurDataURL}
      controls
      autoPlay
      playsInline
      style={{
        width: '100%',
        aspectRatio: '161/90',
        outline: 'none',
      }}
    >
      <track
        kind='captions'
        src='/captions/explainer-skill-verdict.vtt'
        srcLang='en'
        label={strings.explainerVideo.captionsLabel}
      />
    </VideoPlayer>
  )
}
