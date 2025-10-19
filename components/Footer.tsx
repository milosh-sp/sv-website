import { strings } from '@/lib/strings'
import Link from 'next/link'

/**
 * LinkedIn icon component with white fill
 * Provides high contrast against dark footer background
 */
const LinkedInIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    className='h-5 w-5'
    aria-hidden='true'
  >
    <path
      fill='#FFFFFF'
      d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
    />
  </svg>
)

export function Footer() {
  return (
    <footer className='bg-slate-900 border-t border-slate-800 py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          {/* Copyright and links */}
          <div className='text-center md:text-left'>
            <p className='text-sm text-slate-400 mb-4'>
              {strings.branding.copyright}
            </p>
            <div className='flex flex-col sm:flex-row justify-center md:justify-start gap-4'>
              <Link
                href='/privacy-policy'
                className='text-sm text-slate-400 hover:text-slate-300 transition-colors'
              >
                {strings.footer.links.privacyPolicy}
              </Link>
            </div>
          </div>
        </div>

        {/* LinkedIn prominent display */}
        <div className='mt-8 text-center'>
          <Link
            href='https://linkedin.com'
            className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/90 transition-colors'
            aria-label='LinkedIn profile'
          >
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </footer>
  )
}
