import { z } from 'zod';

import { GenericEmailConstraint, ErrorMessages } from 'utils/zod/utils';

export const LoginFormSchema = z.object({
  email: GenericEmailConstraint,
  password: z.string({ required_error: ErrorMessages.required }),
});

export type LoginForm = z.infer<typeof LoginFormSchema>;
