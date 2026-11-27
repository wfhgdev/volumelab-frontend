import { login as loginRequest } from '@/services/authService'
import type { LoginCredentials } from '@/types/auth'

export function useAuth(onAuthenticated: (token: string) => void) {
  async function login(credentials: LoginCredentials) {
    const { token } = await loginRequest(credentials)
    onAuthenticated(token)
  }

  return { login }
}
