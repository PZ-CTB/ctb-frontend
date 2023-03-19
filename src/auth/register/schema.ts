import { z } from 'zod';

import {
  ErrorMessages,
  GenericPasswordConstraint,
  GenericEmailConstraint,
} from 'utils/zod/utils';

export const RegisterFormSchema = z
  .object({
    email: GenericEmailConstraint,
    password: GenericPasswordConstraint,
    confirmPassword: GenericPasswordConstraint,
  })
  .refine((v) => v.confirmPassword === v.password, {
    message: ErrorMessages.passwordsNotMatching,
    path: ['confirmPassword'],
  });
export type RegisterForm = z.infer<typeof RegisterFormSchema>;
