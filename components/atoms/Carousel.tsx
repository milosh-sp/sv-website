'use client'

import useEmblaCarousel from 'embla-carousel-react'
import type { ReactNode } from 'react'
import { CarouselButton } from './CarouselButton'
import { usePrevNextButtons } from '@/hooks/usePrevNextButtons'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Carousel({
  slides,
  options,
}: {
  slides: {
    id: string
    element: ReactNode
  }[]
  options?: Parameters<typeof useEmblaCarousel>[0]
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <section className='embla' ref={emblaRef}>
      <div className='embla__container'>
        {slides.map((slide) => (
          <div className='embla__slide' key={slide.id}>
            {slide.element}
          </div>
        ))}
      </div>

      <div className='embla__controls'>
        <div className='embla__buttons'>
          <CarouselButton
            direction='prev'
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          >
            <ChevronLeft
              className={cn(
                `h-15 w-15 ${prevBtnDisabled ? 'text-slate-300' : 'text-slate-700'}`
              )}
            />
          </CarouselButton>
          <CarouselButton
            direction='next'
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          >
            <ChevronRight
              className={cn(
                `h-15 w-15 ${nextBtnDisabled ? 'text-slate-300' : 'text-slate-700'}`
              )}
            />
          </CarouselButton>
        </div>
      </div>
    </section>
  )
}
