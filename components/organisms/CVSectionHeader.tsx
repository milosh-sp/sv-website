import { cn } from '@/lib/utils'
import type { CVSectionProps } from '@/types/CVPreview.types'
import { Heading } from '@/components/atoms/Heading'

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
      <div
        className={cn(
          'flex items-center gap-2 mb-4 pb-2 border-b border-border',
          className
        )}
      >
        <Icon className='h-5 w-5' aria-hidden='true' />
        <Heading
          level={3}
          variant='subheading'
          size='md'
          id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className='mb-0'
        >
          {title}
        </Heading>
      </div>
      {children}
    </section>
  )
}
