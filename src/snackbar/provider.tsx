import { SnackbarProvider as NotiStackSnackbarProvider } from 'notistack';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SnackbarProvider: React.FC<Props> = ({ children }) => {
  return (
    <NotiStackSnackbarProvider maxSnack={3}>
      {children}
    </NotiStackSnackbarProvider>
  );
};

export default SnackbarProvider;
