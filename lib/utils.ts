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

/**
 * Converts seconds to ISO 8601 duration format (PTxxHxxMxS).
 */
function secondsToISODuration(seconds: number) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  // Pad hours and minutes to two digits, leave seconds as is
  const hoursStr = hours.toString().padStart(2, '0')
  const minutesStr = minutes.toString().padStart(2, '0')

  return `PT${hoursStr}H${minutesStr}M${secs}S`
}

export { cn, defaultDropdownFilter, secondsToISODuration }
