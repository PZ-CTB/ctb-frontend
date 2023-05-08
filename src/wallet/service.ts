import { postWalletDeposit, postWalletWithdraw } from './api';
import { invalidateUseWalletBalance } from './rquery';
import { ApiPostWalletData } from './types';

export const walletDepositService = async (data: ApiPostWalletData) => {
  await postWalletDeposit(data);
  await invalidateUseWalletBalance();
};

export const walletWithdrawService = async (data: ApiPostWalletData) => {
  await postWalletWithdraw(data);
  await invalidateUseWalletBalance();
};
