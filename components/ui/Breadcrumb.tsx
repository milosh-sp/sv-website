/**
 * Breadcrumb navigation component with structured data
 */

'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'
import { generateBreadcrumbSchema } from '@/lib/seo'
import { strings } from '@/lib/strings'
import type { BreadcrumbProps } from '@/types/Breadcrumb.types'

export function Breadcrumb({
  items,
  className,
  showHome = true,
}: BreadcrumbProps) {
  // Prepare items with home if needed
  const breadcrumbItems = showHome
    ? [{ name: strings.navigation.menu.home, url: '/' }, ...items]
    : items

  useEffect(() => {
    // Add breadcrumb structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(
      generateBreadcrumbSchema(breadcrumbItems)
    )
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [breadcrumbItems])

  return (
    <nav
      aria-label={strings.common.accessibility.menu}
      className={cn(
        'flex items-center space-x-1 text-sm text-slate-600',
        className
      )}
    >
      <ol className='flex items-center space-x-1'>
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1
          const isHome = index === 0 && showHome

          return (
            <li key={item.url} className='flex items-center'>
              {index > 0 && (
                <ChevronRight
                  className='h-4 w-4 text-slate-400 mx-1'
                  aria-hidden='true'
                />
              )}

              {isLast ? (
                <span
                  className='font-medium text-slate-900'
                  aria-current='page'
                >
                  {isHome && (
                    <Home className='h-4 w-4 mr-1 inline' aria-hidden='true' />
                  )}
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className='hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm px-1 py-0.5'
                  aria-label={`Go to ${item.name}`}
                >
                  {isHome && (
                    <Home className='h-4 w-4 mr-1 inline' aria-hidden='true' />
                  )}
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
