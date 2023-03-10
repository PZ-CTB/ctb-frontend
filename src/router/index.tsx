import { createBrowserRouter, Navigate } from 'react-router-dom'

import AppPage from 'app/'
import StatisticsPage from 'app/statistics'
import LoginPage from 'auth/login'
import RegisterPage from 'auth/register'
import ResetPasswordPage from 'auth/resetPassword'
import { Routes } from 'routes'
import JakubSandboxPage from 'sandbox/jakub'
import MirekSandboxPage from 'sandbox/mirek'
import WiktorSandboxPage from 'sandbox/wiktor'

import ProtectedRoute from './private'

export const BrowserRouter = createBrowserRouter([
  {
    path: Routes.HomeUrl(),
    element: <Navigate to="/app" />,
  },
  {
    path: Routes.AppUrl(),
    element: (
      <ProtectedRoute>
        <AppPage />
      </ProtectedRoute>
    ),
  },
  {
    path: Routes.StatisticsUrl(),
    element: (
      <ProtectedRoute>
        <StatisticsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: Routes.LoginUrl(),
    element: <LoginPage />,
  },
  {
    path: Routes.RegisterUrl(),
    element: <RegisterPage />,
  },
  {
    path: Routes.ResetPasswordUrl(':uid', ':token'),
    element: <ResetPasswordPage />,
  },
  {
    path: Routes.ResetPasswordUrl(),
    element: <ResetPasswordPage />,
  },
  {
    path: Routes.SandboxUrl('mirek'),
    element: <MirekSandboxPage />,
  },
  {
    path: Routes.SandboxUrl('jakub'),
    element: <JakubSandboxPage />,
  },
  {
    path: Routes.SandboxUrl('wiktor'),
    element: <WiktorSandboxPage />,
  },
])
