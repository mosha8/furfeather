import Link from '@components/Link';
import type { PaginationItemProps } from '@components/Pagination/@types';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/solid';
import classNames from 'classnames';
import type { FC } from 'react';

const PaginationItem: FC<PaginationItemProps> = ({ type, children }) => {
  const isPrevious = type === 'previous';
  const isEllipsis = type === 'ellipsis';
  const isNext = type === 'next';
  const isTypeUndefined = type === undefined;

  return (
    <>
      {isPrevious && (
        <Link
          href="#"
          className={classNames(
            'flex gap-x-2 hover:bg-medium rounded px-4 py-2'
          )}
        >
          <ArrowLeftIcon className="w-4" />
          <span className="text-sm font-light leading-loose">Previous</span>
        </Link>
      )}
      {isNext && (
        <Link
          href="#"
          className="flex gap-x-2 hover:bg-medium rounded px-4 py-2"
        >
          <span className="text-sm font-light leading-loose">Next</span>
          <ArrowRightIcon className="w-4" />
        </Link>
      )}
      {isEllipsis && (
        <Link href="#" className="rounded px-4 py-2 cursor-default">
          <EllipsisHorizontalIcon className="w-8" />
        </Link>
      )}
      {isTypeUndefined && (
        <Link href="#" className="rounded h-8 w-8 leading-4 hover:bg-medium">
          {children}
        </Link>
      )}
    </>
  );
};

export default PaginationItem;
