'use client'

import { CV2TeaserPreview } from '@/components/molecules/CV2TeaserPreview'
import { Handshake } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/atoms/Button'
import { strings } from '@/lib/strings'
import { useRouter } from 'next/navigation'

export function HeroVisual() {
  const router = useRouter()

  return (
    <div className={cn('relative h-full')}>
      <CV2TeaserPreview />

      <div className={cn('flex justify-center align-center mt-5')}>
        <Button
          onClick={() => router.push('/hiring-manager')}
          aria-label={strings.hero.accessibility.openEarnModal}
          variant='companies'
          size='lg'
          className={cn('h-14 px-8 text-base rounded-lg font-semibold')}
          type='button'
        >
          <Handshake className={cn('h-5 w-5')} aria-hidden='true' />
          <span>{strings.hero.buttons.hireMeNow}</span>
        </Button>
      </div>
    </div>
  )
}
