import * as y from 'yup'

export const LoginFormSchema = y.object({
  email: y.string().email().required(),
  password: y.string().required(),
})

export type LoginForm = y.Asserts<typeof LoginFormSchema>
