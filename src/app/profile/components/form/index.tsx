import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import styled from 'styled-components';

import Form from 'components/form';
import NumberInput from 'components/form/numberInput';
import ToggleButtonGroupInput from 'components/form/toggleButtonGroupInput';
import { User } from 'user/types';

import { getTransactionFormSchema, TransactionForm } from './schema';
import {
  getTransactionFormDefaultValues,
  TransactionType,
  TransactionTypes,
} from './utils';

type Props = {
  user: User;
};

const UserWalletForm: React.FC<Props> = ({ user }) => {
  const methods = useForm<TransactionForm>({
    defaultValues: getTransactionFormDefaultValues(),
    resolver: zodResolver(getTransactionFormSchema(user.wallet_usd)),
  });

  const { handleSubmit, control, clearErrors } = methods;

  const amount = useWatch({ control, name: 'amount' });
  const transactionType = useWatch({ control, name: 'transactionType' });

  // clear errors on transactionType change
  useEffect(() => {
    clearErrors();
  }, [transactionType]);

  const onSubmit = handleSubmit((data: TransactionForm) => {
    const sign = transactionType === TransactionType.DEPOSIT ? '+' : '-';
    console.log(sign + data.amount + '$');
  });

  const disabledSubmitButton = amount <= 0;

  return (
    <StyledForm methods={methods} onSubmit={onSubmit}>
      <ToggleButtonGroupInput
        name="transactionType"
        options={TransactionTypes}
      />
      <NumberInput name="amount" label="Amount" />
      <StyledButton disabled={disabledSubmitButton} />
    </StyledForm>
  );
};

export default UserWalletForm;

const StyledForm = styled(Form)`
  max-width: 15rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
` as typeof Form;

const StyledButton = styled(Button).attrs(() => ({
  type: 'submit',
  variant: 'contained',
  children: 'Submit',
}))``;
