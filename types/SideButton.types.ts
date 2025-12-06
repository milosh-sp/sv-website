import type { LucideIcon } from 'lucide-react'
import type { ComponentProps } from 'react'

export interface SideTabButtonProps extends ComponentProps<'button'> {
  isActive: boolean
  onClick: () => void
  icon: LucideIcon
  label: string
  className?: string
}
