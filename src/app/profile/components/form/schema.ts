import { z } from 'zod';

import { GenericAmountConstraint } from 'utils/zod/utils';

import { TransactionType } from './utils';

export const TransactionSchema = z.object({
  transactionType: z.nativeEnum(TransactionType),
  amount: GenericAmountConstraint,
});

export type TransactionForm = z.infer<typeof TransactionSchema>;

export const getTransactionFormSchema = (maxWithdrawAmount: number) => {
  return TransactionSchema.refine(
    (v) => {
      return (
        v.transactionType === TransactionType.DEPOSIT ||
        (v.transactionType === TransactionType.WITHDRAW &&
          v.amount <= maxWithdrawAmount)
      );
    },
    {
      message: 'You cannot withdraw more money than you have!',
      path: ['amount'],
    }
  );
};
