import classNames from 'classnames';
import Link from 'next/link';
import type { FC } from 'react';
import type { LinkIconProps } from './@types';

const LinkIcon: FC<LinkIconProps> = ({ href, className, children }) => {
  return (
    <Link href={href} className={classNames(className)}>
      {children}
    </Link>
  );
};
export default LinkIcon;
