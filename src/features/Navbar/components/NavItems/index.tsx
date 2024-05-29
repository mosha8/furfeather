import Link from '@components/Link';
import config from '@configs/app.json';
import type { NavItemsProps } from '@features/Navbar/@types';
import classNames from 'classnames';
import type { FC } from 'react';
import { useMemo } from 'react';

const { NavbarItems } = config;
const NavItems: FC<NavItemsProps> = ({ horizontal = true }) => {
  const items = useMemo(
    () =>
      NavbarItems?.map(({ href, title }, index) => (
        <Link color="primary" variant="text" href={href} key={index}>
          {title}
        </Link>
      )),
    []
  );
  return (
    <div
      className={classNames(
        !horizontal && 'mt-16 flex flex-col gap-y-2',
        horizontal && 'hidden md:flex gap-6 leading-relaxed font-medium'
      )}
    >
      {items}
    </div>
  );
};
export default NavItems;
