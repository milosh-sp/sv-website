import { cn } from '@/lib/utils'
import type { SectionHeaderProps } from '@/types/HeaderAndDescription.types'

export function HeaderAndDescription({
  heading,
  headingHighlight,
  description,
  className,
  headingClassName,
  descriptionClassName,
  highlightClassName,
}: SectionHeaderProps) {
  const headingId = `heading-${heading.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <header className={cn('text-center mb-16 animate-fade-in-up', className)}>
      <h2
        id={headingId}
        className={cn(
          'text-3xl md:text-4xl font-bold text-gray-800 mb-6',
          headingClassName
        )}
      >
        {heading}
        {headingHighlight && (
          <span
            className={cn(
              'ml-1.5 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent',
              highlightClassName
            )}
          >
            {headingHighlight}
          </span>
        )}
      </h2>
      <p
        className={cn(
          'text-body-large text-slate-600 mx-auto text-pretty leading-relaxed max-w-4xl',
          descriptionClassName
        )}
        aria-describedby={headingId}
      >
        {description}
      </p>
    </header>
  )
}
