import classNames from 'classnames';
import { BugAntIcon } from '@heroicons/react/24/solid';
import LinkIcon from '@components/LinkIcon';
import Tagline from '@components/Tagline';
import CopyRight from './components/CopyRight';
import Menus from './components/Menus';
const Footer = () => {
  return (
    <footer
      className={classNames(
        'w-full',
        'md:px-20 px-12 pt-20 pb-3',
        'border-t border-t-medium'
      )}
    >
      <div className="flex flex-col gap-y-12">
        <div
          className={classNames(
            'w-full gap-y-8',
            'flex flex-col-reverse md:flex-row-reverse md:justify-between'
          )}
        >
          <div>
            <Menus />
          </div>
          <div className="flex flex-col flex-1 gap-y-32">
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
            <Tagline size="medium" />
          </div>
        </div>
        <CopyRight />
      </div>
    </footer>
  );
};
export default Footer;
