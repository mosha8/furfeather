import Client from '@lib/query-client';
import type { QueryKeyGenerator } from '@lib/query-client/@types';
import { z } from 'zod';

const responseDataSchema = z.object({
  message: z.array(z.string()),
  success: z.boolean(),
});
type ResponseData = z.infer<typeof responseDataSchema>;
const requestDataSchema = z.object({ breed: z.string() });
type RequestData = z.infer<typeof requestDataSchema>;
const keyGenerator: QueryKeyGenerator<RequestData> = (data) => [
  'breed',
  'images',
  data,
];
Client.registerEndpoint<RequestData, ResponseData>(keyGenerator, {
  type: 'query',
  server: 'DOGS',
  url: `/breed/list/all`,
  method: 'GET',
});
export {
  keyGenerator as dogKeyGenerator,
  requestDataSchema as dogsBreedListRequestData,
  responseDataSchema as dogsBreedListResponseData,
};
export type { RequestData as DOGRequestData, ResponseData as DOGResponseData };
