import LogoIcon from '@assets/images/logo.svg';
import LinkIcon from '@components/LinkIcon';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
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
      <div className="flex items-center gap-8">
        <NavItems />
        <div className="border border-light w-16 h-12 rounded-xl flex items-center justify-center">
          <EllipsisHorizontalIcon
            width={16}
            height={16}
            className="fill-primary"
          />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
