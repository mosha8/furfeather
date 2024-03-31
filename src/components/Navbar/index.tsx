import { FC } from 'react';
import Button from '@components/Button';

const Navbar: FC = () => {
  return (
    <div className="flex gap-6 leading-relaxed">
      <Button color="primary" variant="text">
        Projects
      </Button>
      <Button color="primary" variant="text">
        Services
      </Button>
      <Button color="primary" variant="text">
        About
      </Button>
      <Button color="primary" variant="text">
        Handbook
      </Button>
    </div>
  );
};

export default Navbar;
