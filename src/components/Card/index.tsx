import Link from '@components/Link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import type { FC } from 'react';
import type { CardProps } from './@types';

const Card: FC<CardProps> = ({ title, description, label, href, children }) => {
  return (
    <div className=" bg-background flex flex-col justify-between gap-y-16 py-8">
      <div className="space-y-8">
        {title ? (
          <h5 className="text-xl font-medium lg:text-3xl leading-relaxed">
            {title}
          </h5>
        ) : null}
        {description ? (
          <p className="font-light text-light">{description}</p>
        ) : null}
      </div>
      {href && label ? (
        <Link variant="outlined" size="medium" href={href}>
          {label}
          <ArrowRightIcon className="ml-2 w-4 h-4" />
        </Link>
      ) : null}
      {children}
    </div>
  );
};
export default Card;
