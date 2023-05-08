import { WalletBalance } from 'wallet/types';

export type User = {
  email: string;
  uuid: string;
} & WalletBalance;
