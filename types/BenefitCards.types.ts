import type { BenefitItem } from './GridCards.types'
import type { ComponentProps, ReactNode } from 'react'

export interface BenefitCardsProps extends ComponentProps<'section'> {
  benefits: readonly BenefitItem[]
  description?: string
  icon?: ReactNode
  colorScheme?: 'blue' | 'emerald' | 'purple' | 'orange' | 'companies'
  className?: string
  controlColor?: 'companies' | 'success'
}
