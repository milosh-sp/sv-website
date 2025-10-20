import type { LucideIcon } from 'lucide-react'

export interface BenefitCardProps {
  benefit: BenefitItem
  colorScheme?: 'blue' | 'emerald' | 'purple' | 'orange'
  className?: string
}

export interface BenefitItem {
  title: string
  description: string
  icon: LucideIcon
}

export interface BenefitGridProps {
  benefits: BenefitItem[]
  colorScheme?: 'blue' | 'emerald' | 'purple' | 'orange'
  columns?: 1 | 2 | 3 | 4
  className?: string
}
