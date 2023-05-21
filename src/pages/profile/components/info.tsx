import React from 'react';

import { User } from 'user/types';
import { WalletBalance } from 'wallet/types';

type Props = {
  user: User;
  balance: WalletBalance;
};

const UserInfo: React.FC<Props> = ({ user, balance }) => {
  return (
    <div>
      <p>Email: {user.email}</p>
      <p>USD: {balance.wallet_usd}$</p>
      <p>BTC: {balance.wallet_btc}₿</p>
    </div>
  );
};

export default UserInfo;
