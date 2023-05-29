import { z } from 'zod';

import { GenericAmountConstraint } from 'utils/zod/utils';

import { TransactionType } from '../../types';

export const getTransactionFormSchema = (maxWithdrawAmount: number) =>
  TransactionSchema.refine(
    (values) =>
      values.transactionType === TransactionType.DEPOSIT ||
      (values.transactionType === TransactionType.WITHDRAW &&
        values.amount <= maxWithdrawAmount),
    {
      message: 'You cannot withdraw more money than you have!',
      path: ['amount'],
    }
  );

export const TransactionSchema = z.object({
  transactionType: z.nativeEnum(TransactionType),
  amount: GenericAmountConstraint,
});
