import React from 'react';

import { User } from 'user/types';

type Props = {
  user: User;
};

const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <p>Email: {user.email}</p>
      <p>USD: {user.wallet_usd}$</p>
      <p>BTC: {user.wallet_btc}₿</p>
    </div>
  );
};

export default UserInfo;
