import type { CardFooterProps } from '@components/Card/@types';
import Link from '@components/Link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import type { FC } from 'react';

const CardFooter: FC<CardFooterProps> = ({ label, href, children }) => {
  return (
    <div className="px-4">
      <Link variant="outlined" size="medium" href={href}>
        {label}
        <ArrowRightIcon className="ml-2 w-4 h-4" />
      </Link>
      {children}
    </div>
  );
};

export default CardFooter;
