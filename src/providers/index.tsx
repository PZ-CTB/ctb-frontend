import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { useLocation } from 'react-router-dom';

import AuthProvider from 'auth/context';
import Routes from 'routes';
import RQueryClientProvider from 'rquery/provider';
import ThemeProvider from 'theme/provider';
import UserProvider from 'user/context';
import useRedirectOnMount from 'utils/useRedirectOnMount';

type Props = {
  children: React.ReactNode;
};

const Providers: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  useRedirectOnMount(Routes.App(), location.pathname === Routes.Home());

  return (
    <RQueryClientProvider>
      <AuthProvider>
        <UserProvider>
          <ThemeProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
            </LocalizationProvider>
          </ThemeProvider>
        </UserProvider>
      </AuthProvider>
    </RQueryClientProvider>
  );
};

export default Providers;
