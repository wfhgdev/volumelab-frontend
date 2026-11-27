import { Link, type LinkProps } from 'react-router-dom'

export function TextLink({ className = '', ...props }: LinkProps) {
  return (
    <Link
      className={`text-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light ${className}`}
      {...props}
    />
  )
}
