import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from 'use-query-params';

import { getFilterFormDefaultValues } from './components/filters/utils';
import { FilterQueryParams } from './types';

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
