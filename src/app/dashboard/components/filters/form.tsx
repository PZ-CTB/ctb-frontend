import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { Button } from '@mui/material';
import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import styled from 'styled-components';

import Form from 'components/form';
import DateInput from 'components/form/dateInput';

import { FiltersForm, FiltersFormSchema } from './schema';
import { getFilterFormDefaultValues, minDateBoundary, today } from './utils';

const StockChartFiltersForm: React.FC = () => {
  const methods = useForm<FiltersForm>({
    defaultValues: getFilterFormDefaultValues(),
    resolver: zodResolver(FiltersFormSchema),
  });
  const { handleSubmit, control } = methods;

  const startDate = useWatch({ control, name: 'startDate' });
  const endDate = useWatch({ control, name: 'endDate' });

  const onSubmit = handleSubmit((data: FiltersForm) => {
    console.log(data.startDate.format('YYYY-MM-DD'));
    console.log(data.endDate.format('YYYY-MM-DD'));
  });

  return (
    <StyledForm methods={methods} onSubmit={onSubmit}>
      <DateInput
        name="startDate"
        label="Start Date"
        minDate={minDateBoundary}
        maxDate={endDate}
      />
      <DateInput
        name="endDate"
        label="End Date"
        minDate={startDate}
        maxDate={today}
      />
      <div>
        <DateFilterButton />
      </div>
    </StyledForm>
  );
};

export default StockChartFiltersForm;

const StyledForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
` as typeof Form;

const DateFilterButton = styled(Button).attrs(() => ({
  type: 'submit',
  variant: 'contained',
  children: 'Submit',
}))``;
