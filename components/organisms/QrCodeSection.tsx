'use client'

import { strings } from '@/lib/strings'
import { QrCode } from 'lucide-react'
import { Text } from '@/components/atoms/Text'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export function QrCodeSection() {
  const router = useRouter()

  return (
    <section
      className={cn('bg-muted p-6 text-center border-t')}
      aria-labelledby='qr-code-heading'
    >
      <figure
        aria-label={strings.cvPreview.accessibility.qrCode}
        className={cn(
          'mb-4 bg-muted rounded-lg flex items-center justify-center'
        )}
      >
        <QrCode className={cn('h-12 w-12')} aria-hidden='true' />
      </figure>
      <Text
        id='qr-code-heading'
        variant='caption'
        className={cn('mb-2 text-semibold')}
      >
        {strings.cvSampleData.qrSection.scanText}
      </Text>
      <button
        type='button'
        className={cn(
          'text-foreground text-sm underline bg-transparent border-none cursor-pointer hover:text-primary'
        )}
        aria-label={`${strings.cvSampleData.qrSection.viewHistoryLink}`}
        onClick={() => router.push('/hiring-manager')}
      >
        {strings.cvSampleData.qrSection.viewHistoryLink}
      </button>
    </section>
  )
}
