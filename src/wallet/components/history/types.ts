export type WalletTransaction = {
  timestamp: string;
  type: string;
  amount_btc: number;
  amount_usd: number;
  total_btc_after_transaction: number;
  total_usd_after_transaction: number;
};
