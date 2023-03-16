import React from 'react';
import { QueryClientProvider } from 'react-query';

import queryClient from './client';

type Props = {
  children: React.ReactNode;
};

const RQueryClientProvider: React.FC<Props> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default RQueryClientProvider;
