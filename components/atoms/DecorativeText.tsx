import { cn } from '@/lib/utils'
import type { DecorativeTextProps } from '@/types/DecorativeText.types'

export function DecorativeText({
  text,
  className,
  ...props
}: DecorativeTextProps) {
  return (
    <span
      className={cn(
        'text-2xl font-bold',
        'bg-linear-to-r from-primary to-primary/80',
        'bg-clip-text text-transparent',
        className
      )}
      {...props}
    >
      {text}
    </span>
  )
}
