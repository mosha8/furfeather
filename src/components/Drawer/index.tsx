import NavItems from '@features/Navbar/components/NavItems';
import { EllipsisHorizontalIcon, XMarkIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import { useCallback, useState } from 'react';

const Drawer = () => {
  // states
  const [internalValue, setInternalValue] = useState(false);

  // callbacks
  const onClickXMark = useCallback(() => {
    setInternalValue(!internalValue);
  }, [internalValue]);
  return (
    <div>
      <button
        className={classNames(
          'p-2 border border-light rounded-xl flex items-center justify-center',
          'group hover:border-yellow-400'
        )}
        onClick={onClickXMark}
      >
        <EllipsisHorizontalIcon
          width={24}
          height={24}
          className="fill-primary group-hover:fill-yellow-400"
        />
      </button>
      <div
        className={classNames(
          'relative transition-all duration-500 delay-300 ease-in-out',
          internalValue ? 'block' : 'hidden'
        )}
      >
        <div className="bg-background border-l border-medium fixed right-0 top-0 bottom-0 w-72 z-20">
          <div className="relative">
            <button className="absolute left-2 top-2" onClick={onClickXMark}>
              <XMarkIcon className="fill-primary w-6 h-6 hover:fill-yellow-400" />
            </button>
          </div>
          <div className="flex flex-col gap-y-4">
            <NavItems horizontal={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Drawer;
