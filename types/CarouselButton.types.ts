import type { ComponentProps, ReactNode } from 'react'

type CarouselButtonDirection = 'prev' | 'next'

interface CarouselButtonProps extends ComponentProps<'button'> {
  direction: CarouselButtonDirection
  children: ReactNode
}

export type { CarouselButtonProps, CarouselButtonDirection }
