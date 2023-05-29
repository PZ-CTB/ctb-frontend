import { TransactionFormData, TransactionType } from '../../types';

export const getTransactionFormDefaultValues = () => {
  return {
    amount: 0,
    transactionType: TransactionType.DEPOSIT,
  } satisfies TransactionFormData;
};
