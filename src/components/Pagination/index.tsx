import type { FC } from 'react';
import type { PaginationProps } from './@types';
import PaginationContent from './components/PaginationContent';
import PaginationItem from './components/PaginationItem';

const Pagination: FC<PaginationProps> = () => {
  return (
    <>
      <PaginationContent>
        <PaginationItem type="previous" />
        <PaginationItem>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem type="ellipsis" />
        <PaginationItem type="next" />
      </PaginationContent>
    </>
  );
};

export default Pagination;
