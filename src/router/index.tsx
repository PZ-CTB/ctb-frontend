import { createBrowserRouter, Outlet } from 'react-router-dom';

import AppPage from 'app/';
import DashboardPage from 'app/dashboard';
import StatisticsPage from 'app/statistics';
import LoginPage from 'auth/login';
import RegisterPage from 'auth/register';
import ResetPasswordPage from 'auth/resetPassword';
import ErrorPage from 'pages/error';
import Providers from 'providers';
import Routes from 'routes';
import MirekSandboxPage from 'sandbox/mirek';
import WiktorSandboxPage from 'sandbox/wiktor';

import ProtectedRoute from './private';

export const BrowserRouter = createBrowserRouter([
  {
    path: Routes.Home(),
    element: (
      <Providers>
        <Outlet />
      </Providers>
    ),
    children: [
      {
        path: Routes.App(),
        element: (
          <ProtectedRoute>
            <AppPage />
          </ProtectedRoute>
        ),
        children: [
          {
            path: Routes.Dashboard(),
            element: <DashboardPage />,
          },
          {
            path: Routes.Statistics(),
            element: <StatisticsPage />,
          },
        ],
      },
      {
        path: Routes.Login(),
        element: <LoginPage />,
      },
      {
        path: Routes.Register(),
        element: <RegisterPage />,
      },
      {
        path: Routes.ResetPassword(':uid', ':token'),
        element: <ResetPasswordPage />,
      },
      {
        path: Routes.ResetPassword(),
        element: <ResetPasswordPage />,
      },
      {
        path: Routes.Sandbox('mirek'),
        element: <MirekSandboxPage />,
      },
      {
        path: Routes.Sandbox('wiktor'),
        element: <WiktorSandboxPage />,
      },
      {
        path: `*`,
        element: (
          <ProtectedRoute>
            <AppPage />
          </ProtectedRoute>
        ),
        children: [
          {
            path: `*`,
            element: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);
