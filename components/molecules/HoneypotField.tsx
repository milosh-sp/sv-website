import type { HoneypotFieldProps } from '@/types/SignupModalComponents.types'
import { Input } from '@/components/atoms/Input'

export function HoneypotField({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  label,
  className,
  ...props
}: HoneypotFieldProps) {
  return (
    <div
      className='absolute left-[-9999px] opacity-0 pointer-events-none'
      aria-hidden='true'
      {...props}
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
