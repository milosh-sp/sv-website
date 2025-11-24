import type { ComponentProps } from 'react'

type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'verdict'
  | 'hero-emerald'
  | 'hero-blue'
  | 'companies'
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export type { ButtonProps, ButtonVariant, ButtonSize }
