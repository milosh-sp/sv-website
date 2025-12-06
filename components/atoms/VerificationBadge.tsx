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
    className: 'text-success',
  },
  pending: {
    icon: ClockIcon,
    ariaLabel: 'Pending verification',
    className: 'text-warning',
  },
  unverified: {
    icon: XCircle,
    ariaLabel: 'Unverified',
    className: 'text-muted-foreground',
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
        `rounded-full inline-flex items-center justify-center ${verified === 'verified' ? 'cursor-pointer' : ''}`,
        statusConfig.className,
        className
      )}
    >
      <Icon className='h-5 w-5 md:h-7 md:w-7' aria-hidden='true' />
    </span>
  )
}
