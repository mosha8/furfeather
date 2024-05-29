import type { CardHeaderProps } from '@components/Card/@types';
import type { FC } from 'react';

const CardHeader: FC<CardHeaderProps> = ({ children }) => {
  return (
    <h5 className="text-lg font-medium lg:text-2xl leading-relaxed px-4">
      {children}
    </h5>
  );
};

export default CardHeader;
