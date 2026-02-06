import type { ComponentProps } from 'react'

interface BulletListItem {
  id: string
  text: string
}

interface BulletListProps extends ComponentProps<'ul'> {
  items: readonly BulletListItem[]
  variant?: 'disc' | 'custom'
  bulletColor?: 'destructive' | 'success' | 'primary' | 'warning'
  spacing?: 'tight' | 'normal' | 'relaxed'
}

export type { BulletListItem, BulletListProps }
