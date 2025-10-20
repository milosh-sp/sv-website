import type { ReactNode } from 'react'
import type { UserType } from './FormData.types'

export interface HeaderAndButtonsProps {
  heading: string
  headingHighlight?: string
  description: string
  children: ReactNode
  sectionId?: string
  ariaLabel?: string
  className?: string
  contentClassName?: string
  activeTab: UserType
  onTabChange: (tab: UserType) => void
}
