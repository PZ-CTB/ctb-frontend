import React from 'react';

import queryClient from 'rquery/client';
import { createContext } from 'utils/context';

import { postLogout } from '../api';
import {
  removePersistentAuthData,
  setPersistentAuthData,
} from '../localStorage';
import { AuthData } from '../types';

import PersistentAuthTokenLoader from './loader';

export type AuthContext = {
  signIn: (data: AuthData) => void;
  signOut: () => Promise<unknown>;
  data: AuthData | undefined;
};

const [useAuthContext, Provider] = createContext<AuthContext>();

// should not be used directly; use auth/login/hooks instead!
export { useAuthContext };

type Props = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = React.useState<AuthData>();

  const signIn = async (data: AuthData) => {
    queryClient.clear(); // clear all query caches to avoid flash of other user's data

    setPersistentAuthData(data);

    setData(data);
  };

  const signOut = () => {
    return postLogout().finally(() => {
      removePersistentAuthData();

      setData(undefined);

      queryClient.clear(); // clear all query caches to avoid flash of other user's data
    });
  };

  return (
    <Provider value={{ signIn, signOut, data }}>
      <PersistentAuthTokenLoader>{children}</PersistentAuthTokenLoader>
    </Provider>
  );
};

export default AuthProvider;
