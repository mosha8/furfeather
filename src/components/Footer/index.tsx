import { BugAntIcon } from '@heroicons/react/24/solid';
import CopyRight from './components/CopyRight';
import Menus from './components/Menus';
import LinkIcon from '@components/LinkIcon';
import classNames from 'classnames';
const Footer = () => {
  return (
    <footer className="w-full min-w-[400px] fixed bottom-0 flex flex-col gap-y-12 px-12 pt-20 pb-3 border-t border-t-medium">
      <div className="w-full flex flex-col-reverse gap-y-8 md:flex-row-reverse md:justify-between">
        <div className="flex-1">
          <Menus />
        </div>
        <div className="flex flex-col flex-1 gap-y-32">
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
          <p className="hidden text-primary text-3xl font-semibold md:flex md:flex-col">
            <span>Think, Design.</span>
            <span>Develop, Release.</span>
            <span>Repeat.</span>
          </p>
        </div>
      </div>
      <CopyRight />
    </footer>
  );
};
export default Footer;
