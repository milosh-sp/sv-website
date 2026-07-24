'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { strings } from '@/lib/strings'
import { HeaderLink } from '@/components/molecules/HeaderLink'
import type { NavDropdownProps } from '@/types/NavDropdown.types'
import type { NavMenuItem } from '@/types/Navigation.types'

export function NavDropdown({
  label,
  href,
  items,
  variant = 'desktop',
  onItemClick,
  onLabelClick,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLLIElement>(null)

  // Close on Escape or outside click (desktop popover only)
  useEffect(() => {
    if (!open || variant !== 'desktop') return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handlePointerDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handlePointerDown)
    }
  }, [open, variant])

  const handleLabelClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onLabelClick?.(event, href)
    setOpen(false)
  }

  const handleItemClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: NavMenuItem
  ) => {
    onItemClick?.(event, item)
    setOpen(false)
  }

  if (variant === 'mobile') {
    return (
      <li role='none' className={cn('list-none')}>
        <div className={cn('flex items-center')}>
          <HeaderLink
            href={href}
            variant='mobile'
            className={cn('flex-1 font-semibold text-slate-900')}
            onClick={handleLabelClick}
          >
            {label}
          </HeaderLink>
          <button
            type='button'
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label={strings.navigation.accessibility.openSubmenu}
            className={cn(
              'p-3 rounded-lg cursor-pointer',
              'text-slate-700 hover:text-primary hover:bg-primary/10',
              'transition-all duration-200'
            )}
          >
            <ChevronDown
              className={cn(
                'h-4 w-4 transition-transform duration-200',
                open && 'rotate-180'
              )}
              aria-hidden='true'
            />
          </button>
        </div>
        {open && (
          <ul
            className={cn(
              'flex flex-col gap-0.5 mt-1 mb-2 ml-4 pl-4',
              'border-l-2 border-slate-200',
              'list-none m-0 p-0'
            )}
          >
            {items.map((item) => (
              <li key={item.id} role='none'>
                <HeaderLink
                  href={item.href}
                  variant='mobile'
                  className={cn(
                    'text-sm font-normal text-slate-600',
                    'py-2 px-3 rounded-md',
                    'hover:text-primary hover:bg-primary/5'
                  )}
                  onClick={(event) => handleItemClick(event, item)}
                >
                  {item.label}
                </HeaderLink>
              </li>
            ))}
          </ul>
        )}
      </li>
    )
  }

  return (
    <li
      ref={containerRef}
      className={cn('relative')}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className={cn('flex items-center gap-0.5')}>
        <HeaderLink href={href} variant='desktop' onClick={handleLabelClick}>
          {label}
        </HeaderLink>
        <button
          type='button'
          onClick={() => setOpen((prev) => !prev)}
          aria-haspopup='true'
          aria-expanded={open}
          aria-label={strings.navigation.accessibility.openSubmenu}
          className={cn(
            'p-1 rounded-md cursor-pointer',
            'text-slate-700 hover:text-primary transition-all duration-200'
          )}
        >
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform duration-200',
              open && 'rotate-180'
            )}
            aria-hidden='true'
          />
        </button>
      </div>
      {open && (
        <div
          className={cn(
            // pt-2 bridges the gap so hover doesn't flicker between button and panel
            'absolute left-0 top-full w-max pt-2 z-50'
          )}
        >
          <ul
            className={cn(
              'flex flex-col gap-1 p-2 list-none m-0',
              'bg-white',
              'border border-slate-200/50 rounded-lg shadow-lg',
              'animate-nav-dropdown-in'
            )}
          >
            {items.map((item) => (
              <li key={item.id} className={cn('list-none')}>
                <HeaderLink
                  href={item.href}
                  variant='mobile'
                  className={cn('block whitespace-nowrap')}
                  onClick={(event) => handleItemClick(event, item)}
                >
                  {item.label}
                </HeaderLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}
