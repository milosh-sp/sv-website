import { cn } from '@/lib/utils'
import type { PageHeaderProps } from '@/types/PageHeader.types'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'

/**
 * Reusable page header component for waitlist form pages
 * Provides consistent styling and semantic HTML structure
 */
export function PageHeader({
  title,
  description,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <header className={cn('text-center mb-12', className)} {...props}>
      <Heading level={1} variant='heading' size='lg' className='mb-4'>
        {title}
      </Heading>
      <Text
        variant='body-large'
        className='text-muted-foreground max-w-2xl mx-auto'
      >
        {description}
      </Text>
    </header>
  )
}
