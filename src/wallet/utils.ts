import { WalletTradeType } from './const';
import { WalletTradeFormData } from './types';

export const getWalletTradeFormDefaultValues = () =>
  ({
    tradeType: WalletTradeType.BUY,
    btc: 0,
    usd: 0,
  } satisfies WalletTradeFormData);
