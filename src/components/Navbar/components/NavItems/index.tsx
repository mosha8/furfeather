import { FC, useMemo } from 'react';
import Button from '@components/Button';
import { NavItemsProps } from '@components/Navbar/@types';
import config from '@configs/app.json';

const { NavbarItems } = config;
const NavItems: FC<NavItemsProps> = () => {
  // memos
  const items = useMemo(
    () =>
      NavbarItems?.map(({ href, title }, index) => (
        <Button color="primary" variant="text" href={href} key={index}>
          {title}
        </Button>
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
