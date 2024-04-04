import Logo from '../Logo';
import NavItems from './components/NavItems';
import IconKebab from './components/IconKebab';

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex justify-between items-center py-4 px-12 fixed top-0 z-10 border-b border-b-medium">
      <Logo />
      <div className="flex items-center gap-8">
        <NavItems />
        <IconKebab />
      </div>
    </nav>
  );
};
export default Navbar;
