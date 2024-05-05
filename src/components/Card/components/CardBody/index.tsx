import type { CardBodyProps } from '@components/Card/@types';
import type { FC } from 'react';

const CardBody: FC<CardBodyProps> = ({ children }) => {
  return (
    <>
      <p className="font-light text-light px-4">{children}</p>
    </>
  );
};

export default CardBody;
