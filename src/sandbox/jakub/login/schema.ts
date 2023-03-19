import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z
    .string({ required_error: 'This is required' })
    .email({ message: 'Must be a valid email' }),
  password: z
    .string({ required_error: 'This is required' })
    .min(8, { message: 'Too short - min. 8 characters' }),
});

export type LoginForm = z.infer<typeof LoginFormSchema>;
