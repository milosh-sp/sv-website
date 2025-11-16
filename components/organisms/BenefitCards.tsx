import { cn } from '@/lib/utils'
import { BenefitGrid } from '@/components/organisms/BenefitGrid'
import type { BenefitCardsProps } from '@/types/BenefitCards.types'

const COLOR_SCHEME_GRADIENTS = {
  blue: 'from-primary to-primary/80',
  emerald: 'from-success to-success/80',
  purple: 'from-primary to-primary/80',
  orange: 'from-warning to-warning/80',
} as const

export function BenefitCards({
  benefits,
  description,
  icon,
  colorScheme = 'blue',
  className = '',
  ...props
}: BenefitCardsProps) {
  return (
    <section
      className={cn('text-center animate-fade-in-scale', className)}
      role='tabpanel'
      id='candidate-panel'
      aria-labelledby='candidate-tab'
      {...props}
    >
      <header className='mb-12'>
        {icon && (
          <figure
            className={cn(
              'w-17 h-17 bg-linear-to-br rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg',
              COLOR_SCHEME_GRADIENTS[colorScheme]
            )}
            aria-hidden='true'
          >
            {icon}
          </figure>
        )}
        <p className='text-body-large text-muted-foreground max-w-3xl mx-auto text-pretty'>
          {description}
        </p>
      </header>
      <BenefitGrid benefits={benefits} colorScheme={colorScheme} />
    </section>
  )
}
