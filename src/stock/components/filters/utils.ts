import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from 'use-query-params';

import { minAggregate, today } from './const';
import { FiltersForm } from './schema';
import { FilterQueryParams } from './types';

export const getFilterFormDefaultValues = () => {
  return {
    startDate: today.subtract(1, 'month'),
    endDate: today,
    aggregate: minAggregate,
  } satisfies FiltersForm;
};

export const useFiltersQueryParams = () => {
  const defaultValues = getFilterFormDefaultValues();

  return useQueryParams(
    {
      date_from: withDefault(
        StringParam,
        defaultValues.startDate.format('YYYY-MM-DD')
      ),
      date_to: withDefault(
        StringParam,
        defaultValues.endDate.format('YYYY-MM-DD')
      ),
      aggregate: withDefault(NumberParam, defaultValues.aggregate),
    },
    { updateType: 'replace' }
  );
};

export const getFiltersURLSearchParamsFromQuery = (query: FilterQueryParams) =>
  new URLSearchParams({
    from: query.date_from,
    to: query.date_to,
    aggregate: query.aggregate.toString(),
  }).toString();
