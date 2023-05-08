import { get } from 'api';
import { useReactQuery } from 'rquery';
import queryClient from 'rquery/client';

import { getWalletBalanceApiPath } from './api';
import { WalletBalance } from './types';

export const useWalletBalance = () =>
  useReactQuery<WalletBalance>(get, getWalletBalanceApiPath());

export const invalidateUseWalletBalance = () =>
  queryClient.invalidateQueries(getWalletBalanceApiPath());
