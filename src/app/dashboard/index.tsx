import React from 'react';
import styled from 'styled-components';

import StockChart from './components/chart';
import StockChartFiltersForm from './components/filters/form';
import data from './sampleChartData';

const DashboardPage: React.FC = () => {
  return (
    <Container>
      <StockChartFiltersForm />
      <StockChart data={data} />
    </Container>
  );
};

export default DashboardPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
