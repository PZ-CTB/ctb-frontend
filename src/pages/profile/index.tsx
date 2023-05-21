import React from 'react';

import Loading from 'components/ui/loading';
import { useUserSession } from 'user/rquery';
import { useWalletBalance } from 'wallet/rquery';

import UserWalletForm from './components/form';
import UserInfo from './components/info';

const ProfilePage: React.FC = () => {
  const user = useUserSession();
  const balance = useWalletBalance();

  if (user.isLoading || balance.isLoading) return <Loading />;

  if (!user.data || !balance.data) return null;

  return (
    <>
      <h1>Profile</h1>
      <UserInfo user={user.data} balance={balance.data} />
      <UserWalletForm balance={balance.data} />
    </>
  );
};

export default ProfilePage;
