import type { ReactNode } from 'react'

export type TabType = 'candidate' | 'vetter'

export interface HeaderAndButtonsProps {
  heading: string
  headingHighlight?: string
  description: string
  children: ReactNode
  sectionId?: string
  ariaLabel?: string
  className?: string
  contentClassName?: string
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}
