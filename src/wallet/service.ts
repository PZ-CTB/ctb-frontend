import {
  postWalletBuy,
  postWalletDeposit,
  postWalletSell,
  postWalletWithdraw,
} from './api';
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

export const walletBuyService = async (data: ApiPostWalletData) => {
  await postWalletBuy(data);
  await invalidateUseWalletBalance();
};

export const walletSellService = async (data: ApiPostWalletData) => {
  await postWalletSell(data);
  await invalidateUseWalletBalance();
};
