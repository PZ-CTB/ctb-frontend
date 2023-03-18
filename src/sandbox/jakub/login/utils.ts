import { LoginForm } from './schema'

export const getLoginFormDefaultValues = (): LoginForm => {
  return { email: '', password: '' }
}
