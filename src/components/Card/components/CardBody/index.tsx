import type { FC, PropsWithChildren } from 'react';

const CardBody: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <p className="font-light text-light px-4">{children}</p>
    </>
  );
};

export default CardBody;
