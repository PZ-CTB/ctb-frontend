import { Dayjs } from 'dayjs';
import { z } from 'zod';

export const ErrorMessages: {
  required: string;
  email: string;
  passwordLength: string;
  passwordsNotMatching: string;
  date: string;
} = {
  required: 'This is required',
  email: 'Must be a valid email',
  passwordLength: 'Too short - min. 8 characters',
  passwordsNotMatching: 'The passwords do not match',
  date: 'Invalid date',
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
