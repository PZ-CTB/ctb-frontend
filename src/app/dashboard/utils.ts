import {
  useQueryParams,
  withDefault,
  StringParam,
  NumberParam,
} from 'use-query-params';

import { getFilterFormDefaultValues } from './components/filters/utils';

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
