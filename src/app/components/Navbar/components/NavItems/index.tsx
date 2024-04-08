import { FC, useMemo } from 'react';
import Link from '@components/Link';
import { NavItemsProps } from 'src/app/components/Navbar/@types';
import config from '@configs/app.json';

const { NavbarItems } = config;
const NavItems: FC<NavItemsProps> = () => {
  // memos
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
