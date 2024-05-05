import Link from '@components/Link';
import config from '@configs/app.json';
import type { NavItemsProps } from '@features/Navbar/@types';
import type { FC } from 'react';
import { useMemo } from 'react';

const { NavbarItems } = config;
const NavItems: FC<NavItemsProps> = () => {
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
    <div className="hidden md:flex gap-6 leading-relaxed font-medium">
      {items}
    </div>
  );
};
export default NavItems;
