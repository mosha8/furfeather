import Navbar from '@components/Navbar';
import classNames from 'classnames';

const Header = () => {
  return (
    <header
      className={classNames(
        'w-full max-h-20 sticky top-0 z-10 border-b border-b-medium',
        'py-4 md:px-20 px-12'
      )}
    >
      <Navbar />
    </header>
  );
};
export default Header;
