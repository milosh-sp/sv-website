import { strings } from '@/lib/strings'
import type { BenefitItem } from '@/types/grid-cards.types'
import type { ReactNode } from 'react'
import { BenefitGrid } from './ui/grid-cards'

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
      <div className='w-28 h-28 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg'>
        {icon}
      </div>
      <p className='text-body-large text-slate-600 mb-12 max-w-3xl mx-auto text-pretty'>
        {description}
      </p>
      <BenefitGrid benefits={benefits} colorScheme={colorScheme} />
    </div>
  )
}
