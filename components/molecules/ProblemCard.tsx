import { cn } from '@/lib/utils'
import type { ProblemCardProps } from '@/types/ProblemCard.types'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { IconContainer } from '@/components/atoms/IconContainer'

const VARIANT_STYLES = {
  default: '',
  bordered: 'p-6 rounded-2xl border',
} as const

const COLOR_SCHEME_STYLES = {
  destructive: {
    bg: 'bg-destructive/5',
    border: 'border-destructive/10',
  },
  success: {
    bg: 'bg-success/5',
    border: 'border-success/10',
  },
  primary: {
    bg: 'bg-primary/5',
    border: 'border-primary/10',
  },
  warning: {
    bg: 'bg-warning/5',
    border: 'border-warning/10',
  },
} as const

export function ProblemCard({
  icon,
  title,
  description,
  children,
  variant = 'default',
  colorScheme = 'destructive',
  iconSize = 'lg',
  showIconInline = false,
  className,
  ...props
}: ProblemCardProps) {
  const variantClass = VARIANT_STYLES[variant]
  const colorStyles = COLOR_SCHEME_STYLES[colorScheme]

  return (
    <article
      className={cn(
        'space-y-6',
        variant === 'bordered' && colorStyles.bg,
        variant === 'bordered' && colorStyles.border,
        variantClass,
        className
      )}
      {...props}
    >
      {showIconInline ? (
        <div className='flex items-center gap-3'>
          <IconContainer
            icon={icon}
            size={iconSize}
            colorScheme={colorScheme}
          />
          <Heading level={3} variant='heading' size='md' className='font-semibold'>
            {title}
          </Heading>
        </div>
      ) : (
        <>
          <IconContainer
            icon={icon}
            size={iconSize}
            colorScheme={colorScheme}
          />
          <div className='space-y-4'>
            <Heading
              level={3}
              variant='subheading'
              size='md'
              className='font-semibold'
            >
              {title}
            </Heading>
            {description && (
              <Text variant='body' pretty>
                {description}
              </Text>
            )}
            {children}
          </div>
        </>
      )}
      {showIconInline && (
        <>
          {description && (
            <Text variant='body' pretty>
              {description}
            </Text>
          )}
          {children}
        </>
      )}
    </article>
  )
}

