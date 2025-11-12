import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'
import type { VerificationBadgeProps } from '@/types/CVPreview.types'
import type { StatusConfig } from '@/types/VerificationBadge.types'

const STATUS_CONFIG_MAP: Record<
  NonNullable<VerificationBadgeProps['verified']>,
  StatusConfig
> = {
  verified: {
    label: strings.cvSampleData.statusLabels.verified,
    className: 'bg-green-100 text-green-800',
  },
  pending: {
    label: strings.cvSampleData.statusLabels.pending,
    className: 'bg-yellow-100 text-yellow-800',
  },
  unverified: {
    label: strings.cvSampleData.statusLabels.unverified,
    className: 'bg-gray-100 text-gray-800',
  },
} as const

export function VerificationBadge({
  verified,
  className,
}: VerificationBadgeProps) {
  const statusConfig = STATUS_CONFIG_MAP[verified ?? 'unverified']

  return (
    <span
      className={cn(
        'text-xs px-2 py-1 rounded-full text-center',
        statusConfig.className,
        className
      )}
    >
      {statusConfig.label}
    </span>
  )
}
