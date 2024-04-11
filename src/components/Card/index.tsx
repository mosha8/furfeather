import { FC } from 'react';
import Link from '@components/Link';
import { CardProps } from './@types';

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
        </Link>
      ) : null}
      {children}
    </div>
  );
};
export default Card;
