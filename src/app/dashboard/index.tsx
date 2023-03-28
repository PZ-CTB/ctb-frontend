import React from 'react';

import StockChart from './components/chart';
import data from './sampleChartData';

const DashboardPage: React.FC = () => {
  return (
    <>
      <div>Dashboard</div>
      <StockChart data={data} />
    </>
  );
};

export default DashboardPage;
