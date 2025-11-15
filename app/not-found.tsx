'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { strings } from '@/lib/strings'
import { Button } from '@/components/atoms/Button'

export default function NotFound() {
  // Icons are embedded in strings
  const HomeIcon = strings.errorPages.notFound.actions.backToHome.icon
  const SearchIcon = strings.errorPages.notFound.actions.benefits.icon
  const ArrowLeftIcon = strings.errorPages.notFound.actions.goBack.icon

  // Set page title for SEO
  useEffect(() => {
    document.title = strings.errorPages.notFound.title
  }, [])
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4'>
      <div className='max-w-md w-full text-center'>
        {/* 404 Visual */}
        <div className='mb-8'>
          <div className='text-8xl font-bold text-blue-600 mb-4'>
            {strings.errorPages.notFound.errorCode}
          </div>
          <div className='w-24 h-1 bg-blue-600 mx-auto rounded-full'></div>
        </div>

        {/* Error Message */}
        <div className='mb-8'>
          <h1 className='text-2xl font-bold text-slate-900 mb-4'>
            {strings.errorPages.notFound.heading}
          </h1>
          <p className='text-slate-600 leading-relaxed'>
            {strings.errorPages.notFound.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className='space-y-4'>
          <Link href='/' className='block'>
            <Button className='w-full' size='lg'>
              <HomeIcon className='h-4 w-4 mr-2' />
              {strings.errorPages.notFound.actions.backToHome.label}
            </Button>
          </Link>

          <div className='flex gap-3'>
            <Link href='/#how-it-works' className='flex-1'>
              <Button variant='outline' className='w-full'>
                <SearchIcon className='h-4 w-4 mr-2' />
                {strings.errorPages.notFound.actions.benefits.label}
              </Button>
            </Link>

            <Button
              variant='outline'
              onClick={() => window.history.back()}
              className='flex-1'
            >
              <ArrowLeftIcon className='h-4 w-4 mr-2' />
              {strings.errorPages.notFound.actions.goBack.label}
            </Button>
          </div>
        </div>

        {/* Helpful Links */}
        <div className='mt-12 pt-8 border-t border-slate-200'>
          <p className='text-sm text-slate-500 mb-4'>
            {strings.errorPages.notFound.helpfulLinks.title}
          </p>
          <div className='space-y-2 text-sm'>
            <Link
              href='/#cv-preview'
              className='block text-blue-600 hover:text-blue-800 transition-colors'
            >
              {strings.errorPages.notFound.helpfulLinks.cvPreview}
            </Link>
            <Link
              href='/#faq'
              className='block text-blue-600 hover:text-blue-800 transition-colors'
            >
              {strings.errorPages.notFound.helpfulLinks.faq}
            </Link>
            <Link
              href='/privacy-policy'
              className='block text-blue-600 hover:text-blue-800 transition-colors'
            >
              {strings.errorPages.notFound.helpfulLinks.privacyPolicy}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
