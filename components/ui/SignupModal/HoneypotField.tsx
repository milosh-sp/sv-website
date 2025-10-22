import { Input } from '../Input'
import type { HoneypotFieldProps } from '@/types/SignupModalComponents.types'

/**
 * HoneypotField Component
 * Hidden field for bot detection - not visible to users
 * Single Responsibility: Renders honeypot field for spam prevention
 */
export function HoneypotField({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  label,
}: HoneypotFieldProps) {
  return (
    <div
      className='absolute left-[-9999px] opacity-0 pointer-events-none'
      aria-hidden='true'
    >
      <label htmlFor={id}>{label}</label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        tabIndex={-1}
        autoComplete='off'
        aria-hidden='true'
      />
    </div>
  )
}
