import type { PropsWithChildren } from 'react';

export interface PaginationProps extends PropsWithChildren {}
export interface PaginationContentProps extends PropsWithChildren {}
export interface PaginationItemProps extends PropsWithChildren {
  type?: 'previous' | 'ellipsis' | 'next';
}
