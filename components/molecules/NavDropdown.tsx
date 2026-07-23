'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { HeaderLink } from '@/components/molecules/HeaderLink'
import type { NavMenuItem } from '@/lib/navigationData'

interface NavDropdownProps {
  label: string
  items: readonly NavMenuItem[]
  variant?: 'desktop' | 'mobile'
  onItemClick?: (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: NavMenuItem
  ) => void
}

export function NavDropdown({
  label,
  items,
  variant = 'desktop',
  onItemClick,
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
        <button
          type='button'
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          className={cn(
            'w-full flex items-center justify-between',
            'text-left py-3 px-4 rounded-lg font-medium cursor-pointer',
            'text-slate-700 hover:text-primary hover:bg-primary/10',
            'transition-all duration-200'
          )}
        >
          <span>{label}</span>
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform duration-200',
              open && 'rotate-180'
            )}
            aria-hidden='true'
          />
        </button>
        {open && (
          <ul className={cn('flex flex-col gap-1 pl-4 mt-1 list-none m-0 p-0')}>
            {items.map((item) => (
              <li key={item.id} role='none'>
                <HeaderLink
                  href={item.href}
                  variant='mobile'
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
      <button
        type='button'
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup='true'
        aria-expanded={open}
        className={cn(
          'flex items-center gap-1 py-2 px-1 font-medium cursor-pointer',
          'text-slate-700 hover:text-primary transition-all duration-200'
        )}
      >
        <span>{label}</span>
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform duration-200',
            open && 'rotate-180'
          )}
          aria-hidden='true'
        />
      </button>
      {open && (
        <div
          className={cn(
            // pt-2 bridges the gap so hover doesn't flicker between button and panel
            'absolute left-0 top-full min-w-56 pt-2 z-50'
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
                  className={cn('block')}
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
