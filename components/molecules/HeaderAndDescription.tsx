import { cn } from '@/lib/utils'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import type { HeaderAndDescriptionProps } from '@/types/HeaderAndDescription.types'

export function HeaderAndDescription({
  heading,
  headingHighlight,
  description,
  className,
  headingClassName,
  descriptionClassName,
  highlightClassName,
}: HeaderAndDescriptionProps) {
  const headingId = `heading-${heading.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <header className={cn('text-center mb-16 animate-fade-in-up', className)}>
      <Heading
        level={2}
        size='lg'
        variant='heading'
        id={headingId}
        className={cn('mb-6', headingClassName)}
      >
        {heading}
        {headingHighlight && (
          <span
            className={cn(
              'ml-1.5 bg-linear-to-r from-companies to-companies/60 bg-clip-text text-transparent',
              highlightClassName
            )}
          >
            {headingHighlight}
          </span>
        )}
      </Heading>
      <Text
        size='lg'
        className={cn(
          'text-muted-foreground mx-auto max-w-4xl',
          descriptionClassName
        )}
        pretty
        aria-describedby={headingId}
      >
        {description}
      </Text>
    </header>
  )
}
