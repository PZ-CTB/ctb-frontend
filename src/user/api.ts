import { get } from '../api';
import { API_ROOT_PATH } from '../auth/api';

import { User } from './types';

export const USER_SESSION_API_PATH = API_ROOT_PATH + '/me';

export const getUserSession = () =>
  get<User>(USER_SESSION_API_PATH).then((response) => response.data);
