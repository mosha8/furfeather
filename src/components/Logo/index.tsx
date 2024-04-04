import Link from 'next/link';
import { BugAntIcon } from '@heroicons/react/24/solid';

const Logo = () => {
  return (
    <Link
      href="/"
      className="w-6 max-w-8 rotate-90 scale-125 hover:rotate-0 hover:scale-150 hover:transition hover:duration-700 hover:delay-100"
    >
      <BugAntIcon className="fill-primary" />
    </Link>
  );
};
export default Logo;
