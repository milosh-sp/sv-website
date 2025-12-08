import type { ComponentProps, ReactNode } from 'react'

interface DotButtonProps extends ComponentProps<'button'> {
  children?: ReactNode
}

export function DotButton({ children, ...restProps }: DotButtonProps) {
  return (
    <button type='button' aria-label='Go to slide' {...restProps}>
      {children}
    </button>
  )
}
