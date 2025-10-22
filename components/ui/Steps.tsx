import { cn } from '@/lib/utils'
import type { StepsGridProps } from '@/types/Steps.types'

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
    <section
      className={cn('animate-fade-in-scale', className)}
      aria-label='Process steps'
    >
      <ol className={cn('grid gap-8 list-none', gridCols[columns])}>
        {steps.map((step, index) => {
          const StepIcon = step.icon
          const stepId = `step-${step.title.toLowerCase().replace(/\s+/g, '-')}`

          return (
            <li
              key={stepId}
              className='text-center p-1'
              aria-posinset={index + 1}
              aria-setsize={steps.length}
            >
              <article className='flex flex-col items-center'>
                <div
                  className={cn(
                    'w-16 h-16 rounded-full flex items-center justify-center mb-4',
                    iconBgColor
                  )}
                  aria-hidden='true'
                >
                  <StepIcon className={cn('h-8 w-8', iconColor)} />
                </div>
                <h3 id={stepId} className='font-semibold text-gray-900 mb-3'>
                  {step.title}
                </h3>
                <p className='text-gray-600 text-sm' aria-describedby={stepId}>
                  {step.description}
                </p>
              </article>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
