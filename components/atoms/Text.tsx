import { cn } from '@/lib/utils'
import type { TextProps } from '@/types/Text.types'

const VARIANT_STYLES = {
  body: 'text-base leading-relaxed',
  'body-large': 'text-lg md:text-xl leading-relaxed',
  caption: 'text-sm text-muted-foreground',
  muted: 'text-base leading-relaxed text-muted-foreground text-foreground',
} as const

const SIZE_STYLES = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
} as const

export function Text({
  variant = 'body',
  size,
  className,
  pretty = false,
  children,
  ...props
}: TextProps) {
  const variantStyles = VARIANT_STYLES[variant]
  const sizeOverride = size ? SIZE_STYLES[size] : ''

  const baseStyles = cn(
    variantStyles,
    sizeOverride,
    pretty && 'text-pretty',
    className
  )

  return (
    <p className={baseStyles} {...props}>
      {children}
    </p>
  )
}
