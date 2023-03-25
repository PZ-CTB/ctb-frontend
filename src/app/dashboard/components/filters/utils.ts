import dayjs from 'dayjs';

import { FiltersForm } from './schema';

export const today = dayjs().startOf('day');
export const minDateBoundary = dayjs('2013-01-01').startOf('day');

export const getFilterFormDefaultValues = (): FiltersForm => {
  return { startDate: minDateBoundary, endDate: today };
};
