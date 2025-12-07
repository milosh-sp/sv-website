import type { CarouselButtonProps } from '@/types/CarouselButton.types'

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
