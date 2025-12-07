'use client'

import useEmblaCarousel from 'embla-carousel-react'
import type { ReactNode } from 'react'
import { CarouselButton } from '@/components/atoms/CarouselButton'
import { usePrevNextButtons } from '@/hooks/usePrevNextButtons'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { DotButton } from '@/components/atoms/DotButton'
import { useDotButton } from '@/hooks/useDotButtons'

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

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

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
                `h-10 w-10 ${prevBtnDisabled ? 'text-slate-300' : 'text-primary'}`
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
                `h-10 w-10 ${nextBtnDisabled ? 'text-slate-300' : 'text-primary'}`
              )}
            />
          </CarouselButton>
        </div>
        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => {
            const dotId = `dot-${index}`
            return (
              <DotButton
                key={dotId}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
