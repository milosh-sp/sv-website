/**
 * Benefit card component for displaying feature benefits
 * Follows Single Responsibility Principle - handles only benefit card rendering
 */

import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

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

/**
 * Color scheme configuration for benefit cards
 * Ensures consistent theming across different card variants
 */
const COLOR_SCHEMES = {
  blue: {
    iconBg: 'from-blue-100 to-blue-200',
    iconColor: 'text-blue-600',
  },
  emerald: {
    iconBg: 'from-emerald-100 to-emerald-200',
    iconColor: 'text-emerald-600',
  },
  purple: {
    iconBg: 'from-purple-100 to-purple-200',
    iconColor: 'text-purple-600',
  },
  orange: {
    iconBg: 'from-orange-100 to-orange-200',
    iconColor: 'text-orange-600',
  },
} as const

/**
 * Individual benefit card component
 */
export function BenefitCard({
  benefit,
  colorScheme = 'blue',
  className,
}: BenefitCardProps) {
  const BenefitIcon = benefit.icon
  const colors = COLOR_SCHEMES[colorScheme]

  return (
    <div
      className={cn(
        'card-interactive p-8 text-left group cursor-pointer',
        className
      )}
    >
      <div
        className={cn(
          'w-14 h-14 bg-gradient-to-br rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200',
          colors.iconBg
        )}
      >
        <BenefitIcon
          className={cn('h-7 w-7', colors.iconColor)}
          aria-hidden='true'
        />
      </div>
      <h3 className='text-xl font-semibold text-slate-900 mb-3'>
        {benefit.title}
      </h3>
      <p className='text-slate-600 leading-relaxed'>{benefit.description}</p>
    </div>
  )
}

interface BenefitGridProps {
  benefits: BenefitItem[]
  colorScheme?: 'blue' | 'emerald' | 'purple' | 'orange'
  columns?: 1 | 2 | 3 | 4
  className?: string
}

/**
 * Grid container for benefit cards
 * Provides responsive layout with configurable columns
 */
export function BenefitGrid({
  benefits,
  colorScheme = 'blue',
  columns = 2,
  className,
}: BenefitGridProps) {
  const gridCols = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }

  return (
    <div className={cn('grid gap-8', gridCols[columns], className)}>
      {benefits.map((benefit, index) => (
        <BenefitCard
          key={`${benefit.title}-${index}`}
          benefit={benefit}
          colorScheme={colorScheme}
        />
      ))}
    </div>
  )
}
