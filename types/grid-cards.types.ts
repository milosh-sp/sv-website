import type { LucideIcon } from 'lucide-react'

interface BenefitItem {
  title: string
  description: string
  icon: LucideIcon
}

interface BenefitCardProps {
  benefit: BenefitItem
  colorScheme?: 'blue' | 'emerald' | 'purple' | 'orange'
  className?: string
}

export type { BenefitItem, BenefitCardProps }
