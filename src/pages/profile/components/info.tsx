import _ from 'lodash';
import React from 'react';

import { User } from 'user/types';
import { formatUSD } from 'utils/number';
import { WalletBalance } from 'wallet/types';

type Props = {
  user: User;
  balance: WalletBalance;
};

const UserInfo: React.FC<Props> = ({ user, balance }) => {
  return (
    <div>
      <p>Email: {user.email}</p>
      <p>USD: {formatUSD(balance.wallet_usd)}</p>
      <p>BTC: {_.round(balance.wallet_btc, 8)} ₿</p>
    </div>
  );
};

export default UserInfo;
