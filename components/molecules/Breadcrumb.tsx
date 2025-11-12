'use client'

import { useEffect, useMemo } from 'react'
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
  ...props
}: BreadcrumbProps) {
  const breadcrumbItems = useMemo(
    () =>
      showHome
        ? [{ name: strings.navigation.menu.home, url: '/' }, ...items]
        : items,
    [showHome, items]
  )

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'breadcrumb-schema'
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
      aria-label='Breadcrumb navigation'
      className={cn(
        'flex items-center space-x-1 text-sm text-slate-600',
        className
      )}
      {...props}
    >
      <ol
        className='flex items-center space-x-1 list-none m-0 p-0'
        itemScope
        itemType='https://schema.org/BreadcrumbList'
      >
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1
          const isHome = index === 0 && showHome
          const position = index + 1

          return (
            <li
              key={item.url}
              className='flex items-center'
              itemProp='itemListElement'
              itemScope
              itemType='https://schema.org/ListItem'
            >
              {index > 0 && (
                <ChevronRight
                  className='h-4 w-4 text-slate-400 mx-1'
                  aria-hidden='true'
                  role='presentation'
                />
              )}

              {isLast ? (
                <span
                  className='font-medium text-slate-900'
                  aria-current='page'
                  itemProp='name'
                >
                  {isHome && (
                    <Home
                      className='h-4 w-4 mr-1 inline'
                      aria-hidden='true'
                      role='presentation'
                    />
                  )}
                  {item.name}
                  <meta itemProp='position' content={String(position)} />
                </span>
              ) : (
                <Link
                  href={item.url}
                  className='hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm px-1 py-0.5'
                  aria-label={`Navigate to ${item.name}`}
                  itemProp='item'
                >
                  {isHome && (
                    <Home
                      className='h-4 w-4 mr-1 inline'
                      aria-hidden='true'
                      role='presentation'
                    />
                  )}
                  <span itemProp='name'>{item.name}</span>
                  <meta itemProp='position' content={String(position)} />
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
