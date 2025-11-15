import { cn } from '@/lib/utils'
import type { CVSectionProps } from '@/types/CVPreview.types'

export function CVSectionHeader({
  title,
  icon: Icon,
  children,
  className,
  ...props
}: CVSectionProps) {
  return (
    <section
      aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
      {...props}
    >
      <h3
        id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className={cn(
          'flex items-center gap-2 text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border',
          className
        )}
      >
        <Icon className='h-5 w-5' aria-hidden='true' />
        <span>{title}</span>
      </h3>
      {children}
    </section>
  )
}
