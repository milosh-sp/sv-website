'use client'

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { HeaderAndDescription } from './HeaderAndDescription'
import { TwoSidesButtons } from './TwoSidesButtons'

/**
 * Tab type for user role selection
 */
type TabType = 'candidate' | 'vetter'

/**
 * Props interface for HeaderAndButtons component
 * Follows Interface Segregation Principle - minimal, focused interface
 */
interface HeaderAndButtonsProps {
  /** Section heading text */
  heading: string
  /** Optional highlighted portion of heading */
  headingHighlight?: string
  /** Section description text */
  description: string
  /** Content to render below the buttons */
  children: ReactNode
  /** Optional section ID for anchor links */
  sectionId?: string
  /** Optional aria-label for accessibility */
  ariaLabel?: string
  /** Optional CSS class name for section */
  className?: string
  /** Optional CSS class name for content container */
  contentClassName?: string
  /** Currently active tab */
  activeTab: TabType
  /** Callback when tab changes */
  onTabChange: (tab: TabType) => void
}

export function HeaderAndButtons({
  heading,
  headingHighlight,
  description,
  children,
  sectionId,
  ariaLabel,
  className,
  contentClassName,
  activeTab,
  onTabChange,
}: HeaderAndButtonsProps) {
  return (
    <section
      className={cn(
        'p-15 bg-gradient-to-b from-white to-slate-50/50',
        className
      )}
      id={sectionId}
      aria-label={ariaLabel}
    >
      <div className='container-wide'>
        <HeaderAndDescription
          heading={heading}
          headingHighlight={headingHighlight}
          description={description}
        />

        <TwoSidesButtons activeTab={activeTab} onTabChange={onTabChange} />

        <div className={cn('max-w-6xl mx-auto', contentClassName)}>
          {children}
        </div>
      </div>
    </section>
  )
}
