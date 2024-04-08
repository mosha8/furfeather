import Link from '@components/Link';

const CopyRight = () => {
  return (
    <div className="flex justify-between items-center text-sm text-light">
      <span className="text-light">BugAnt</span>
      <Link variant="text" href="/" size="small" color="secondary">
        Legal
      </Link>
    </div>
  );
};
export default CopyRight;
