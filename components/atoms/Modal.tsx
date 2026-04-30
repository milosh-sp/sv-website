'use client'

import { X } from 'lucide-react'
import { useEffect } from 'react'
import { cn } from '@/lib/utils'
import type { ModalProps } from '@/types/Modal.types'

export function Modal({
  isOpen,
  onClose,
  onOpenChange,
  title,
  description,
  children,
  showCloseButton = true,
  showOverlay = true,
  closeOnOverlayClick = true,
  className,
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose()
      onOpenChange?.(false)
    }
  }

  const handleOverlayKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape' && closeOnOverlayClick) {
      onClose()
      onOpenChange?.(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center',
        showOverlay && 'bg-black/50'
      )}
      onClick={handleOverlayClick}
      onKeyDown={handleOverlayKeyDown}
      role='dialog'
      aria-modal='true'
    >
      <div
        className={cn(
          'bg-white dark:bg-slate-950 rounded-lg shadow-lg',
          'max-w-md w-full mx-4',
          'relative',
          'animate-in fade-in zoom-in-95 duration-200',
          className
        )}
        onClick={(e) => {
          e.stopPropagation()
        }}
        onKeyDown={(e) => {
          e.stopPropagation()
        }}
        role='dialog'
        aria-modal='true'
        aria-labelledby={title ? 'modal-title' : undefined}
        aria-describedby={description ? 'modal-description' : undefined}
      >
        {showCloseButton && (
          <button
            onClick={() => {
              onClose()
              onOpenChange?.(false)
            }}
            className={cn(
              'absolute top-4 right-4 p-1',
              'hover:bg-slate-100 dark:hover:bg-slate-800',
              'rounded-md transition-colors',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
              'z-10'
            )}
            aria-label='Close modal'
            type='button'
          >
            <X className='w-5 h-5' aria-hidden='true' />
          </button>
        )}

        <div className='p-6 space-y-4'>
          {title && (
            <h2
              id='modal-title'
              className={cn(
                'text-lg font-semibold',
                'text-slate-900 dark:text-slate-50'
              )}
            >
              {title}
            </h2>
          )}

          {description && (
            <p
              id='modal-description'
              className={cn(
                'text-sm text-slate-600 dark:text-slate-400',
                title && 'mt-2'
              )}
            >
              {description}
            </p>
          )}

          <div className={cn(title || description ? 'mt-6' : '')}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
