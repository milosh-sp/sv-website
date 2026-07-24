import type { ComponentProps, ReactNode } from 'react'

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

type DotButtonProps = ComponentProps<'button'> & {
  children?: ReactNode
}

export type { DotButtonProps, UseDotButtonType }
