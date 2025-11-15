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
          <section
            className={cn('text-center md:text-left')}
            aria-labelledby='footer-legal-heading'
          >
            <h2 id='footer-legal-heading' className={cn('sr-only')}>
              Legal Information
            </h2>
            <Text variant='caption' className={cn('text-slate-400 mb-4')}>
              {strings.branding.copyright}
            </Text>
            <nav aria-label='Legal links'>
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
            <h2 id='footer-contact-heading' className={cn('sr-only')}>
              Contact Information
            </h2>
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

        {/* LinkedIn prominent display */}
        <nav className={cn('mt-8 text-center')} aria-label='Social media links'>
          <ul className={cn('list-none')}></ul>
        </nav>
      </div>
    </footer>
  )
}
