import type { LucideIcon } from 'lucide-react'

/**
 * Base interface for items that support verification
 * @remarks Used for items with verification badges (skills, certifications, etc.)
 */
interface VerifiableItem {
  name: string
  verified: boolean
  verifier?: string
}

/**
 * Base interface for items without verification
 * @remarks Used for items like experience, education that don't need verification
 */
interface BaseItem {
  [key: string]: unknown
}

type SectionListProps<T> = {
  title: string
  icon: LucideIcon
  items: readonly T[]
  itemRenderer: (item: T) => React.ReactNode
  /** Enable verification badges and tooltips */
  showVerification?: boolean
}

export type { SectionListProps, VerifiableItem, BaseItem }
