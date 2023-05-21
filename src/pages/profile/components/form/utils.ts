import { TransactionForm } from './schema';

export enum TransactionType {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}

export const TransactionTypes: Readonly<Record<TransactionType, string>> = {
  [TransactionType.DEPOSIT]: 'Deposit',
  [TransactionType.WITHDRAW]: 'Withdraw',
};

export const getTransactionFormDefaultValues = () => {
  return {
    amount: 0,
    transactionType: TransactionType.DEPOSIT,
  } satisfies TransactionForm;
};
