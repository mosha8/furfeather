import { FC } from 'react';
import Link from 'next/link';
import { MenuProps } from './@types';
import IconHeader from '@assets/images/icons/header-icon.svg';
import IconKebab from '@assets/images/icons/3dot-ellipse.svg';
import Navbar from '@components/Navbar';
import Button from '@components/Button';

const Header: FC<MenuProps> = () => {
  return (
    <div className="flex justify-between items-center py-4 px-12">
      <Link href="/">
        <img src={IconHeader} alt="logo_header" width={96} height={25} />
      </Link>
      <div className="flex items-center gap-8">
        <Navbar />
        <div className="flex gap-4">
          <Button color="primary" variant="contained">
            Get A Qoute
          </Button>
          <Button color="primary" variant="outlined">
            <img src={IconKebab} alt="kebab_icon" width={16} height={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Header;
