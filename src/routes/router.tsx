import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '@/pages/Login/Login'
import { PATHS } from './paths'

type AppRouterProps = {
  isAuthenticated: boolean
  onLoginSuccess: (token: string) => void
}

export function AppRouter({ isAuthenticated, onLoginSuccess }: AppRouterProps) {
  const entryPath = isAuthenticated ? PATHS.HOME : PATHS.LOGIN

  return (
    <Routes>
      <Route path={PATHS.ROOT} element={<Navigate to={entryPath} replace />} />
      <Route
        path={PATHS.LOGIN}
        element={
          isAuthenticated ? (
            <Navigate to={PATHS.HOME} replace />
          ) : (
            <Login onLoginSuccess={onLoginSuccess} />
          )
        }
      />
    </Routes>
  )
}
