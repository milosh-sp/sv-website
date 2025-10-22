import { cn } from '@/lib/utils'
import { HeaderAndDescription } from './HeaderAndDescription'
import { TwoSidesButtons } from './TwoSidesButtons'
import type { HeaderAndButtonsProps } from '@/types/HeaderAndButtons.types'

export function HeaderAndButtons({
  heading,
  headingHighlight,
  description,
  children,
  sectionId,
  ariaLabel,
  className,
  activeTab,
  onTabChange,
  ...props
}: HeaderAndButtonsProps) {
  return (
    <section
      className={cn(
        'p-5 md:p-15 bg-gradient-to-b from-white to-slate-50/50',
        className
      )}
      id={sectionId}
      aria-label={ariaLabel}
      {...props}
    >
      <div className='container-wide'>
        <HeaderAndDescription
          heading={heading}
          headingHighlight={headingHighlight}
          description={description}
        />
        <TwoSidesButtons activeTab={activeTab} onTabChange={onTabChange} />
        {children}
      </div>
    </section>
  )
}
