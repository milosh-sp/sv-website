import type { LucideIcon } from 'lucide-react'

export interface BenefitItem {
  title: string
  description: string
  icon: LucideIcon
}

export interface BenefitCardProps {
  benefit: BenefitItem
  colorScheme?: 'blue' | 'emerald' | 'purple' | 'orange'
  className?: string
}
