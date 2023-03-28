import { z } from 'zod';

export const ErrorMessages: {
  required: string;
  email: string;
  passwordLength: string;
  passwordsNotMatching: string;
} = {
  required: 'This is required',
  email: 'Must be a valid email',
  passwordLength: 'Too short - min. 8 characters',
  passwordsNotMatching: 'The passwords do not match',
};

export const GenericPasswordConstraint = z
  .string({ required_error: ErrorMessages.required })
  .min(8, { message: ErrorMessages.passwordLength });

export const GenericEmailConstraint = z
  .string({ required_error: ErrorMessages.required })
  .email({ message: ErrorMessages.email });
