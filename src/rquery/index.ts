import { AxiosRequestConfig } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';

import { ApiGetter } from 'api/methods';

// for singles

export type UseReactQueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData
> = UseQueryOptions<TQueryFnData, TError, TData>;

export const useReactQuery = <
  TQueryFnData = unknown, // type from query
  TError = unknown,
  TData = TQueryFnData // type from options.select
>(
  getter: ApiGetter,
  path: string,
  options?: UseReactQueryOptions<TQueryFnData, TError, TData>,
  key?: unknown[],
  axiosConfig?: AxiosRequestConfig
) =>
  useQuery<TQueryFnData, TError, TData>(
    key ?? path,
    makeQueryFn<TQueryFnData>(getter, path, axiosConfig),
    options
  );

//

export const makeQueryFn =
  <TResponseData = unknown>(
    getter: ApiGetter,
    path: string,
    config?: AxiosRequestConfig
  ) =>
  () =>
    getter<TResponseData>(path, config).then((response) => response.data);

//

// disable auto-refetch options by react-query
export const RQUERY_NOREFETCH_OPTIONS = {
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  refetchInterval: false,
} as const;
