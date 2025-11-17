'use client'

import { strings } from '@/lib/strings'
import { navigationData } from '@/lib/navigationData'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HeaderLink } from '@/components/molecules/HeaderLink'
import logo from '@/public/logo-sv.svg'
import { cn } from '@/lib/utils'

const SCROLL_MARGIN_TOP_DESKTOP = 96
const SCROLL_MARGIN_TOP_MOBILE = 96
const MOBILE_BREAKPOINT = 930

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (link: (typeof navigationData)[0]) => {
    // If the link doesn't have a hash, it's an external link
    // so a warning does not spam every click
    if (!link || (link && !link.href.includes('#'))) return

    const { id: sectionId } = link

    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (!element) {
      console.warn(`Section with id "${sectionId}" not found`)
      return
    }

    // Close mobile menu before scrolling
    setIsMenuOpen(false)

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    // Get scroll margin based on viewport
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT
    const scrollMargin = isMobile
      ? SCROLL_MARGIN_TOP_MOBILE
      : SCROLL_MARGIN_TOP_DESKTOP

    // Calculate target scroll position
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - scrollMargin

    // Scroll with smooth behavior (respects prefers-reduced-motion)
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

            <span
              className={cn(
                'text-2xl font-bold',
                'bg-linear-to-r from-blue-600 to-blue-800',
                'bg-clip-text text-transparent'
              )}
            >
              {strings.branding.companyName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul
            className={cn(
              'hidden min-[930px]:flex items-center gap-8',
              'list-none m-0 p-0'
            )}
            aria-label='Primary navigation'
          >
            {navigationData.map((link) => (
              <li key={link.id} role='none'>
                <HeaderLink
                  scroll
                  href={link.href}
                  onClick={() => scrollToSection(link)}
                  variant='desktop'
                >
                  {link.label}
                </HeaderLink>
              </li>
            ))}
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
            aria-label='Mobile navigation'
          >
            <ul className={cn('flex flex-col gap-2', 'list-none m-0 p-0')}>
              {navigationData.map((link) => (
                <li key={link.id} role='none'>
                  <HeaderLink
                    href={link.href}
                    onClick={() => scrollToSection(link)}
                    variant='mobile'
                  >
                    {link.label}
                  </HeaderLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
