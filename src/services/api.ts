import axios from 'axios'
import { API_URL } from '@/config/env'
import { PATHS } from '@/routes/paths'

declare module 'axios' {
  interface AxiosRequestConfig {
    skipAuthRedirect?: boolean
  }
}

export const AUTH_TOKEN_KEY = 'authToken'

const REQUEST_TIMEOUT_MS = 10000
const UNAUTHORIZED_STATUSES = [401, 403]

const api = axios.create({
  baseURL: API_URL,
  timeout: REQUEST_TIMEOUT_MS,
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status
    const isAuthRequest = error.config?.skipAuthRedirect === true
    if (UNAUTHORIZED_STATUSES.includes(status) && !isAuthRequest) {
      localStorage.removeItem(AUTH_TOKEN_KEY)
      window.location.assign(PATHS.LOGIN)
    }
    return Promise.reject(error)
  },
)

export default api
