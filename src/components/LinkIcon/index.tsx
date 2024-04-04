import Link from 'next/link';
import classNames from 'classnames';
import { FC } from 'react';
import { LinkIconProps } from './@types';

const LinkIcon: FC<LinkIconProps> = ({ className, children }) => {
  return (
    <Link href="/" className={classNames(className)}>
      {children}
    </Link>
  );
};
export default LinkIcon;
