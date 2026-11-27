import type { InputHTMLAttributes } from 'react'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement>

export function TextField({ className = '', ...props }: TextFieldProps) {
  return (
    <input
      className={`w-full border-0 border-b border-accent-light bg-transparent pb-2 text-base tracking-[0.05em] text-white placeholder:text-placeholder focus:outline-none focus-visible:border-b-2 ${className}`}
      {...props}
    />
  )
}
