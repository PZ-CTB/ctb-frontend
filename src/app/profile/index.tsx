import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';

import { useUserSession } from 'user/useUserSession';

const ProfilePage: React.FC = () => {
  const user = useUserSession();
  const [alignment, setAlignment] = React.useState<string | null>('deposit');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    console.log(event);
    setAlignment(newAlignment);
  };
  return (
    <>
      <h1>Profile</h1>
      <p>Email: {user.data?.email}</p>
      <p>USD: {user.data?.wallet_usd}$</p>
      <p>BTC: {user.data?.wallet_btc}₿</p>

      <ToggleButtonGroup value={alignment} exclusive onChange={handleChange}>
        <ToggleButton value="deposit">Deposit</ToggleButton>
        <ToggleButton value="withdraw">Withdraw</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default ProfilePage;
