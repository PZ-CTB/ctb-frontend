import { post } from 'api';

import { LoginForm, RegisterForm } from './schema';
import { AuthData } from './types';

//

type LoginResponse = {
  auth_token: AuthData['token'];
};

export const postLogin = (data: LoginForm) =>
  post<LoginResponse>(`login/`, data).then((response) => response.data);

export const postRegister = (data: RegisterForm) =>
  post<LoginResponse>(`register/`, data).then((response) => response.data);

export const postLogout = () =>
  post('logout/').then((response) => response.data);
