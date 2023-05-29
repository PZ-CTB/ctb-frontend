import { z } from 'zod';

import { TransactionSchema } from './components/transaction/schema';
import { WalletTradeType } from './const';

export type WalletBalance = {
  wallet_usd: number;
  wallet_btc: number;
};

export type ApiPostWalletData = {
  amount: number;
};

export type WalletTradeFormData = {
  tradeType: WalletTradeType;
  btc: number;
  usd: number;
};

export enum TransactionType {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}

export const TransactionTypes: Readonly<Record<TransactionType, string>> = {
  [TransactionType.DEPOSIT]: 'Deposit',
  [TransactionType.WITHDRAW]: 'Withdraw',
};

export type TransactionFormData = z.infer<typeof TransactionSchema>;
