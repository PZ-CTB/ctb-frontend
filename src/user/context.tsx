import React from 'react';

import Loading from 'components/ui/loading';
import { createContext } from 'utils/context';

import { User } from './types';
import { useUserSession } from './useUserSession';

export type UserContext = {
  user: User | undefined;
};

const [useUserContext, Provider] = createContext<UserContext>();

// should not be used directly; use auth/login/hooks instead!
export { useUserContext };

type Props = {
  children: React.ReactNode;
};

const UserProvider: React.FC<Props> = ({ children }) => {
  const user = useUserSession();

  if (user.isLoading) return <Loading />;

  return <Provider value={{ user: user.data }}>{children}</Provider>;
};

export default UserProvider;
