import { createBrowserRouter, Outlet } from 'react-router-dom';

import AppPage from 'app/';
import DashboardPage from 'app/dashboard';
import ProfilePage from 'app/profile/components';
import StatisticsPage from 'app/statistics';
import LoginPage from 'auth/login';
import RegisterPage from 'auth/register';
import ResetPasswordPage from 'auth/resetPassword';
import ErrorPage from 'pages/error';
import Providers from 'providers';
import Routes from 'routes';

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
          {
            path: Routes.Profile(),
            element: <ProfilePage />,
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
