import { cn } from '@/lib/utils'
import type { SectionWrapperProps } from '@/types/SectionWrapper.types'

export function SectionWrapper({
  id,
  children,
  className,
  ...props
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn('section-padding', className)} {...props}>
      {children}
    </section>
  )
}
