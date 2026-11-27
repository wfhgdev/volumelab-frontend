import { Logo } from '@/components/atoms/Logo'
import { TextLink } from '@/components/atoms/TextLink'
import { LoginForm } from '@/components/organisms/LoginForm'
import { AuthLayout } from '@/components/templates/AuthLayout'
import { useAuth } from '@/hooks/useAuth'
import { PATHS } from '@/routes/paths'

type LoginProps = {
  onLoginSuccess: (token: string) => void
}

export function Login({ onLoginSuccess }: LoginProps) {
  const { login } = useAuth(onLoginSuccess)

  return (
    <AuthLayout
      footer={
        <>
          ¿No tienes cuenta?{' '}
          <TextLink to={PATHS.REGISTER} className="underline">
            Crear cuenta
          </TextLink>
        </>
      }
    >
      <Logo />
      <h1 className="mt-6 text-[22px] font-bold tracking-[0.05em] text-accent-light">
        BIENVENIDO A VOLUMELAB
      </h1>
      <div className="mt-24 w-full max-w-[280px]">
        <LoginForm onSubmit={login} />
      </div>
    </AuthLayout>
  )
}
