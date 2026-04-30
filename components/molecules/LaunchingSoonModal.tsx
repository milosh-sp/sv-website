'use client'

import { Modal } from '@/components/atoms/Modal'
import { HeroButtons } from '@/components/molecules/HeroButtons'
import { useLocalStorageModal } from '@/hooks/useLocalStorageModal'
import { strings } from '@/lib/strings'
import { Suspense } from 'react'
import { cn } from '@/lib/utils'

interface LaunchingSoonModalProps {
  title?: string
  description?: string
  storageKey?: string
}

const LAUNCHING_SOON_STORAGE_KEY = 'skill-verdict-launching-soon-dismissed'

function LaunchingSoonModalContent({
  title = strings.launchingSoonModal.title,
  description = strings.launchingSoonModal.description,
  storageKey = LAUNCHING_SOON_STORAGE_KEY,
}: LaunchingSoonModalProps) {
  const { isOpen, handleClose, isMounted } = useLocalStorageModal({
    storageKey,
    defaultOpen: true,
  })

  if (!isMounted) {
    return null
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={title}
      showCloseButton={true}
      closeOnOverlayClick={true}
      className={cn('max-w-md')}
    >
      <div className={cn('space-y-6')}>
        <p className={cn('text-sm text-slate-600 dark:text-slate-400')}>
          {description}
        </p>
      </div>
    </Modal>
  )
}

export function LaunchingSoonModal(props: LaunchingSoonModalProps) {
  return (
    <Suspense fallback={null}>
      <LaunchingSoonModalContent {...props} />
    </Suspense>
  )
}
