import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`h-[50px] w-full rounded-[30px] bg-accent text-xl font-medium tracking-[0.04em] text-on-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light disabled:opacity-60 ${className}`}
      {...props}
    />
  )
};
export default Button; 
