'use client'

import { strings } from '@/lib/strings'
import {
  contactLink,
  headerMenus,
  type NavMenuItem,
} from '@/lib/navigationData'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HeaderLink } from '@/components/molecules/HeaderLink'
import { NavDropdown } from '@/components/molecules/NavDropdown'
import logo from '@/public/logo-sv.svg'
import { cn } from '@/lib/utils'
import { DecorativeText } from '@/components/atoms/DecorativeText'
import { useTracking } from '@/hooks/useTracking'
import { ReferralStorage } from '@/components/atoms/ReferralStorage'

const SCROLL_MARGIN_TOP_DESKTOP = 96
const SCROLL_MARGIN_TOP_MOBILE = 96
const MOBILE_BREAKPOINT = 930

export function Header() {
  useTracking()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Smooth-scroll only when the target section is on the current page.
  // Cross-page hash links (e.g. /#faq clicked from /for-talent-cv2.0) fall
  // through to normal Next.js navigation, which handles the hash on load.
  const handleMenuLabelClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsMenuOpen(false)

    const targetPath = href.split('#')[0] || '/'
    if (targetPath !== window.location.pathname) return

    event.preventDefault()

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      left: 0,
    })
  }

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: NavMenuItem
  ) => {
    setIsMenuOpen(false)

    if (!item.href.includes('#')) return

    const [path, hash] = item.href.split('#')
    const targetPath = path === '' ? '/' : path
    if (targetPath !== window.location.pathname) return

    const element = document.getElementById(hash)
    if (!element) {
      console.warn(`Section with id "${hash}" not found`)
      return
    }

    // Same-page anchor: take over from the default jump and scroll smoothly
    event.preventDefault()

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const isMobile = window.innerWidth < MOBILE_BREAKPOINT
    const scrollMargin = isMobile
      ? SCROLL_MARGIN_TOP_MOBILE
      : SCROLL_MARGIN_TOP_DESKTOP

    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - scrollMargin

    window.scrollTo({
      top: offsetPosition,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      left: 0,
    })
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header
      className={cn(
        'fixed top-0 w-full bg-white/95 backdrop-blur-md',
        'border-b border-slate-200/50 z-50 shadow-sm'
      )}
    >
      <ReferralStorage />
      <div
        className={cn('max-w-full mx-auto', 'px-6 sm:px-8 lg:px-12 xl:px-16')}
      >
        <nav
          className={cn('flex items-center justify-between h-20')}
          aria-label={
            strings.navigation.accessibility.goToHomepage || 'Main navigation'
          }
        >
          {/* Logo and Brand */}
          <Link
            href='/'
            className={cn(
              'flex items-center gap-3',
              'hover:opacity-80 transition-opacity duration-200',
              'rounded-lg'
            )}
            aria-label={strings.navigation.accessibility.goToHomepage}
          >
            <Image
              src={logo}
              alt=''
              width={25}
              height={25}
              aria-hidden='true'
            />
            <DecorativeText text={strings.branding.companyName} />
          </Link>

          {/* Desktop Navigation */}
          <ul
            className={cn(
              'hidden min-[930px]:flex items-center gap-4',
              'list-none m-0 p-0'
            )}
            aria-label={strings.navigation.accessibility.primaryNavigation}
          >
            {headerMenus.map((menu) => (
              <NavDropdown
                key={menu.id}
                label={menu.label}
                href={menu.href}
                items={menu.items}
                variant='desktop'
                onItemClick={handleNavClick}
                onLabelClick={handleMenuLabelClick}
              />
            ))}
            <li>
              <HeaderLink
                href={contactLink.href}
                variant='desktop'
                onClick={(event) => handleNavClick(event, contactLink)}
              >
                {contactLink.label}
              </HeaderLink>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            type='button'
            className={cn(
              'min-[930px]:hidden p-3',
              'text-slate-700 hover:text-blue-600 hover:bg-slate-100',
              'rounded-lg transition-all duration-200 cursor-pointer',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            )}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls='mobile-menu'
            aria-label={
              isMenuOpen
                ? strings.navigation.accessibility.closeMenu
                : strings.navigation.accessibility.openMenu
            }
          >
            {isMenuOpen ? (
              <X className={cn('h-6 w-6')} aria-hidden='true' />
            ) : (
              <Menu className={cn('h-6 w-6')} aria-hidden='true' />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav
            id='mobile-menu'
            className={cn(
              'min-[930px]:hidden py-6',
              'border-t border-slate-200/50',
              'bg-white/98 backdrop-blur-md',
              'animate-fade-in-scale',
              'sticky top-20 z-40'
            )}
            aria-label={strings.navigation.accessibility.mobileNavigation}
          >
            <ul className={cn('flex flex-col gap-2', 'list-none m-0 p-0')}>
              {headerMenus.map((menu) => (
                <NavDropdown
                  key={menu.id}
                  label={menu.label}
                  href={menu.href}
                  items={menu.items}
                  variant='mobile'
                  onItemClick={handleNavClick}
                  onLabelClick={handleMenuLabelClick}
                />
              ))}
              <li role='none'>
                <HeaderLink
                  href={contactLink.href}
                  variant='mobile'
                  onClick={(event) => handleNavClick(event, contactLink)}
                >
                  {contactLink.label}
                </HeaderLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
