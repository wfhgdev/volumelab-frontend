import { useState, type SubmitEvent } from 'react'
import { Button } from '@/components/atoms/Button'
import { TextLink } from '@/components/atoms/TextLink'
import { FormField } from '@/components/molecules/FormField'
import { PATHS } from '@/routes/paths'
import type { LoginCredentials } from '@/types/auth'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

type LoginFormProps = {
  onSubmit: (credentials: LoginCredentials) => Promise<void>
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setErrorMessage('Introduce un email válido.')
      return
    }
    if (!password) {
      setErrorMessage('Introduce tu contraseña.')
      return
    }
    setErrorMessage(null)
    setIsSubmitting(true)
    try {
      await onSubmit({ email, password })
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Error inesperado.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FormField
        id="email"
        label="Email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <FormField
        id="password"
        label="Contraseña"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="mt-8"
      />

      {errorMessage && (
        <p role="alert" className="mt-4 text-sm text-danger">
          {errorMessage}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting} className="mt-10">
        {isSubmitting ? 'Entrando…' : 'Iniciar sesión'}
      </Button>

      <TextLink
        to={PATHS.FORGOT_PASSWORD}
        className="mt-6 block text-center text-base font-medium"
      >
        ¿Olvidaste tu contraseña?
      </TextLink>
    </form>
  )
}
