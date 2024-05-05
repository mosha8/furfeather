import type { CardHeaderProps } from '@components/Card/@types';
import type { FC } from 'react';

const CardHeader: FC<CardHeaderProps> = ({ children }) => {
  return (
    <h5 className="text-xl font-medium lg:text-3xl leading-relaxed px-4">
      {children}
    </h5>
  );
};

export default CardHeader;
