import { isAxiosError } from 'axios'
import type { LoginCredentials, LoginResponse } from '@/types/auth'
import api from './api'

const LOGIN_ENDPOINT = '/auth/login'

function buildLoginErrorMessage(error: unknown): string {
  if (!isAxiosError(error)) {
    return 'Ha ocurrido un error inesperado.'
  }
  if (!error.response) {
    return 'No se pudo conectar con el servidor.'
  }
  if (error.response.status === 401) {
    return 'Email o contraseña incorrectos.'
  }
  return 'No se pudo iniciar sesión. Inténtalo de nuevo.'
}

export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
  try {
    const response = await api.post<LoginResponse>(LOGIN_ENDPOINT, credentials, {
      skipAuthRedirect: true,
    })
    return response.data
  } catch (error) {
    throw new Error(buildLoginErrorMessage(error), { cause: error })
  }
}
