import React from 'react'
import { Navigate } from 'react-router-dom'

import { Routes } from 'routes'

type Props = {
  children: React.ReactElement
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const isAuthenticated = false

  if (isAuthenticated) return children

  return <Navigate to={Routes.LoginUrl()} replace />
}

export default ProtectedRoute
