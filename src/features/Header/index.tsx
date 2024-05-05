import Navbar from '@features/Navbar';
import classNames from 'classnames';

const Header = () => {
  return (
    <header
      className={classNames(
        'w-full max-h-28 sticky top-0 z-10 border-b border-b-medium bg-background',
        'py-4 md:px-20 px-12'
      )}
    >
      <Navbar />
    </header>
  );
};
export default Header;
