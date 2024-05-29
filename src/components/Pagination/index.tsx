import { propagatePaginationPages } from '@lib/index';
import classNames from 'classnames';
import { useMemo, type FC } from 'react';
import type { PaginationProps } from './@types';
import { usePagination } from './hooks/usePagination';

const Pagination: FC<PaginationProps> = ({
  total = 0,
  pageCurrent = 1,
  pageSize = 8,
  goToPage,
}) => {
  // custom
  const {
    pagesCount,
    canGoToNextPage,
    canGoToPrevPage,
    goToNextPage,
    goToPrevPage,
  } = usePagination({ total, pageCurrent, pageSize, goToPage });
  // memos
  const pages = useMemo(
    () => propagatePaginationPages(pageCurrent, pagesCount) || [],
    [pagesCount, pageCurrent]
  );
  return (
    <div className="w-full flex justify-center items-center gap-x-2">
      <button
        disabled={!canGoToPrevPage}
        className={classNames(
          'text-primary hover:text-yellow-400 hover:rounded-lg px-2 py-1 bg-transparent',
          !canGoToPrevPage && 'hover:text-primary opacity-30 cursor-not-allowed'
        )}
        onClick={goToPrevPage}
      >
        Previous
      </button>
      {pages.map((page, index) =>
        typeof page === 'string' ? (
          <div
            key={`${page}-${index}`}
            className="text-center border-none outline-none text-primary"
          >
            {page}
          </div>
        ) : (
          <button
            key={`${page}-${index}`}
            onClick={() => goToPage(page)}
            className={classNames(
              'rounded cursor-pointer text-primary px-3 py-1',
              'hover:text-yellow-400',
              page === pageCurrent &&
                'bg-yellow-400 text-white hover:text-white'
            )}
          >
            {page}
          </button>
        )
      )}
      <button
        disabled={!canGoToNextPage}
        className={classNames(
          'text-primary hover:text-yellow-400',
          !canGoToNextPage && 'hover:text-primary opacity-30 cursor-not-allowed'
        )}
        onClick={goToNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
