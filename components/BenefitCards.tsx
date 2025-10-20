import { strings } from '@/lib/strings'
import type { BenefitItem } from '@/types/GridCards.types'
import type { ReactNode } from 'react'
import { BenefitGrid } from './ui/GridCards'

/**
 * Color scheme mapping configuration for benefit cards
 * Ensures consistent theming across different card variants
 */
const COLOR_SCHEME_GRADIENTS = {
  blue: 'from-blue-500 to-blue-600',
  emerald: 'from-emerald-500 to-emerald-600',
  purple: 'from-purple-500 to-purple-600',
  orange: 'from-orange-500 to-orange-600',
} as const

interface BenefitCardsProps {
  benefits: BenefitItem[]
  description?: string
  icon?: ReactNode
  colorScheme?: 'blue' | 'emerald' | 'purple' | 'orange'
  className?: string
}

/**
 * Reusable benefit cards component that follows SOLID principles
 *
 * Single Responsibility: This component only handles rendering benefit cards
 * Open/Closed: Can be extended with new props without modifying existing code
 * Liskov Substitution: Compatible with any benefit item structure
 * Interface Segregation: Minimal props interface
 * Dependency Inversion: Uses dependency injection for icons and data
 */
export function BenefitCards({
  benefits,
  description = strings.howItWorks.members.description,
  icon,
  colorScheme = 'blue',
  className = '',
}: BenefitCardsProps) {
  return (
    <div
      className={`text-center animate-fade-in-scale ${className}`}
      role='tabpanel'
      id='candidate-panel'
      aria-labelledby='candidate-tab'
    >
      <div
        className={`w-28 h-28 bg-gradient-to-br ${COLOR_SCHEME_GRADIENTS[colorScheme]} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg`}
      >
        {icon}
      </div>
      <p className='text-body-large text-slate-600 mb-12 max-w-3xl mx-auto text-pretty'>
        {description}
      </p>
      <BenefitGrid benefits={benefits} colorScheme={colorScheme} />
    </div>
  )
}
