import type { LucideIcon } from 'lucide-react'

interface VerifiableItem {
  name: string
  verified: boolean
  verifier?: string
}

interface BaseItem {
  [key: string]: unknown
}

type SectionListProps<T> = {
  title: string
  icon: LucideIcon
  items: readonly T[]
  itemRenderer: (item: T) => React.ReactNode
}

export type { SectionListProps, VerifiableItem, BaseItem }
