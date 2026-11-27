import type { ReactNode } from 'react'

type AuthLayoutProps = {
  children: ReactNode
  footer?: ReactNode
}

export function AuthLayout({ children, footer }: AuthLayoutProps) {
  return (
    <div className="flex min-h-dvh flex-col items-center px-12 pb-8 pt-16">
      <main className="flex w-full flex-1 flex-col items-center">{children}</main>
      {footer && <footer className="mt-10 text-base text-accent-light">{footer}</footer>}
    </div>
  )
}
