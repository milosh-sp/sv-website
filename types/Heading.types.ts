import type { ComponentProps } from 'react'

type HeadingLevel = 1 | 2 | 3 | 4 | 5

type HeadingVariant = 'display' | 'heading' | 'subheading'

type HeadingSize =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'

interface HeadingProps extends ComponentProps<'h1'> {
  /**
   * The heading level (1-5) which determines the semantic HTML element (h1-h4)
   * @default 1
   */
  level?: HeadingLevel

  /**
   * Visual variant for styling
   * - 'display': Large, bold headings for hero sections
   * - 'heading': Standard section headings
   * - 'subheading': Smaller, secondary headings
   * @default 'heading'
   */
  variant?: HeadingVariant

  /**
   * Size override for responsive sizing
   * If not provided, size is determined by level and variant
   */
  size?: HeadingSize

  /**
   * Additional CSS classes to merge with base styles
   */
  className?: string

  /**
   * The heading content
   */
  children: React.ReactNode
}

export type { HeadingProps, HeadingLevel, HeadingVariant, HeadingSize }
