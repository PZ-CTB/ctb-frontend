import React from 'react';
import styled from 'styled-components';

import ChartWrapper from 'stock/components/chart';
import StockChartFiltersForm from 'stock/components/filters/form';
import WalletTradeForm from 'wallet/components/trade/form';

const DashboardPage: React.FC = () => {
  return (
    <Container>
      <StockChartFiltersForm />
      <ChartWrapper />
      <WalletTradeForm />
    </Container>
  );
};

export default DashboardPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
