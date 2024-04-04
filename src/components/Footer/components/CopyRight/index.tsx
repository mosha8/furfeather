import Button from '@components/Button';

const CopyRight = () => {
  return (
    <div className="flex justify-between items-center text-sm text-light">
      <span className="text-">BugAnt</span>
      <Button variant="text" href="/" size="small">
        Legal
      </Button>
    </div>
  );
};
export default CopyRight;
