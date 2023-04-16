import React from 'react';

import Loading from 'components/ui/loading';
import { useUserSession } from 'user/useUserSession';

import UserWalletForm from './form';
import UserInfo from './info';

const ProfilePage: React.FC = () => {
  const user = useUserSession();

  if (user.isLoading) return <Loading />;

  if (!user.data) return null;

  return (
    <>
      <h1>Profile</h1>
      <UserInfo user={user.data} />
      <UserWalletForm user={user.data} />
    </>
  );
};

export default ProfilePage;
