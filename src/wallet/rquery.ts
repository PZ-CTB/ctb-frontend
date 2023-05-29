import { get } from 'api';
import { useReactQuery } from 'rquery';
import queryClient from 'rquery/client';

import { getWalletBalanceApiPath, getWalletHistoryApiPath } from './api';
import { WalletTransaction } from './components/history/types';
import { WalletBalance } from './types';

export const useWalletBalance = () =>
  useReactQuery<WalletBalance>(get, getWalletBalanceApiPath());

export const invalidateUseWalletBalance = () =>
  queryClient.invalidateQueries(getWalletBalanceApiPath());

export const useWalletHistory = () =>
  useReactQuery<{ transactions: WalletTransaction[] }>(
    get,
    getWalletHistoryApiPath()
  );
