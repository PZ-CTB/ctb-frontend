import { createBrowserRouter, Navigate } from 'react-router-dom'

import AppPage from 'app/'
import DashboardPage from 'app/dashboard'
import StatisticsPage from 'app/statistics'
import LoginPage from 'auth/login'
import RegisterPage from 'auth/register'
import ResetPasswordPage from 'auth/resetPassword'
import Routes from 'routes'
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
    children: [
      {
        path: Routes.DashboardUrl(),
        element: <DashboardPage />,
      },
      {
        path: Routes.StatisticsUrl(),
        element: <StatisticsPage />,
      },
    ],
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
