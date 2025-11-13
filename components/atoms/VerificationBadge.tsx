import { cn } from '@/lib/utils'
import type { VerificationBadgeProps } from '@/types/CVPreview.types'
import type { StatusConfig } from '@/types/VerificationBadge.types'
import { CheckCircle2, Clock, XCircle } from 'lucide-react'

const STATUS_CONFIG_MAP: Record<
  NonNullable<VerificationBadgeProps['verified']>,
  StatusConfig
> = {
  verified: {
    icon: CheckCircle2,
    ariaLabel: 'Verified',
    className: 'bg-green-100 text-green-800',
  },
  pending: {
    icon: Clock,
    ariaLabel: 'Pending verification',
    className: 'bg-yellow-100 text-yellow-800',
  },
  unverified: {
    icon: XCircle,
    ariaLabel: 'Unverified',
    className: 'bg-gray-100 text-gray-800',
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
        'p-1.5 rounded-full inline-flex items-center justify-center',
        statusConfig.className,
        className
      )}
      aria-label={statusConfig.ariaLabel}
      role='img'
    >
      <Icon className='h-5 w-5' aria-hidden='true' />
    </span>
  )
}
