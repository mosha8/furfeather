import { QueryClient } from '@tanstack/react-query';

const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

export default reactQueryClient;
