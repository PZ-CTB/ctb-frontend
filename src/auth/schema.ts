import { z } from 'zod';

import {
  ErrorMessages,
  GenericEmailConstraint,
  GenericPasswordConstraint,
} from 'utils/zod/utils';

//

export const LoginFormSchema = z.object({
  email: GenericEmailConstraint,
  password: z.string({ required_error: ErrorMessages.required }),
});

export type LoginForm = z.infer<typeof LoginFormSchema>;

//

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
