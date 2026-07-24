'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { CarouselButton } from '@/components/atoms/CarouselButton'
import { usePrevNextButtons } from '@/hooks/usePrevNextButtons'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { DotButton } from '@/components/atoms/DotButton'
import { useDotButton } from '@/hooks/useDotButtons'
import type { CarouselProps } from '@/types/Carousel.types'

export function Carousel({
  slides,
  options,
  controlColor = 'companies',
  ...props
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const activeControlColor =
    controlColor === 'success' ? 'text-success' : 'text-companies'

  return (
    <section className='embla' ref={emblaRef} {...props}>
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
                `h-10 w-10 ${prevBtnDisabled ? 'text-slate-300' : activeControlColor}`
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
                `h-10 w-10 ${nextBtnDisabled ? 'text-slate-300' : activeControlColor}`
              )}
            />
          </CarouselButton>
        </div>
        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => {
            const dotId = `dot-${index}`
            const isSelected = index === selectedIndex

            return (
              <DotButton
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isSelected ? 'true' : 'false'}
                aria-pressed={isSelected}
                key={dotId}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  isSelected ? ' embla__dot--selected' : ''
                )}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
