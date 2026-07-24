import { cn } from '@/lib/utils'
import type {
  SideTabActiveAccent,
  SideTabButtonProps,
} from '@/types/SideButton.types'
import { Button } from '@/components/atoms/Button'

const ACTIVE_ACCENT_STYLES: Record<SideTabActiveAccent, string> = {
  success: 'bg-background text-success shadow-md border border-success/20',
  primary: 'bg-background text-primary shadow-md border border-primary/20',
  companies:
    'bg-background text-companies shadow-md border border-companies/20',
}

export function SideTabButton({
  isActive,
  onClick,
  icon: Icon,
  label,
  className,
  activeAccent = 'success',
}: SideTabButtonProps) {
  return (
    <Button
      type='button'
      onClick={onClick}
      variant='ghost'
      className={cn(
        'flex items-center rounded-lg font-semibold transition-all duration-300 p-6 text-sm md:text-lg cursor-pointer',
        isActive
          ? ACTIVE_ACCENT_STYLES[activeAccent]
          : 'hover:text-foreground hover:bg-background/50',
        className
      )}
    >
      <Icon className='h-5 w-5' aria-hidden='true' />
      <span>{label}</span>
    </Button>
  )
}
