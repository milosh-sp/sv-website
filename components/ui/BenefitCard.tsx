import { COLOR_SCHEMES } from '@/lib/consts'
import { cn } from '@/lib/utils'
import type { BenefitCardProps } from '@/types/GridCards.types'

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
