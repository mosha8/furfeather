import { BugAntIcon } from '@heroicons/react/24/solid';
import LinkIcon from '../LinkIcon';
import NavItems from './components/NavItems';
import IconKebab from './components/IconKebab';
import classNames from 'classnames';

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex justify-between items-center py-4 px-12 fixed top-0 z-10 border-b border-b-medium">
      <LinkIcon>
        <BugAntIcon
          className={classNames(
            'fill-primary',
            'min-w-6 max-w-8',
            'rotate-90 scale-125',
            'hover:rotate-0 hover:scale-150 hover:transition hover:duration-700 hover:delay-100'
          )}
        />
      </LinkIcon>
      <div className="flex items-center gap-8">
        <NavItems />
        <IconKebab />
      </div>
    </nav>
  );
};
export default Navbar;
