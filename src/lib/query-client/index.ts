import config from '@configs/app.json';
import type { AxiosInstance } from 'axios';
import axios from 'axios';
import type {
  APIServers,
  EndpointOptions,
  MutationKeyGenerator,
  QueryKeyGenerator,
} from './@types';
import { EndpointCaller } from './endpoint-caller';
import reactQueryClient from './react-query-client';

const { APIOptionsConfig } = config;

class Client {
  private readonly axiosInstances: { [key: string]: AxiosInstance };
  constructor() {
    this.axiosInstances = {};
    APIOptionsConfig.forEach(({ url: baseURL, server }) => {
      const apiServer = `${server}` as APIServers;
      this.axiosInstances[apiServer] = axios.create({
        baseURL,
        timeout: 0,
      });
    });
  }
  registerEndpoint<TData, TResponse>(
    keyGenerator: QueryKeyGenerator<TData> | MutationKeyGenerator,
    endpointOptions: EndpointOptions<TData, TResponse>
  ): void {
    const endpointKeyAllEntries = keyGenerator(null as TData);
    const endpointKeyStringEntries = endpointKeyAllEntries.filter(
      (key) => typeof key === 'string'
    );
    const endpointCaller = new EndpointCaller<TData, TResponse>(
      this.axiosInstances[endpointOptions.server],
      endpointOptions
    );
    if (endpointOptions.type === 'mutation') {
      reactQueryClient.setMutationDefaults(endpointKeyStringEntries, {
        mutationFn: (variables) => {
          return endpointCaller.callMutation(variables as TData);
        },
      });
    } else {
      reactQueryClient.setQueryDefaults(endpointKeyStringEntries, {
        queryFn: (queryContext) => {
          return endpointCaller.callQuery(queryContext);
        },
      });
    }
  }
}

const client = new Client();
export default client;
