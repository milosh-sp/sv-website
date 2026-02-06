import type { LucideIcon } from 'lucide-react'
import type { ComponentProps } from 'react'

interface IconContainerProps extends ComponentProps<'div'> {
  icon: LucideIcon
  size?: 'sm' | 'md' | 'lg'
  variant?: 'gradient' | 'solid'
  colorScheme?: 'destructive' | 'success' | 'primary' | 'warning'
}

export type { IconContainerProps }
