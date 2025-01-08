import LogoIcon from '@assets/images/logo.svg';
import LinkIcon from '@components/LinkIcon';
import Tagline from '@components/Tagline';
import classNames from 'classnames';
import CopyRight from './components/CopyRight';
import Menus from './components/Menus';

const Footer = () => {
  return (
    <footer
      className={classNames(
        'w-full h-[533px]',
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
              <LogoIcon
                width={64}
                height={28}
                className={classNames('scale-150')}
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
