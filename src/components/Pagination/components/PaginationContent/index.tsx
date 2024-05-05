import type { PaginationContentProps } from '@components/Pagination/@types';
import type { FC } from 'react';

const PaginationContent: FC<PaginationContentProps> = ({ children }) => {
  return <div className="flex items-center gap-x-2">{children}</div>;
};

export default PaginationContent;
