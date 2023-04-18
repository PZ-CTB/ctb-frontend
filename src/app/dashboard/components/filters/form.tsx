import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import styled from 'styled-components';
import { useDebounce } from 'use-debounce';

import { useFiltersQueryParams } from 'app/dashboard/utils';
import Form from 'components/form';
import DateInput from 'components/form/dateInput';
import NumberInput from 'components/form/numberInput';

import { FiltersForm, FiltersFormSchema } from './schema';
import { maxAggregate, minAggregate, minDateBoundary, today } from './utils';

const StockChartFiltersForm = () => {
  const [query, setQuery] = useFiltersQueryParams();

  const methods = useForm<FiltersForm>({
    defaultValues: {
      startDate: dayjs(query.date_from),
      endDate: dayjs(query.date_to),
      aggregate: query.aggregate,
    },
    resolver: zodResolver(FiltersFormSchema),
  });

  const { control, trigger } = methods;

  const startDate = useWatch({ control, name: 'startDate' });
  const endDate = useWatch({ control, name: 'endDate' });
  const aggregate = useWatch({ control, name: 'aggregate' });
  const [debouncedAggregate] = useDebounce(aggregate, 500);

  useEffect(() => {
    trigger().then((isValid) => {
      if (!isValid) return;

      setQuery({
        aggregate: debouncedAggregate,
        date_to: endDate.format('YYYY-MM-DD'),
        date_from: startDate.format('YYYY-MM-DD'),
      });
    });
  }, [debouncedAggregate, startDate, endDate]);

  return (
    <StyledForm methods={methods}>
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
      <StyledNumberInput
        name="aggregate"
        label="Aggregate"
        inputProps={{ min: minAggregate, max: maxAggregate, step: 1 }}
      />
    </StyledForm>
  );
};

export default StockChartFiltersForm;

const StyledForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
` as typeof Form;

const StyledNumberInput = styled(NumberInput).attrs(() => ({
  size: 'small',
}))`
  width: 10rem;
`;
