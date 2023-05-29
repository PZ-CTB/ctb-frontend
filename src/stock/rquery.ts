import { get } from 'api';
import { useReactQuery } from 'rquery';

import { API_ROOT_PATH } from './api';
import { StockChartData, StockPriceData } from './types';

const getStockChartDataApiPath = (params?: string) =>
  `${API_ROOT_PATH}/chart${params ? `?${params}` : ''}`;

export const useStockChartData = (params: string) =>
  useReactQuery<StockChartData[]>(
    get,
    getStockChartDataApiPath(params),
    undefined,
    [getStockChartDataApiPath()]
  );

export const useStockPrice = () =>
  useReactQuery<StockPriceData>(get, `${API_ROOT_PATH}/price`);
