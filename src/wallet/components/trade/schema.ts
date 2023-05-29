import { z } from 'zod';

import { WalletTradeType } from '../../const';
import { WalletBalance } from '../../types';

const WalletTradeFormSchema = z.object({
  tradeType: z.nativeEnum(WalletTradeType),
  btc: z.number({ invalid_type_error: '' }),
  usd: z.number({ invalid_type_error: '' }),
});

export const getWalletTradeFormSchema = (
  balance?: WalletBalance,
  btcPrice?: number
) => {
  if (!balance || !btcPrice) return WalletTradeFormSchema;

  return WalletTradeFormSchema.superRefine((data, ctx) => {
    if (
      data.usd > 0 &&
      data.tradeType === WalletTradeType.BUY &&
      data.usd > balance.wallet_usd
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Balance exceeded',
        path: ['usd'],
      });
    }

    if (
      data.btc > 0 &&
      data.tradeType === WalletTradeType.SELL &&
      data.btc > balance.wallet_btc
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Balance exceeded',
        path: ['btc'],
      });
    }
  });
};
