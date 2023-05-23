import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import AuthProvider from 'auth/context';
import RQueryClientProvider from 'rquery/provider';
import SnackbarProvider from 'snackbar/provider';
import ThemeProvider from 'theme/provider';
import UserProvider from 'user/context';

type Props = {
  children: React.ReactNode;
};

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <RQueryClientProvider>
        <AuthProvider>
          <UserProvider>
            <ThemeProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <SnackbarProvider>{children}</SnackbarProvider>
              </LocalizationProvider>
            </ThemeProvider>
          </UserProvider>
        </AuthProvider>
      </RQueryClientProvider>
    </QueryParamProvider>
  );
};

export default Providers;
