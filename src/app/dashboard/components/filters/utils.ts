import dayjs from 'dayjs';

import { FiltersForm } from './schema';

export const today = dayjs().startOf('day');
export const minDateBoundary = dayjs('2013-01-01').startOf('day');

export const maxAggregate = 100;
export const minAggregate = 1;

export const getFilterFormDefaultValues = () => {
  return {
    startDate: minDateBoundary,
    endDate: today,
    aggregate: minAggregate,
  } satisfies FiltersForm;
};
