import { get } from 'api';
import { useReactQuery } from 'rquery';

import { API_PATH } from './api';
import { StockChartData } from './components/chart/types';

export const useStockChartData = (params: string) =>
  useReactQuery<StockChartData[]>(get, `${API_PATH}/chart?${params}`);
