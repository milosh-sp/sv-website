import type { ComponentProps } from 'react'

interface BenefitItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

interface BenefitCardProps extends ComponentProps<'article'> {
  benefit: BenefitItem
  colorScheme?: 'blue' | 'emerald' | 'purple' | 'orange'
  className?: string
}

interface BenefitGridProps extends ComponentProps<'ul'> {
  benefits: BenefitItem[]
  colorScheme?: 'blue' | 'emerald' | 'purple' | 'orange'
  columns?: 1 | 2 | 3 | 4
  className?: string
}

export type { BenefitItem, BenefitCardProps, BenefitGridProps }
