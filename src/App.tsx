import { useState } from 'react'
import { AppRouter } from '@/routes/router'
import { AUTH_TOKEN_KEY } from '@/services/api'

function hasStoredToken(): boolean {
  return localStorage.getItem(AUTH_TOKEN_KEY) !== null
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasStoredToken)

  function handleLoginSuccess(token: string) {
    localStorage.setItem(AUTH_TOKEN_KEY, token)
    setIsAuthenticated(true)
  }

  return <AppRouter isAuthenticated={isAuthenticated} onLoginSuccess={handleLoginSuccess} />
}

export default App
