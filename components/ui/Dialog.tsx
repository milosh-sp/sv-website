'use client'

import { XIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import CustomDialog from './CustomDialog'
import type { ComponentProps, ReactNode } from 'react'

function Dialog({
  isOpen,
  onClose,
  children,
  ...props
}: ComponentProps<'div'> & {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}) {
  return (
    <CustomDialog isOpen={isOpen} onClose={onClose}>
      <div
        className='fixed top-[50%] left-[50%] max-h-[85vh] w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg focus:outline-none'
        {...props}
      >
        {children}
        <button
          type='button'
          className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
          onClick={onClose}
        >
          <XIcon className='h-5 w-5' />
        </button>
      </div>
    </CustomDialog>
  )
}

function DialogHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='dialog-header'
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='dialog-footer'
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='dialog-title'
      className={cn('text-lg leading-none font-semibold', className)}
      {...props}
    />
  )
}

function DialogDescription({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='dialog-description'
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export { Dialog, DialogHeader, DialogFooter, DialogTitle, DialogDescription }
