import { useEffect, useRef, useState } from 'react'
import { defaultDropdownFilter } from '@/lib/utils'
import type { DropdownOption } from '@/types/SearchableDropdown.types'
import type {
  UseSearchableDropdownProps,
  UseSearchableDropdownReturn,
} from '@/types/UseSearchableDropdown.types'

export function useSearchableDropdown<T = string>({
  options,
  value: controlledValue,
  defaultValue,
  onChange,
  filterFn,
  disabled = false,
  loading = false,
}: UseSearchableDropdownProps<T>): UseSearchableDropdownReturn<T> {
  const isControlled = controlledValue !== undefined
  const [internalValue, setInternalValue] = useState<T | null>(
    defaultValue ?? null
  )
  const currentValue = isControlled ? controlledValue : internalValue

  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const listboxRef = useRef<HTMLDivElement>(null)

  const filteredOptions = (() => {
    if (!searchQuery) return options

    const filterFunction = filterFn ?? defaultDropdownFilter
    return options.filter((option) => filterFunction(option, searchQuery))
  })()

  const selectedOption =
    options.find((opt) => opt.value === currentValue) ?? null

  const handleValueChange = (newValue: T | null) => {
    if (!isControlled) {
      setInternalValue(newValue)
    }
    onChange?.(newValue)
  }

  const handleSelect = (option: DropdownOption<T>) => {
    if (option.disabled) return

    handleValueChange(option.value)
    setIsOpen(false)
    setSearchQuery('')
    triggerRef.current?.focus()
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleValueChange(null)
    setSearchQuery('')
  }

  const handleToggle = () => {
    if (disabled || loading) return
    setIsOpen((prev) => !prev)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled || loading) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
        } else {
          setHighlightedIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : prev
          )
        }
        break

      case 'ArrowUp':
        e.preventDefault()
        if (isOpen) {
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev))
        }
        break

      case 'Enter':
        e.preventDefault()
        if (isOpen && filteredOptions[highlightedIndex]) {
          handleSelect(filteredOptions[highlightedIndex])
        } else if (!isOpen) {
          setIsOpen(true)
        }
        break

      case 'Escape':
        e.preventDefault()
        setIsOpen(false)
        setSearchQuery('')
        triggerRef.current?.focus()
        break

      case 'Tab':
        if (isOpen) {
          setIsOpen(false)
          setSearchQuery('')
        }
        break

      default:
        break
    }
  }

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    setHighlightedIndex(0)
  }, [])

  useEffect(() => {
    const highlightedElement = listboxRef.current?.children[
      highlightedIndex
    ] as HTMLElement
    highlightedElement?.scrollIntoView({ block: 'nearest' })
  }, [highlightedIndex])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
        setSearchQuery('')
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return {
    isOpen,
    searchQuery,
    highlightedIndex,
    currentValue,
    selectedOption,
    filteredOptions,
    containerRef,
    triggerRef,
    searchInputRef,
    listboxRef,
    setIsOpen,
    setSearchQuery,
    setHighlightedIndex,
    handleValueChange,
    handleSelect,
    handleClear,
    handleToggle,
    handleKeyDown,
  }
}
