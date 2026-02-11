import { Button } from '@/components/atoms/Button'
import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'
import { Award, CircleStar, Handshake } from 'lucide-react'
import Link from 'next/link'

/**
 * By default all buttons are hidden
 */
export function HeroButtons({
  showCandidate,
  showVerifier,
  showHiringManager,
}: {
  showCandidate?: boolean
  showVerifier?: boolean
  showHiringManager?: boolean
}) {
  return (
    <article
      className={cn('flex flex-col sm:flex-row gap-4 mb-1 md:mb-12')}
      aria-label='Primary actions'
    >
      {showCandidate && (
        <Link href='/candidate'>
          <Button
            variant='hero-emerald'
            size='lg'
            className={cn('h-14 px-8 text-base rounded-lg')}
            aria-label={strings.hero.accessibility.openSignupModal}
            type='button'
          >
            <CircleStar className={cn('h-5 w-5 mr-2')} aria-hidden='true' />
            <span className={cn('text-white font-semibold')}>
              {strings.hero.buttons.verifySkills}
            </span>
          </Button>
        </Link>
      )}

      {showVerifier && (
        <Link href='/verifier'>
          <Button
            variant='hero-blue'
            size='lg'
            className={cn('h-14 px-8 text-base rounded-lg font-semibold')}
            aria-label={strings.hero.accessibility.openEarnModal}
            type='button'
          >
            <Award className={cn('h-5 w-5 mr-2')} aria-hidden='true' />
            <span>{strings.hero.buttons.earnByVerifying}</span>
          </Button>
        </Link>
      )}

      {showHiringManager && (
        <Link href='/hiring-manager'>
          <Button
            variant='companies'
            size='lg'
            className={cn('h-14 px-8 text-base rounded-lg font-semibold')}
            aria-label={strings.hero.accessibility.openEarnModal}
            type='button'
          >
            <Handshake className={cn('h-5 w-5')} aria-hidden='true' />
            <span>{strings.hero.buttons.hireMeNow}</span>
          </Button>
        </Link>
      )}
    </article>
  )
}
