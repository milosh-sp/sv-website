import type { LucideIcon } from 'lucide-react'
import type { ComponentProps } from 'react'

interface BenefitItem {
  icon: LucideIcon
  title: string
  description: string
}

interface BenefitCardProps extends ComponentProps<'article'> {
  benefit: BenefitItem
  colorScheme?: 'blue' | 'emerald' | 'purple' | 'orange' | 'companies'
  className?: string
}

interface BenefitGridProps extends ComponentProps<'ul'> {
  benefits: readonly BenefitItem[]
  colorScheme?: 'blue' | 'emerald' | 'purple' | 'orange' | 'companies'
  columns?: 1 | 2 | 3 | 4
  className?: string
}

export type { BenefitItem, BenefitCardProps, BenefitGridProps }
