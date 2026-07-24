import type { ComponentType } from 'react'
import type { FaqVariant } from '@/types/FaqPageSection.types'
import type { SectionProps } from '@/types/Sections.types'

interface NavMenuItem {
  id: string
  label: string
  href: string
}

interface NavMenu {
  id: string
  label: string
  items: readonly NavMenuItem[]
}

interface PageSection {
  id: string
  Component: ComponentType<SectionProps & { variant?: FaqVariant }>
  props?: { variant?: FaqVariant }
}

export type { NavMenuItem, NavMenu, PageSection }
