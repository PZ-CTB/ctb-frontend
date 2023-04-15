import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { Button } from '@mui/material';
import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import styled from 'styled-components';

import Form from 'components/form';
import NumberInput from 'components/form/numberInput';
import { User } from 'user/types';

import { TransactionForm, getTransactionFormSchema } from './schema';
import ButtonGroup from './toggleButtonGroup';
import { getTransactionFormDefaultValues, TransactionType } from './utils';

type Props = {
  user: User;
};

const UserWalletForm: React.FC<Props> = ({ user }) => {
  const methods = useForm<TransactionForm>({
    defaultValues: getTransactionFormDefaultValues(),
    resolver: zodResolver(getTransactionFormSchema(user.wallet_usd)),
  });

  const { handleSubmit, control } = methods;

  const amount = useWatch({ control, name: 'amount' });
  const transactionType = useWatch({ control, name: 'transactionType' });

  const onSubmit = handleSubmit((data: TransactionForm) => {
    const sign = transactionType === TransactionType.DEPOSIT ? '+' : '-';
    console.log(sign + data.amount + '$');
  });

  const disabledSubmitButton = amount <= 0;

  return (
    <StyledForm methods={methods} onSubmit={onSubmit}>
      <ButtonGroup control={methods.control} setValue={methods.setValue} />
      <NumberInput name="amount" label="Amount" />
      <div>
        <StyledButton disabled={disabledSubmitButton} />
      </div>
    </StyledForm>
  );
};

export default UserWalletForm;

const StyledForm = styled(Form)`
  display: flex;
  flex-flow: column wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  gap: 1.5rem;
` as typeof Form;

const StyledButton = styled(Button).attrs(() => ({
  type: 'submit',
  variant: 'contained',
  children: 'Submit',
}))``;
