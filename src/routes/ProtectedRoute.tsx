import { Navigate, Outlet } from 'react-router-dom'
import { PATHS } from './paths'

type ProtectedRouteProps = {
  isAuthenticated: boolean
}

export function ProtectedRoute({ isAuthenticated }: ProtectedRouteProps) {
  return isAuthenticated ? <Outlet /> : <Navigate to={PATHS.LOGIN} replace />
}
