import Client from '@lib/query-client';
import type { QueryKeyGenerator } from '@lib/query-client/@types';
import { z } from 'zod';
import type { DogsBreedAll } from '../@types';

const DogsBreedListAllSchema = z.custom<DogsBreedAll>();
const responseDataSchema = z.object({
  message: DogsBreedListAllSchema,
  success: z.boolean(),
});
type ResponseData = z.infer<typeof responseDataSchema>;
const requestDataSchema = z.object({});
type RequestData = z.infer<typeof requestDataSchema>;
const keyGenerator: QueryKeyGenerator<RequestData> = (data) => [
  'breeds',
  'list',
  'all',
  data,
];
Client.registerEndpoint<RequestData, ResponseData>(keyGenerator, {
  type: 'query',
  server: 'DOGS',
  url: '/breeds/list/all',
  method: 'GET',
});
export { keyGenerator as dogsBreedListAllKeyGenerator };
export type { RequestData as DOGRequestData, ResponseData as DOGResponseData };
