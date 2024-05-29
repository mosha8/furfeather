'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { ClientProviderProps } from './@types';
import reactQueryClient from './react-query-client';
const ClientProvider = (props: ClientProviderProps) => {
  const { children, devtools = true } = props;
  return (
    <QueryClientProvider client={reactQueryClient}>
      {children}
      {devtools && (
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      )}
    </QueryClientProvider>
  );
};

export default ClientProvider;
