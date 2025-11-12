import type { ComponentProps, ReactNode } from 'react'
import type { UserType } from './FormData.types'

export interface HeaderAndButtonsProps extends ComponentProps<'section'> {
  heading: string
  headingHighlight?: string
  description: string
  children: ReactNode
  sectionId: string
  ariaLabel?: string
  className?: string
  activeTab: UserType
  onTabChange: (tab: UserType) => void
}
