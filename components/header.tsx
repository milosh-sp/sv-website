'use client'

import { useState } from 'react'
import { Menu, X, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { strings } from '@/lib/strings'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
            <div className='p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md'>
              <Shield className='h-6 w-6 text-white' aria-hidden='true' />
            </div>
            <span className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>
              {strings.branding.companyName}
            </span>
          </Link>

          <div className='hidden md:flex items-center gap-8'>
            <button
              type='button'
              onClick={() => scrollToSection('how-it-works')}
              className='text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 px-1 relative group cursor-pointer'
              aria-label={strings.navigation.accessibility.goToHowItWorks}
            >
              {strings.navigation.menu.howItWorks}
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full' />
            </button>
            <button
              type='button'
              onClick={() => scrollToSection('cv-preview')}
              className='text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 px-1 relative group cursor-pointer'
              aria-label={strings.navigation.accessibility.goToCvPreview}
            >
              {strings.navigation.menu.cvPreview}
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full' />
            </button>
            <button
              type='button'
              onClick={() => scrollToSection('company-discovery')}
              className='text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 px-1 relative group cursor-pointer'
              aria-label={strings.navigation.accessibility.goToCompanyDiscovery}
            >
              {strings.navigation.menu.companies}
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full' />
            </button>
            <button
              type='button'
              onClick={() => scrollToSection('process')}
              className='text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 px-1 relative group cursor-pointer'
              aria-label={strings.navigation.accessibility.goToProcess}
            >
              {strings.navigation.menu.howToJoin}
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full' />
            </button>
            <button
              type='button'
              onClick={() => scrollToSection('faq')}
              className='text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 px-1 relative group'
              aria-label={strings.navigation.accessibility.goToFaq}
            >
              {strings.navigation.menu.faqs}
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full' />
            </button>
            <Button
              onClick={() => scrollToSection('home')}
              className='btn-primary h-11 px-6 text-base'
              aria-label={strings.navigation.accessibility.scrollToHero}
            >
              {strings.navigation.menu.joinCommunity}
            </Button>
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
              <button
                type='button'
                onClick={() => scrollToSection('home')}
                className='text-left text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 font-medium py-3 px-4 rounded-lg cursor-pointer'
                role='menuitem'
              >
                {strings.navigation.menu.home}
              </button>
              <button
                type='button'
                onClick={() => scrollToSection('how-it-works')}
                className='text-left text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 font-medium py-3 px-4 rounded-lg cursor-pointer'
                role='menuitem'
              >
                {strings.navigation.menu.howItWorks}
              </button>
              <button
                type='button'
                onClick={() => scrollToSection('cv-preview')}
                className='text-left text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 font-medium py-3 px-4 rounded-lg cursor-pointer'
                role='menuitem'
              >
                {strings.navigation.mobile.cvPreview}
              </button>
              <button
                type='button'
                onClick={() => scrollToSection('company-discovery')}
                className='text-left text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 font-medium py-3 px-4 rounded-lg cursor-pointer'
                role='menuitem'
              >
                {strings.navigation.mobile.forCompanies}
              </button>
              <button
                type='button'
                onClick={() => scrollToSection('process')}
                className='text-left text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 font-medium py-3 px-4 rounded-lg cursor-pointer'
                role='menuitem'
              >
                {strings.navigation.mobile.process}
              </button>
              <button
                type='button'
                onClick={() => scrollToSection('faq')}
                className='text-left text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 font-medium py-3 px-4 rounded-lg cursor-pointer'
                role='menuitem'
              >
                {strings.navigation.mobile.faq}
              </button>
              <div className='pt-2 mt-2 border-t border-slate-200'>
                <Button
                  onClick={() => scrollToSection('home')}
                  className='w-full btn-primary h-12 text-base'
                  role='menuitem'
                >
                  {strings.navigation.menu.joinCommunity}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
