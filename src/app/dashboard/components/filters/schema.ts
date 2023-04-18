import { z } from 'zod';

import { GenericDateConstraint } from 'utils/zod/utils';

import { maxAggregate, minAggregate, minDateBoundary, today } from './utils';

export const FiltersFormSchema = z
  .object({
    startDate: GenericDateConstraint,
    endDate: GenericDateConstraint,
    aggregate: z
      .number()
      .min(
        minAggregate,
        `Aggregate value cannot be smaller than ${minAggregate}`
      )
      .max(
        maxAggregate,
        `Aggregate value cannot be greater than ${maxAggregate}`
      ),
  })
  .strict()
  .refine((v) => v.startDate.startOf('day') <= v.endDate.startOf('day'), {
    message: "Start Date can't be later than End Date",
    path: ['startDate'],
  })
  .refine((v) => v.startDate.startOf('day') <= today, {
    message: "Start Date can't be later than today",
    path: ['startDate'],
  })
  .refine((v) => v.startDate.startOf('day') >= minDateBoundary, {
    message: "Start Date can't be earlier than 2013-01-01",
    path: ['startDate'],
  })
  .refine((v) => v.endDate.startOf('day') >= v.startDate.startOf('day'), {
    message: "End Date can't be earlier than Start Date",
    path: ['endDate'],
  })
  .refine((v) => v.endDate.startOf('day') <= today, {
    message: `End Date can't be later than today`,
    path: ['endDate'],
  })
  .refine((v) => v.endDate.startOf('day') >= minDateBoundary, {
    message: "End Date can't be earlier than 2013-01-01",
    path: ['endDate'],
  });

export type FiltersForm = z.infer<typeof FiltersFormSchema>;
