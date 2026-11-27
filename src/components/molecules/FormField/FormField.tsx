import type { InputHTMLAttributes } from 'react'
import { TextField } from '@/components/atoms/TextField/TextField'

type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
  error?: string
}

export function FormField({ id, label, error, className = '', ...props }: FormFieldProps) {
  const errorId = `${id}-error`

  return (
    <div className={className}>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <TextField
        id={id}
        placeholder={label}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <p id={errorId} role="alert" className="mt-2 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  )
}
