import type { LucideIcon } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'

interface ProblemCardProps extends ComponentProps<'article'> {
  icon: LucideIcon
  title: string
  description?: string
  children?: ReactNode
  variant?: 'default' | 'bordered'
  colorScheme?: 'destructive' | 'success' | 'primary' | 'warning'
  iconSize?: 'sm' | 'md' | 'lg'
  showIconInline?: boolean
}

export type { ProblemCardProps }
