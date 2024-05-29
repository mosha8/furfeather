import { useCallback, useMemo } from 'react';
import type { PaginationProps } from '../@types';

export function usePagination({
  total,
  pageCurrent,
  pageSize,
  goToPage,
}: PaginationProps) {
  const pagesCount = useMemo(() => {
    return Math.ceil(total / pageSize);
  }, [total, pageSize]);
  const canGoToPage = useCallback(
    (index: number) => index <= pagesCount && 1 <= index,
    [pagesCount]
  );
  const safelyGoToPage = useCallback(
    (index: number) => {
      if (canGoToPage(index)) {
        goToPage(index);
      }
    },
    [canGoToPage, goToPage]
  );
  const goToPrevPage = useCallback(
    () => safelyGoToPage(pageCurrent - 1),
    [safelyGoToPage, pageCurrent]
  );
  const goToNextPage = useCallback(
    () => safelyGoToPage(pageCurrent + 1),
    [safelyGoToPage, pageCurrent]
  );
  const canGoToPrevPage = useMemo(
    () => canGoToPage(pageCurrent - 1),
    [canGoToPage, pageCurrent]
  );
  const canGoToNextPage = useMemo(
    () => canGoToPage(pageCurrent + 1),
    [canGoToPage, pageCurrent]
  );
  return {
    pagesCount,
    goToPrevPage,
    goToNextPage,
    canGoToNextPage,
    canGoToPrevPage,
  };
}
