import { post } from '../api';

import { ApiPostWalletData } from './types';

export const API_ROOT_PATH = '/wallet';

export const getWalletBalanceApiPath = () => `${API_ROOT_PATH}/balance`;

export const postWalletDeposit = (data: ApiPostWalletData) =>
  post(`${API_ROOT_PATH}/deposit`, data);

export const postWalletWithdraw = (data: ApiPostWalletData) =>
  post(`${API_ROOT_PATH}/withdraw`, data);
