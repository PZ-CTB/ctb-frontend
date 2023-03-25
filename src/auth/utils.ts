import { LoginForm, RegisterForm } from './schema';

export const getLoginFormDefaultValues = (): LoginForm => {
  return { email: '', password: '' };
};

export const getRegisterFormDefaultValues = (): RegisterForm => {
  return { email: '', password: '', confirmPassword: '' };
};
