import { cn } from '@/lib/utils'
import type { StepsGridProps } from '@/types/Steps.types'

/**
 * Color scheme mapping for icon backgrounds and colors
 * Ensures consistent theming across different color variants
 */
const ICON_BG_COLORS = {
  blue: 'bg-blue-100',
  emerald: 'bg-emerald-100',
  purple: 'bg-purple-100',
  orange: 'bg-orange-100',
} as const

const ICON_COLORS = {
  blue: 'text-blue-600',
  emerald: 'text-emerald-600',
  purple: 'text-purple-600',
  orange: 'text-orange-600',
} as const

export function StepsGrid({
  steps,
  className,
  columns = 4,
  colorScheme = 'blue',
}: StepsGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  } as const

  const iconBgColor = ICON_BG_COLORS[colorScheme]
  const iconColor = ICON_COLORS[colorScheme]

  return (
    <div className={cn('animate-fade-in-scale', className)}>
      <div className={cn('grid gap-8', gridCols[columns])}>
        {steps.map((step) => (
          <div key={step.title} className='text-center p-6'>
            <div
              className={cn(
                'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4',
                iconBgColor
              )}
            >
              <step.icon
                className={cn('h-8 w-8', iconColor)}
                aria-hidden='true'
              />
            </div>
            <h3 className='font-semibold text-gray-900 mb-3'>{step.title}</h3>
            <p className='text-gray-600 text-sm'>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
