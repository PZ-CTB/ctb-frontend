import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from 'react';
import { Control, Controller, UseFormSetValue } from 'react-hook-form';

import { TransactionForm } from './schema';
import { TransactionType } from './utils';

type ButtonGroupProps = {
  control: Control<TransactionForm>;
  setValue: UseFormSetValue<TransactionForm>;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  control,
  setValue,
  ...buttonGroupProps
}) => {
  return (
    <Controller
      name="transactionType"
      control={control}
      render={({ field }) => (
        <ToggleButtonGroup
          {...field}
          onChange={(
            event: React.MouseEvent<HTMLElement>,
            type: TransactionType | null
          ) => {
            if (type !== null && event) {
              setValue(field.name, type);
            }
          }}
          exclusive
          {...buttonGroupProps}
        >
          {(
            Object.keys(TransactionType) as (keyof typeof TransactionType)[]
          ).map((key, index) => (
            <ToggleButton key={index} value={TransactionType[key]}>
              {key}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    />
  );
};

export default ButtonGroup;
