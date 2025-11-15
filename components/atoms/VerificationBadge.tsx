import { cn } from '@/lib/utils'
import type { VerificationBadgeProps } from '@/types/CVPreview.types'
import type { StatusConfig } from '@/types/VerificationBadge.types'
import { BadgeCheck, ClockIcon, XCircle } from 'lucide-react'

const STATUS_CONFIG_MAP: Record<
  NonNullable<VerificationBadgeProps['verified']>,
  StatusConfig
> = {
  verified: {
    icon: BadgeCheck,
    ariaLabel: 'Verified',
    className: 'bg-success text-success-foreground',
  },
  pending: {
    icon: ClockIcon,
    ariaLabel: 'Pending verification',
    className: 'bg-pending text-warning-foreground',
  },
  unverified: {
    icon: XCircle,
    ariaLabel: 'Unverified',
    className: 'bg-muted-foreground text-white',
  },
} as const

export function VerificationBadge({
  verified,
  className,
}: VerificationBadgeProps) {
  const statusConfig = STATUS_CONFIG_MAP[verified ?? 'unverified']
  const Icon = statusConfig.icon

  return (
    <span
      className={cn(
        'rounded-full inline-flex items-center justify-center cursor-pointer',
        statusConfig.className,
        className
      )}
      aria-label={statusConfig.ariaLabel}
      role='img'
    >
      <Icon className='h-6 w-6' aria-hidden='true' />
    </span>
  )
}
