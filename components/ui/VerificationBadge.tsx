import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'
import type { VerificationBadgeProps } from '@/types/CVPreview.types'

export function VerificationBadge({
  verified,
  className,
}: VerificationBadgeProps) {
  let statusConfig: { label: string; className: string }

  if (verified === 'verified') {
    statusConfig = {
      label: strings.cvSampleData.statusLabels.verified,
      className: 'bg-green-100 text-green-800',
    }
  } else if (verified === 'pending') {
    statusConfig = {
      label: strings.cvSampleData.statusLabels.pending,
      className: 'bg-yellow-100 text-yellow-800',
    }
  } else {
    statusConfig = {
      label: strings.cvSampleData.statusLabels.unverified,
      className: 'bg-gray-100 text-gray-800',
    }
  }

  return (
    <span
      className={cn(
        'text-xs px-2 py-1 rounded-full',
        statusConfig.className,
        className
      )}
    >
      {statusConfig.label}
    </span>
  )
}
