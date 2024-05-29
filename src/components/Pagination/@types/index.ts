import type { PropsWithChildren } from 'react';

export interface PaginationProps extends PropsWithChildren {
  total: number;
  pageCurrent: number;
  pageSize: number;
  goToPage: (page: number) => void;
}
