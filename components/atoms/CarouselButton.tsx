import type { ComponentProps, ReactNode } from 'react'

type CarouselButtonDirection = 'prev' | 'next'

interface CarouselButtonProps extends ComponentProps<'button'> {
  direction: CarouselButtonDirection
  children: ReactNode
}

export function CarouselButton({
  direction,
  children,
  ...props
}: CarouselButtonProps) {
  return (
    <button
      className={`embla__button embla__button--${direction}`}
      type='button'
      aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} slide`}
      {...props}
    >
      {children}
    </button>
  )
}
