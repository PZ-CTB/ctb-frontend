import { Typography } from '@mui/material';
import { useEffect } from 'react';

import Loading from 'components/ui/loading';

import { useStockChartData } from '../../rquery';
import {
  getFiltersURLSearchParamsFromQuery,
  useFiltersQueryParams,
} from '../../utils';

import StockChart from './chart';

const ChartWrapper = () => {
  const [query] = useFiltersQueryParams();
  const { isLoading, error, data, refetch } = useStockChartData(
    getFiltersURLSearchParamsFromQuery(query)
  );

  useEffect(() => {
    refetch();
  }, [query]);

  if (isLoading) return <Loading />;

  if (error) return <Typography>Error</Typography>;

  if (!data) return <Typography>No data</Typography>;

  return <StockChart data={data} />;
};

export default ChartWrapper;
