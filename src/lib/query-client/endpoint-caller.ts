import type { QueryFunctionContext } from '@tanstack/react-query';
import type { AxiosInstance, RawAxiosRequestConfig } from 'axios';
import axios from 'axios';
import { ZodError } from 'zod';
import type { EndpointOptions } from './@types';

export class EndpointCaller<TData, TResponse> {
  private readonly axiosInstance: AxiosInstance;
  private readonly options: EndpointOptions<TData, TResponse>;

  constructor(
    axiosInstance: AxiosInstance,
    options: EndpointOptions<TData, TResponse>
  ) {
    this.axiosInstance = axiosInstance;
    this.options = options;
  }
  private async caller(
    data?: TData,
    axiosConfig: RawAxiosRequestConfig = {}
  ): Promise<TResponse | null> {
    const { url, server, requestDataSchema, headers, method } = this.options;
    try {
      const requestConfig = {
        ...axiosConfig,
        url,
        headers: headers,
        method,
      };
      let requestData = data;
      if (requestDataSchema) requestData = requestDataSchema.parse(data);
      if (method === 'post') requestConfig.data = requestData;
      const { data: response } =
        await this.axiosInstance.request<TResponse>(requestConfig);
      return response;
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('zod error');
      } else if (axios.isAxiosError(error)) {
        console.log('axios error: ', { error, server });
      }
      return null;
    }
  }
  async callMutation(mutationData?: TData): Promise<TResponse | null> {
    return this.caller(mutationData);
  }
  callQuery({ queryKey, signal }: QueryFunctionContext) {
    let queryData: TData | undefined;
    if (Array.isArray(queryKey) && queryKey.length > 0)
      queryData = queryKey[queryKey.length - 1] as unknown as TData;
    return this.caller(queryData, { signal });
  }
}
