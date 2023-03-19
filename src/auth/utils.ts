import { LoginForm } from './login/schema';
import { RegisterForm } from './register/schema';

export const getLoginFormDefaultValues = (): LoginForm => {
  return { email: '', password: '' };
};

export const getRegisterFormDefaultValues = (): RegisterForm => {
  return { email: '', password: '', confirmPassword: '' };
};
