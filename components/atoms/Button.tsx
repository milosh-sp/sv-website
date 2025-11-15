import { cn } from '@/lib/utils'
import type {
  ButtonVariant,
  ButtonSize,
  ButtonProps,
} from '@/types/Buttons.types'

const BASE_STYLES = cn(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap',
  'rounded-md text-sm font-medium transition-all',
  'disabled:pointer-events-none disabled:opacity-50',
  '[&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4',
  'shrink-0 [&_svg]:shrink-0 outline-none',
  'focus-visible:border-ring focus-visible:ring-ring/50',
  'focus-visible:ring-[3px] focus-visible:outline-2',
  'focus-visible:outline-offset-2',
  'aria-invalid:ring-destructive/20',
  'dark:aria-invalid:ring-destructive/40',
  'aria-invalid:border-destructive',
  'cursor-pointer hover:opacity-80 disabled:cursor-not-allowed'
)

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  default: cn(
    'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
    'active:bg-primary/80'
  ),
  destructive: cn(
    'bg-destructive text-white shadow-sm hover:bg-destructive/90',
    'active:bg-destructive/80 focus-visible:ring-destructive/20',
    'dark:focus-visible:ring-destructive/40 dark:bg-destructive/60'
  ),
  outline: cn(
    'border bg-background shadow-sm hover:bg-accent',
    'hover:text-accent-foreground active:bg-accent/80 dark:bg-input/30',
    'dark:border-input dark:hover:bg-input/50'
  ),
  secondary: cn(
    'bg-secondary text-secondary-foreground shadow-sm',
    'hover:bg-secondary/80 active:bg-secondary/70'
  ),
  ghost: cn(
    'hover:bg-accent hover:text-accent-foreground active:bg-accent/80',
    'dark:hover:bg-accent/50'
  ),
  link: cn(
    'text-primary underline-offset-4 hover:underline',
    'focus-visible:underline'
  ),
  verdict: cn(
    'bg-skill-verdict text-white shadow-sm hover:bg-skill-verdict/90',
    'active:bg-skill-verdict/80 focus-visible:ring-skill-verdict/20',
    'dark:focus-visible:ring-skill-verdict/40'
  ),
  'hero-emerald': cn(
    'bg-success text-success-foreground shadow-md hover:bg-success/90',
    'active:bg-success focus-visible:ring-success/20',
    'dark:focus-visible:ring-success/40 transition-all duration-300'
  ),
  'hero-blue': cn(
    'bg-primary text-primary-foreground shadow-md hover:bg-primary/90',
    'active:bg-primary focus-visible:ring-primary/20',
    'dark:focus-visible:ring-primary/40 transition-all duration-300'
  ),
} as const

const SIZE_STYLES: Record<ButtonSize, string> = {
  default: 'h-9 px-4 py-2 has-[>svg]:px-3',
  sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
  lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
  icon: 'size-9',
} as const

const ARIA_LABELS: Record<ButtonVariant, string> = {
  default: 'Primary action button',
  destructive: 'Destructive action button',
  outline: 'Secondary action button',
  secondary: 'Alternative action button',
  ghost: 'Tertiary action button',
  link: 'Link button',
  verdict: 'Verdict action button',
  'hero-emerald': 'Hero action button',
  'hero-blue': 'Hero action button',
} as const

export function Button({
  className,
  variant = 'default',
  size = 'default',
  type = 'button',
  'aria-label': ariaLabel,
  disabled,
  ...props
}: ButtonProps) {
  const defaultAriaLabel =
    !ariaLabel && !props.children ? ARIA_LABELS[variant] : undefined

  return (
    <button
      type={type}
      data-slot='button'
      className={cn(
        BASE_STYLES,
        VARIANT_STYLES[variant],
        SIZE_STYLES[size],
        className
      )}
      aria-label={ariaLabel ?? defaultAriaLabel}
      aria-disabled={disabled}
      disabled={disabled}
      {...props}
    />
  )
}
