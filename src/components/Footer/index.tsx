import CopyRight from './components/CopyRight';
import Menus from './components/Menus';
import Logo from '@components/Logo';
const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0 flex flex-col gap-y-12 px-12 pt-20 pb-3 border-t border-t-medium">
      <div className="w-full flex flex-row-reverse flex-1 justify-between">
        <div className="">
          <Menus />
        </div>
        <div className="flex flex-col flex-1 gap-y-32">
          <Logo />
          <p className="text-primary text-3xl font-semibold flex flex-col">
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
