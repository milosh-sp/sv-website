import type { BenefitItem } from './GridCards.types'
import type { ReactNode } from 'react'

export interface BenefitCardsProps {
  benefits: BenefitItem[]
  description?: string
  icon?: ReactNode
  colorScheme?: 'blue' | 'emerald' | 'purple' | 'orange'
  className?: string
}
