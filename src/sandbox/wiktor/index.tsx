import React from 'react';

import Table from './HistoryTable';
import data from './sampleHistoryTableData';

const WiktorSandboxPage: React.FC = () => {
  return (
    <>
      <h1>Wiktor Sandbox</h1>
      <Table data={data} />
    </>
  );
};

export default WiktorSandboxPage;
