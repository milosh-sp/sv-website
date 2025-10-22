import type { LucideIcon } from 'lucide-react'
import type { ComponentProps } from 'react'

interface VerifiableItem {
  name: string
  verified: boolean
  verifier?: string
}

interface BaseItem {
  [key: string]: unknown
}

type SectionListProps<T> = ComponentProps<'section'> & {
  title: string
  icon: LucideIcon
  items: readonly T[]
  itemRenderer: (item: T) => React.ReactNode
}

export type { SectionListProps, VerifiableItem, BaseItem }
