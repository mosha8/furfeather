import type { Method, RawAxiosRequestHeaders } from 'axios';
import type { PropsWithChildren } from 'react';
import type { ZodSchema } from 'zod';

export type APIServers = 'DOGS' | 'CATS';

export interface ClientProviderProps extends PropsWithChildren {
  devtools?: boolean;
}

export interface EndpointOptions<TData, TResponse> {
  url: string;
  type: 'query' | 'mutation';
  server: APIServers;
  method?: Method;
  headers?: RawAxiosRequestHeaders;
  requestDataSchema?: ZodSchema<TData>;
  responseDataSchema?: ZodSchema<TResponse>;
}
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
type QueryKeyGeneratorReturn<TData = void> = TData extends void
  ? string[]
  : [...string[], TData];
export interface QueryKeyGenerator<TData = void> {
  (data: TData): QueryKeyGeneratorReturn<TData>;
}

export interface MutationKeyGenerator {
  (): string[];
}
