import React from 'react';

import Table from './HistoryTable';
import data from './sampleHistoryTableData';

const StatisticsPage: React.FC = () => {
  return (
    <>
      <h1>Statistics</h1>
      <Table data={data} />
    </>
  );
};

export default StatisticsPage;
