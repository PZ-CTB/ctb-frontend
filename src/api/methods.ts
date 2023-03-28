import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from 'axios';

import { apiBaseUrl } from './url';

export type ApiGetter = ReturnType<typeof create>['get'];

const create = (instance: AxiosInstance) => {
  const get = makeRequest(instance, 'get', apiBaseUrl);
  const post = makeRequest(instance, 'post', apiBaseUrl);
  const put = makeRequest(instance, 'put', apiBaseUrl);
  const patch = makeRequest(instance, 'patch', apiBaseUrl);
  const del = makeRequest(instance, 'delete', apiBaseUrl);
  const options = makeRequest(instance, 'options', apiBaseUrl);

  return { get, post, put, patch, del, options };
};

export default create;

export interface AxiosResponseWithHeaders<TData = unknown, THeaders = unknown>
  extends AxiosResponse<TData> {
  headers: Partial<Record<string, string>> & THeaders;
}

const makeRequest =
  (instance: AxiosInstance, method: Method, baseURL: string) =>
  <TResponseData = unknown, TResponseHeader = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) =>
    instance.request<
      TResponseData,
      AxiosResponseWithHeaders<TResponseData, TResponseHeader>
    >({
      method,
      url,
      data,
      baseURL,
      ...config,
    });
