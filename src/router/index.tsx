import { createBrowserRouter, Outlet } from 'react-router-dom';

import LoginPage from 'auth/pages/login';
import RegisterPage from 'auth/pages/register';
import ResetPasswordPage from 'auth/pages/resetPassword';
import Layout from 'layout';
import DashboardPage from 'pages/dashboard';
import ErrorPage from 'pages/error';
import WalletHistoryPage from 'pages/history';
import ProfilePage from 'pages/profile';
import Providers from 'providers';
import Routes from 'routes';

import ProtectedRoute from './private';

export const BrowserRouter = createBrowserRouter([
  {
    path: Routes.Home(),
    element: (
      <Providers>
        <Layout>
          <Outlet />
        </Layout>
      </Providers>
    ),
    children: [
      {
        path: Routes.Dashboard(),
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        ),
      },
      {
        path: Routes.History(),
        element: (
          <ProtectedRoute>
            <WalletHistoryPage />
          </ProtectedRoute>
        ),
      },
      {
        path: Routes.Profile(),
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
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
            <ErrorPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
