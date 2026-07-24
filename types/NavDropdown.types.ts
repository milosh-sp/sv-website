import type { NavMenuItem } from '@/types/Navigation.types'

interface NavDropdownProps {
  label: string
  href: string
  items: readonly NavMenuItem[]
  variant?: 'desktop' | 'mobile'
  onItemClick?: (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: NavMenuItem
  ) => void
  onLabelClick?: (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void
}

export type { NavDropdownProps }
