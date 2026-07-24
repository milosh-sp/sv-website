import type { LucideIcon } from 'lucide-react'
import type { ComponentProps } from 'react'

type SideTabActiveAccent = 'success' | 'primary' | 'companies'

export interface SideTabButtonProps extends ComponentProps<'button'> {
  isActive: boolean
  onClick: () => void
  icon: LucideIcon
  label: string
  className?: string
  activeAccent?: SideTabActiveAccent
}

export type { SideTabActiveAccent }
