import React from 'react';

import data from './sampleHistoryTableData';
import StatisticsTable from './table';

const StatisticsPage: React.FC = () => {
  return (
    <>
      <h1>Statistics</h1>
      <StatisticsTable data={data} />
    </>
  );
};

export default StatisticsPage;
