'use client'

import { strings } from '@/lib/strings'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import logo from '../assets/logo-sv.svg'
import { HeaderLink } from './header-link'

/**
 * Scroll margin offset to account for fixed header height
 * Ensures content is not hidden behind the header when scrolling
 */
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

  return (
    <header className='fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/50 z-50 shadow-sm'>
      <div className='max-w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16'>
        <nav
          className='flex items-center justify-between h-20'
          aria-label='Main navigation'
        >
          <Link
            href='/'
            className='flex items-center gap-3 hover:opacity-80 transition-opacity duration-200'
            aria-label={strings.navigation.accessibility.goToHomepage}
          >
            <Image
              src={logo}
              alt={strings.branding.logo.alt}
              width={25}
              height={25}
            />

            <span className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>
              {strings.branding.companyName}
            </span>
          </Link>

          <div className='hidden md:flex items-center gap-8'>
            <HeaderLink
              scroll={false}
              href='#how-it-works'
              onClick={() => scrollToSection('how-it-works')}
              variant='desktop'
            >
              {strings.navigation.menu.howItWorks}
            </HeaderLink>
            <HeaderLink
              scroll={false}
              href='#cv-preview'
              onClick={() => scrollToSection('cv-preview')}
              variant='desktop'
            >
              {strings.navigation.menu.cvPreview}
            </HeaderLink>
            <HeaderLink
              scroll={false}
              href='#company-discovery'
              onClick={() => scrollToSection('company-discovery')}
              variant='desktop'
            >
              {strings.navigation.menu.companies}
            </HeaderLink>
            <HeaderLink
              scroll={false}
              href='#process'
              onClick={() => scrollToSection('process')}
              variant='desktop'
            >
              {strings.navigation.menu.howToJoin}
            </HeaderLink>
            <HeaderLink
              scroll={false}
              href='#faq'
              onClick={() => scrollToSection('faq')}
              variant='desktop'
            >
              {strings.navigation.menu.faqs}
            </HeaderLink>
          </div>

          <button
            type='button'
            className='md:hidden p-3 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-all duration-200 cursor-pointer'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls='mobile-menu'
            aria-label={
              isMenuOpen
                ? strings.navigation.accessibility.closeMenu
                : strings.navigation.accessibility.openMenu
            }
          >
            {isMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </nav>

        {isMenuOpen && (
          <div
            id='mobile-menu'
            className='md:hidden py-6 border-t border-slate-200/50 bg-white/98 backdrop-blur-md animate-fade-in-scale'
            role='menu'
          >
            <div className='flex flex-col gap-2'>
              <HeaderLink
                href='#home'
                onClick={() => scrollToSection('home')}
                variant='mobile'
              >
                {strings.navigation.menu.home}
              </HeaderLink>
              <HeaderLink
                href='#how-it-works'
                onClick={() => scrollToSection('how-it-works')}
                variant='mobile'
              >
                {strings.navigation.menu.howItWorks}
              </HeaderLink>
              <HeaderLink
                href='#cv-preview'
                onClick={() => scrollToSection('cv-preview')}
                variant='mobile'
              >
                {strings.navigation.mobile.cvPreview}
              </HeaderLink>
              <HeaderLink
                href='#company-discovery'
                onClick={() => scrollToSection('company-discovery')}
                variant='mobile'
              >
                {strings.navigation.mobile.forCompanies}
              </HeaderLink>
              <HeaderLink
                href='#process'
                onClick={() => scrollToSection('process')}
                variant='mobile'
              >
                {strings.navigation.mobile.process}
              </HeaderLink>
              <HeaderLink
                href='#faq'
                onClick={() => scrollToSection('faq')}
                variant='mobile'
              >
                {strings.navigation.mobile.faq}
              </HeaderLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
