import { get } from '../api';

import { User } from './types';

export const API_ROOT_PATH = '/me/';

export const getUserSession = () =>
  get<User>(API_ROOT_PATH).then((response) => response.data);
