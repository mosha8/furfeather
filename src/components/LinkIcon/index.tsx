import Link from 'next/link';
import classNames from 'classnames';
import { FC } from 'react';
import { LinkIconProps } from './@types';

const LinkIcon: FC<LinkIconProps> = ({ href, className, children }) => {
  return (
    <Link href={href} className={classNames(className)}>
      {children}
    </Link>
  );
};
export default LinkIcon;
