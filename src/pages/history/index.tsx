import React from 'react';

import WalletHistoryTable from 'wallet/components/history/table';

const WalletHistoryPage: React.FC = () => {
  return (
    <>
      <h1>History</h1>
      <WalletHistoryTable />
    </>
  );
};

export default WalletHistoryPage;
