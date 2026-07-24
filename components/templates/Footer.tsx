import { strings } from '@/lib/strings'
import Link from 'next/link'
import { Text } from '@/components/atoms/Text'
import { cn } from '@/lib/utils'

export function Footer() {
  return (
    <footer className={cn('bg-slate-900 border-t border-slate-800 py-12')}>
      <div className={cn('container mx-auto px-4')}>
        <div
          className={cn(
            'flex flex-col md:flex-row justify-between items-center gap-8'
          )}
        >
          {/* Copyright and links */}
          <section className={cn('text-center md:text-left')}>
            <Text variant='caption' className={cn('text-slate-400 mb-4')}>
              {strings.branding.copyright}
            </Text>
            <nav aria-label={strings.footer.accessibility.legalLinks}>
              <ul
                className={cn(
                  'flex flex-col sm:flex-row justify-center md:justify-start gap-4 list-none'
                )}
              >
                <li>
                  <Link
                    href='/privacy-policy'
                    className={cn(
                      'text-sm text-slate-400 hover:text-slate-300 transition-colors'
                    )}
                  >
                    {strings.footer.links.privacyPolicy}
                  </Link>
                </li>
              </ul>
            </nav>
          </section>

          {/* Contact email */}
          <address
            className={cn('text-center md:text-right not-italic')}
            aria-labelledby='footer-contact-heading'
          >
            <Text variant='caption' className={cn('text-slate-400 mb-2')}>
              {strings.footer.contactUs}
            </Text>
            <a
              href={`mailto:${strings.footer.email}`}
              className={cn(
                'text-sm text-slate-300 hover:text-white transition-colors'
              )}
              aria-label={`Contact us via email at ${strings.footer.email}`}
            >
              {strings.footer.email}
            </a>
          </address>
        </div>

        {/* Social media links */}
        <nav
          className={cn('mt-8 text-center')}
          aria-label={strings.footer.accessibility.socialMediaLinks}
        >
          <ul className={cn('flex justify-center gap-6 list-none')}>
            {strings.footer.social.map((social) => {
              const SocialIcon = social.icon
              return (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer me'
                    aria-label={social.label}
                    className={cn(
                      'inline-flex items-center justify-center',
                      'w-10 h-10 rounded-full',
                      'bg-slate-800 text-slate-400',
                      'hover:bg-slate-700 hover:text-slate-300',
                      'transition-colors duration-200',
                      'focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900'
                    )}
                  >
                    <SocialIcon className={cn('w-5 h-5')} aria-hidden='true' />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
