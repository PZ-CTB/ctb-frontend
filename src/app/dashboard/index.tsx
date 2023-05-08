import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import Loading from 'components/ui/loading';

import StockChart from './components/chart';
import StockChartFiltersForm from './components/filters/form';
import { useStockChartData } from './rquery';
import {
  getFiltersURLSearchParamsFromQuery,
  useFiltersQueryParams,
} from './utils';

const DashboardPage: React.FC = () => {
  const [query] = useFiltersQueryParams();
  const { isLoading, error, data } = useStockChartData(
    getFiltersURLSearchParamsFromQuery(query)
  );

  if (isLoading) return <Loading />;

  if (error) return <Typography>Error</Typography>;

  if (!data) return <Typography>No data</Typography>;

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
