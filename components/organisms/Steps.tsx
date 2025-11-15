import { cn } from '@/lib/utils'
import type { StepsGridProps } from '@/types/Steps.types'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'

const ICON_BG_COLORS = {
  blue: 'bg-accent',
  emerald: 'bg-success/20',
  purple: 'bg-primary/20',
  orange: 'bg-warning/20',
} as const

const ICON_COLORS = {
  blue: 'text-primary',
  emerald: 'text-success',
  purple: 'text-primary',
  orange: 'text-warning',
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
              className={cn('text-center p-1')}
              aria-posinset={index + 1}
              aria-setsize={steps.length}
            >
              <article className={cn('flex flex-col items-center')}>
                <div
                  className={cn(
                    'w-16 h-16 rounded-full flex items-center justify-center mb-4',
                    iconBgColor
                  )}
                  aria-hidden='true'
                >
                  <StepIcon className={cn('h-8 w-8', iconColor)} />
                </div>
                <Heading
                  level={3}
                  variant='subheading'
                  size='md'
                  id={stepId}
                  className={cn('mb-3 font-bold')}
                >
                  {step.title}
                </Heading>
                <Text
                  variant='caption'
                  className={cn('text-muted-foreground')}
                  aria-describedby={stepId}
                >
                  {step.description}
                </Text>
              </article>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
