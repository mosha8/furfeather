import { BugAntIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import LinkIcon from '../../../components/LinkIcon';
import NavItems from './components/NavItems';
import classNames from 'classnames';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <LinkIcon href="/">
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
