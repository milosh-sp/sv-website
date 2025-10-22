'use client'

import { strings } from '@/lib/strings'
import { navigationData } from '@/lib/navigationData'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HeaderLink } from '../ui/HeaderLink'
import logo from '@/public/logo-sv.svg'

const SCROLL_MARGIN_TOP = 96 // 80px header height + 16px padding

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition =
        elementPosition + window.scrollY - SCROLL_MARGIN_TOP

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header className='fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/50 z-50 shadow-sm'>
      <div className='max-w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16'>
        <nav
          className='flex items-center justify-between h-20'
          aria-label={
            strings.navigation.accessibility.goToHomepage || 'Main navigation'
          }
        >
          {/* Logo and Brand */}
          <Link
            href='/'
            className='flex items-center gap-3 hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg'
            aria-label={strings.navigation.accessibility.goToHomepage}
          >
            <Image
              src={logo}
              alt=''
              width={25}
              height={25}
              aria-hidden='true'
            />

            <span className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>
              {strings.branding.companyName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul
            className='hidden md:flex items-center gap-8 list-none m-0 p-0'
            aria-label='Primary navigation'
          >
            {navigationData.map((link) => (
              <li key={link.id} role='none'>
                <HeaderLink
                  scroll={false}
                  href={link.href}
                  onClick={() => scrollToSection(link.id)}
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
            className='md:hidden p-3 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
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
              <X className='h-6 w-6' aria-hidden='true' />
            ) : (
              <Menu className='h-6 w-6' aria-hidden='true' />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav
            id='mobile-menu'
            className='md:hidden py-6 border-t border-slate-200/50 bg-white/98 backdrop-blur-md animate-fade-in-scale'
            aria-label='Mobile navigation'
          >
            <ul className='flex flex-col gap-2 list-none m-0 p-0'>
              {navigationData.map((link) => (
                <li key={link.id} role='none'>
                  <HeaderLink
                    href={link.href}
                    onClick={() => scrollToSection(link.id)}
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
