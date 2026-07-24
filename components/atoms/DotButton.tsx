import type { DotButtonProps } from '@/types/DotButton.types'
import { strings } from '@/lib/strings'

export function DotButton({ children, ...restProps }: DotButtonProps) {
  return (
    <button
      type='button'
      aria-label={strings.common.accessibility.goToSlide}
      {...restProps}
    >
      {children}
    </button>
  )
}
