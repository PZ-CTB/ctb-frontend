import { get, post } from 'api';
import { User } from 'user/types';

import { LoginForm, RegisterForm } from './schema';
import { LoginResponse } from './types';

export const API_ROOT_PATH = '/auth';

//

export const postLogin = (data: LoginForm) =>
  post<LoginResponse>(API_ROOT_PATH + `/login`, data).then(
    (response) => response.data
  );

export const postRegister = (data: RegisterForm) =>
  post<LoginResponse>(API_ROOT_PATH + `/register`, data).then(
    (response) => response.data
  );

export const postLogout = () =>
  post(API_ROOT_PATH + '/logout').then((response) => response.data);

export const USER_SESSION_API_PATH = API_ROOT_PATH + '/me';

export const getUserSession = () =>
  get<User>(USER_SESSION_API_PATH).then((response) => response.data);
