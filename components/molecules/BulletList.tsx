import { cn } from '@/lib/utils'
import type { BulletListProps } from '@/types/BulletList.types'

const SPACING_STYLES = {
  tight: 'space-y-2',
  normal: 'space-y-3',
  relaxed: 'space-y-4',
} as const

const BULLET_COLORS = {
  destructive: 'text-destructive',
  success: 'text-success',
  primary: 'text-primary',
  warning: 'text-warning',
} as const

export function BulletList({
  items,
  variant = 'disc',
  bulletColor = 'destructive',
  spacing = 'normal',
  className,
  ...props
}: BulletListProps) {
  const spacingClass = SPACING_STYLES[spacing]
  const bulletColorClass = BULLET_COLORS[bulletColor]

  if (variant === 'disc') {
    return (
      <ul className={cn(spacingClass, 'list-disc pl-5', className)} {...props}>
        {items.map((item) => (
          <li key={item.id} className='text-muted-foreground'>
            {item.text}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className={cn(spacingClass, 'list-none', className)} {...props}>
      {items.map((item) => (
        <li
          key={item.id}
          className='flex items-start gap-2 text-muted-foreground'
        >
          <span className={cn('mt-1.5', bulletColorClass)}>•</span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  )
}

