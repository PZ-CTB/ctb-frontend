import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from 'axios';

export type ApiGetter = ReturnType<typeof create>['get'];

const create = (instance: AxiosInstance) => {
  const get = instance.get;
  const post = makeRequest(instance, 'post');
  const put = makeRequest(instance, 'put');
  const patch = makeRequest(instance, 'patch');
  const del = makeRequest(instance, 'delete');
  const options = makeRequest(instance, 'options');

  return { get, post, put, patch, del, options };
};

export default create;

export interface AxiosResponseWithHeaders<TData = unknown, THeaders = unknown>
  extends AxiosResponse<TData> {
  headers: Partial<Record<string, string>> & THeaders;
}

const makeRequest =
  (instance: AxiosInstance, method: Method) =>
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
      ...config,
    });
