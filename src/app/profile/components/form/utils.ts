import { TransactionForm } from './schema';

export enum TransactionType {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}

export const getTransactionFormDefaultValues = (): TransactionForm => {
  return { amount: 0, transactionType: TransactionType.DEPOSIT };
};
