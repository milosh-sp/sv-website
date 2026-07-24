import { Button } from '@/components/atoms/Button'
import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'
import { Award, CircleStar, Handshake } from 'lucide-react'
import Link from 'next/link'

/**
 * By default all buttons are hidden
 */
export function HeroButtons({
  audience = 'companies',
  showCandidate,
  showVerifier,
  showHiringManager,
}: {
  audience?: 'companies' | 'talent'
  showCandidate?: boolean
  showVerifier?: boolean
  showHiringManager?: boolean
}) {
  return (
    <article
      className={cn('flex flex-col sm:flex-row gap-4 mb-10 md:mb-12')}
      aria-label={strings.hero.accessibility.primaryActions}
    >
      {showHiringManager && (
        <Link href='/hiring-manager'>
          <Button
            variant='companies'
            size='lg'
            className={cn(
              'h-14 px-8 text-base rounded-lg font-semibold w-full sm:w-auto'
            )}
            aria-label={strings.hero.accessibility.hiringManagerWaitlist}
            type='button'
          >
            <Handshake className={cn('h-5 w-5')} aria-hidden='true' />
            <span>{strings.hero.buttons.hireMeNow}</span>
          </Button>
        </Link>
      )}

      {showCandidate && (
        <Link href='/candidate'>
          <Button
            variant={
              showHiringManager
                ? 'outline'
                : audience === 'talent'
                  ? 'hero-emerald'
                  : 'companies'
            }
            size='lg'
            className={cn('h-14 px-8 text-base rounded-lg w-full sm:w-auto')}
            aria-label={strings.hero.accessibility.openSignupModal}
            type='button'
          >
            <CircleStar className={cn('h-5 w-5 mr-2')} aria-hidden='true' />
            <span className={cn('font-semibold')}>
              {strings.hero.buttons.verifySkills}
            </span>
          </Button>
        </Link>
      )}

      {showVerifier && (
        <Link href='/verifier'>
          <Button
            variant={
              showHiringManager
                ? 'outline'
                : audience === 'talent'
                  ? 'hero-blue'
                  : 'companies'
            }
            size='lg'
            className={cn(
              'h-14 px-8 text-base rounded-lg font-semibold w-full sm:w-auto'
            )}
            aria-label={strings.hero.accessibility.openEarnModal}
            type='button'
          >
            <Award className={cn('h-5 w-5 mr-2')} aria-hidden='true' />
            <span>{strings.hero.buttons.earnByVerifying}</span>
          </Button>
        </Link>
      )}
    </article>
  )
}
