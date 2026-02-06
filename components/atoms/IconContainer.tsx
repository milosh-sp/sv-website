import { cn } from '@/lib/utils'
import type { IconContainerProps } from '@/types/IconContainer.types'

const SIZE_STYLES = {
  sm: {
    container: 'w-8 h-8',
    icon: 'h-4 w-4',
  },
  md: {
    container: 'w-10 h-10',
    icon: 'h-5 w-5',
  },
  lg: {
    container: 'w-12 h-12',
    icon: 'h-6 w-6',
  },
} as const

const COLOR_SCHEMES = {
  destructive: {
    gradient: 'from-destructive/20 to-destructive/10',
    solid: 'bg-destructive/20',
    iconColor: 'text-destructive',
  },
  success: {
    gradient: 'from-success/20 to-success/10',
    solid: 'bg-success/20',
    iconColor: 'text-success',
  },
  primary: {
    gradient: 'from-primary/20 to-primary/10',
    solid: 'bg-primary/20',
    iconColor: 'text-primary',
  },
  warning: {
    gradient: 'from-warning/20 to-warning/10',
    solid: 'bg-warning/20',
    iconColor: 'text-warning',
  },
} as const

export function IconContainer({
  icon: Icon,
  size = 'lg',
  variant = 'gradient',
  colorScheme = 'destructive',
  className,
  ...props
}: IconContainerProps) {
  const sizeStyles = SIZE_STYLES[size]
  const colorStyles = COLOR_SCHEMES[colorScheme]
  const bgClass =
    variant === 'gradient' ? colorStyles.gradient : colorStyles.solid

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center shrink-0',
        variant === 'gradient' && 'bg-linear-to-br',
        sizeStyles.container,
        bgClass,
        className
      )}
      aria-hidden='true'
      {...props}
    >
      <Icon className={cn(sizeStyles.icon, colorStyles.iconColor)} />
    </div>
  )
}
