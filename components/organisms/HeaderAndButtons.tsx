import { HeaderAndDescription } from '@/components/molecules/HeaderAndDescription'
import { TwoSidesButtons } from '@/components/molecules/TwoSidesButtons'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { cn } from '@/lib/utils'
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
    <SectionWrapper
      id={sectionId}
      className={cn(
        'p-5 md:p-15 bg-linear-to-b from-background to-muted/50',
        className
      )}
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
    </SectionWrapper>
  )
}
