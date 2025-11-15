import { cn } from '@/lib/utils'
import type { PageHeaderProps } from '@/types/PageHeader.types'

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
      <h1 className='text-display-2 font-bold text-foreground mb-4'>{title}</h1>
      <p className='text-body-large text-muted-foreground max-w-2xl mx-auto'>
        {description}
      </p>
    </header>
  )
}
