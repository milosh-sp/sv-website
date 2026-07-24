import type { LucideIcon } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'

interface BenefitItem {
  icon: LucideIcon
  title: string
  description: string
}

interface BenefitCardProps extends ComponentProps<'article'> {
  benefit: BenefitItem
  colorScheme?:
    | 'blue'
    | 'emerald'
    | 'purple'
    | 'orange'
    | 'companies'
    | 'warning'
  className?: string
  children?: ReactNode
  disableInteractive?: boolean
}

interface BenefitGridProps extends ComponentProps<'ul'> {
  benefits: readonly BenefitItem[]
  colorScheme?:
    | 'blue'
    | 'emerald'
    | 'purple'
    | 'orange'
    | 'companies'
    | 'warning'
  columns?: 1 | 2 | 3 | 4
  className?: string
  controlColor?: 'companies' | 'success'
}

export type { BenefitItem, BenefitCardProps, BenefitGridProps }
