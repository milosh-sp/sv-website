import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function defaultDropdownFilter<T>(
  option: { label: string; description?: string; value: T },
  query: string
): boolean {
  const searchLower = query.toLowerCase()
  return (
    option.label.toLowerCase().includes(searchLower) ||
    option.description?.toLowerCase().includes(searchLower) ||
    false
  )
}

export { cn, defaultDropdownFilter }
