import { Dayjs } from 'dayjs';
import { z } from 'zod';

export const ErrorMessages = {
  required: 'This is required',
  email: 'Must be a valid email',
  passwordLength: 'Too short - min. 8 characters',
  passwordsNotMatching: 'The passwords do not match',
  date: 'Invalid date',
  amount: 'Amount should be positive number',
  invalidInput: 'Wrong type of input',
};

export const GenericPasswordConstraint = z
  .string({ required_error: ErrorMessages.required })
  .min(8, { message: ErrorMessages.passwordLength });

export const GenericEmailConstraint = z
  .string({ required_error: ErrorMessages.required })
  .email({ message: ErrorMessages.email });

export const GenericDateConstraint = z
  .custom<Dayjs>()
  .refine((value) => value.isValid(), ErrorMessages.date)
  .refine((value) => !!value, ErrorMessages.required);

export const GenericAmountConstraint = z
  .number({
    invalid_type_error: ErrorMessages.invalidInput,
    required_error: ErrorMessages.required,
  })
  .finite({ message: ErrorMessages.amount })
  .refine((x) => x * 100 - Math.trunc(x * 100) < Number.EPSILON, {
    message: ErrorMessages.invalidInput,
  });
