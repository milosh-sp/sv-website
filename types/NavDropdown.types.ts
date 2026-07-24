import type { NavMenuItem } from '@/types/Navigation.types'

interface NavDropdownProps {
  label: string
  items: readonly NavMenuItem[]
  variant?: 'desktop' | 'mobile'
  onItemClick?: (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: NavMenuItem
  ) => void
}

export type { NavDropdownProps }
