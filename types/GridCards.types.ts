/**
 * Types for GridCards component
 */

interface BenefitItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

interface BenefitCardProps {
  benefit: BenefitItem
  colorScheme?: 'blue' | 'emerald' | 'purple' | 'orange'
  className?: string
}

interface BenefitGridProps {
  benefits: BenefitItem[]
  colorScheme?: 'blue' | 'emerald' | 'purple' | 'orange'
  columns?: 1 | 2 | 3 | 4
  className?: string
}

export type { BenefitItem, BenefitCardProps, BenefitGridProps }
