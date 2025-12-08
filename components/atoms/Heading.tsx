import { cn } from '@/lib/utils'
import type { HeadingProps } from '@/types/Heading.types'

const VARIANT_STYLES = {
  display: {
    sm: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
    md: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
    lg: 'text-5xl md:text-6xl lg:text-7xl font-bold leading-tight',
    xl: 'text-6xl md:text-7xl lg:text-8xl font-bold leading-tight',
  },
  heading: {
    sm: 'text-lg md:text-xl lg:text-2xl font-semibold leading-tight',
    md: 'text-xl md:text-2xl lg:text-3xl font-semibold leading-tight',
    lg: 'text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight',
    xl: 'text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight',
  },
  subheading: {
    sm: 'text-base md:text-lg font-medium leading-snug',
    md: 'text-lg md:text-xl font-medium leading-snug',
    lg: 'text-xl md:text-2xl font-medium leading-snug',
    xl: 'text-2xl md:text-3xl font-medium leading-snug',
  },
} as const

const LEVEL_TO_SIZE = {
  1: 'md',
  2: 'lg',
  3: 'md',
  4: 'sm',
  5: 'sm',
} as const

export function Heading({
  level = 1,
  variant = 'heading',
  size,
  className,
  children,
  ...props
}: HeadingProps) {
  const HeadingElement = `h${level}` as const

  const computedSize = size || LEVEL_TO_SIZE[level]
  const variantStyles =
    VARIANT_STYLES[variant][
      computedSize as keyof (typeof VARIANT_STYLES)[typeof variant]
    ]

  const baseStyles = cn(
    'font-[Inter] text-foreground',
    variantStyles,
    className
  )

  return (
    <HeadingElement className={baseStyles} {...props}>
      {children}
    </HeadingElement>
  )
}
