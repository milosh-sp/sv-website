import { cn } from '@/lib/utils'
import type { BlockQuoteProps } from '@/types/BlockQuote.types'

export function BlockQuote({
  children,
  className,
  colorScheme,
  ...props
}: BlockQuoteProps) {
  return (
    <blockquote
      className={cn(
        'border-l-2 pl-4 italic text-muted-foreground my-4',
        colorScheme === 'destructive' && 'border-destructive',
        colorScheme === 'success' && 'border-success',
        colorScheme === 'primary' && 'border-primary',
        colorScheme === 'warning' && 'border-warning',
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  )
}
