'use client';
import LogoIcon from '@assets/images/logo.svg';
import Drawer from '@components/Drawer';
import LinkIcon from '@components/LinkIcon';
import classNames from 'classnames';
import NavItems from './components/NavItems';
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-full">
      <LinkIcon href="/" className="h-full">
        <LogoIcon
          width={48}
          height={85}
          className={classNames(
            'hover:scale-125 hover:transition hover:duration-300 hover:delay-100'
          )}
        />
      </LinkIcon>
      <div className="flex items-center gap-16">
        <NavItems horizontal={true} />
        <div className="block md:hidden">
          <Drawer />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
