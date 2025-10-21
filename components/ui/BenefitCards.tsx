import { cn } from '@/lib/utils'
import { strings } from '@/lib/strings'
import { BenefitGrid } from './BenefitGrid'
import type { BenefitCardsProps } from '@/types/BenefitCards.types'

const COLOR_SCHEME_GRADIENTS = {
  blue: 'from-blue-500 to-blue-600',
  emerald: 'from-emerald-500 to-emerald-600',
  purple: 'from-purple-500 to-purple-600',
  orange: 'from-orange-500 to-orange-600',
} as const

export function BenefitCards({
  benefits,
  description = strings.howItWorks.members.description,
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
        <figure
          className={cn(
            'w-28 h-28 bg-gradient-to-br rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg',
            COLOR_SCHEME_GRADIENTS[colorScheme]
          )}
          aria-hidden='true'
        >
          {icon}
        </figure>
        <p className='text-body-large text-slate-600 max-w-3xl mx-auto text-pretty'>
          {description}
        </p>
      </header>
      <BenefitGrid benefits={benefits} colorScheme={colorScheme} />
    </section>
  )
}
