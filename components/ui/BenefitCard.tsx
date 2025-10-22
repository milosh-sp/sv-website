import { COLOR_SCHEMES } from '@/lib/consts'
import { cn } from '@/lib/utils'
import type { BenefitCardProps } from '@/types/GridCards.types'

/**
 * Semantic benefit card component
 * Uses article element for self-contained content with header and description
 */
export function BenefitCard({
  benefit,
  colorScheme = 'blue',
  className,
  ...props
}: BenefitCardProps) {
  const BenefitIcon = benefit.icon
  const colors = COLOR_SCHEMES[colorScheme]

  return (
    <article
      className={cn(
        'card-interactive p-8 text-left group cursor-pointer',
        className
      )}
      aria-labelledby={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
      {...props}
    >
      <div
        className={cn(
          'w-14 h-14 bg-gradient-to-br rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200',
          colors.iconBg
        )}
        role='img'
        aria-label={`${benefit.title} icon`}
      >
        <BenefitIcon
          className={cn('h-7 w-7', colors.iconColor)}
          aria-hidden='true'
        />
      </div>
      <header>
        <h3
          id={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
          className='text-xl font-semibold text-slate-900 mb-3'
        >
          {benefit.title}
        </h3>
      </header>
      <p className='text-slate-600 leading-relaxed'>{benefit.description}</p>
    </article>
  )
}
