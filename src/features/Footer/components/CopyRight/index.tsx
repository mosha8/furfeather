import Link from '@components/Link';
import { BugAntIcon } from '@heroicons/react/24/solid';

const CopyRight = () => {
  return (
    <div className="flex justify-between items-center text-sm text-light">
      <span className="text-light">
        <BugAntIcon className="scale-75 hover:transition hover:duration-300 hover:delay-200 hover:rotate-90" />
        @furfeather
      </span>
      <Link variant="text" href="/" size="small" color="secondary">
        Policy
      </Link>
    </div>
  );
};
export default CopyRight;
