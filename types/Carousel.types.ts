import type useEmblaCarousel from 'embla-carousel-react'
import type { ComponentProps, ReactNode } from 'react'

interface CarouselProps extends ComponentProps<'section'> {
  slides: {
    id: string
    element: ReactNode
  }[]
  options?: Parameters<typeof useEmblaCarousel>[0]
  controlColor?: 'companies' | 'success'
}

export type { CarouselProps }
