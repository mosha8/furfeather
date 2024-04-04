import Button from '@components/Button';

const CopyRight = () => {
  return (
    <div className="flex justify-between items-center text-sm text-light">
      <span className="text-light">BugAnt</span>
      <Button variant="text" href="/" size="small" color="secondary">
        Legal
      </Button>
    </div>
  );
};
export default CopyRight;
