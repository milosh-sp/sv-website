import { COLOR_SCHEMES } from '@/lib/consts'
import { cn } from '@/lib/utils'
import type { BenefitCardProps } from '@/types/GridCards.types'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'

/**
 * Semantic benefit card component
 * Uses article element for self-contained content with header and description
 */
export function BenefitCard({
  benefit,
  colorScheme = 'blue',
  className,
  children,
  disableInteractive,
  ...props
}: BenefitCardProps) {
  const BenefitIcon = benefit?.icon
  const colors = COLOR_SCHEMES[colorScheme]

  return (
    <article
      className={cn(
        'p-8 text-left group cursor-pointer h-full',
        !disableInteractive && 'card-interactive',
        disableInteractive && 'cursor-default',
        className
      )}
      aria-labelledby={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
      {...props}
    >
      <div
        className={cn(
          `w-14 h-14 bg-linear-to-br rounded-xl flex items-center justify-center 
           mb-6 group-hover:scale-110 transition-transform duration-200'
          `,
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
        <Heading
          level={3}
          variant='heading'
          size='sm'
          id={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
          className='mb-3'
        >
          {benefit.title}
        </Heading>
      </header>
      <Text variant='muted'>{benefit.description}</Text>
      {children && <div className='mt-3'>{children}</div>}
    </article>
  )
}
