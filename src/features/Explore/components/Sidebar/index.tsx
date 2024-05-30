import CatIcon from '@assets/icons/cat.svg';
import DogIcon from '@assets/icons/dog.svg';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState, type FC } from 'react';

import Button from '@components/Button';
import type { SidebarProps } from '@features/Explore/@types';
import { Squares2X2Icon } from '@heroicons/react/24/solid';
const Sidebar: FC<SidebarProps> = ({ items, queryAPI, onChange }) => {
  // generals
  const search = useSearchParams();
  // states
  const [sidebarItem, setSidebarItem] = useState(() => {
    if (queryAPI)
      return { label: `${queryAPI.toUpperCase() + ' API'}`, value: queryAPI };
    return items[0];
  });
  // callbacks
  const onClick = useCallback((item: { label: string; value: string }) => {
    setSidebarItem(item);
    window.history.replaceState(
      { ...window.history.state, api: item.value },
      '',
      `?api=${item.value}`
    );
  }, []);
  // effects
  useEffect(() => {
    if (sidebarItem) {
      window.history.replaceState(
        { ...window.history.state, api: sidebarItem.value },
        '',
        `?api=${sidebarItem.value}`
      );
      onChange(sidebarItem.value);
    }
  }, [search, sidebarItem, onChange]);
  return (
    <div className="w-[300px] h-full relative z-5">
      <div className="w-full absolute top-0 left-0 bottom-0 border-r-2 border-medium">
        <div className="py-16 flex gap-x-2 border-medium border-b-2 justify-center h-fit">
          <Squares2X2Icon className="h-4 scale-125 fill-primary" />
          <h5 className="text-primary text-lg leading-4 cursor-default">
            API Explorer
          </h5>
        </div>
        <div className="space-y-4 mt-16 max-w-fit mx-auto pr-5">
          {items.map(({ label, value }) => {
            const isValueDog = value === 'dogs';
            const isValueCat = value === 'cats';
            return (
              <Button
                key={`articles-sidebar-${value}`}
                variant="text"
                color="primary"
                size="medium"
                active={sidebarItem.value === value}
                onClick={() => onClick({ label, value })}
                className="flex flex-row-reverse items-center gap-x-2 hover:text-yellow-400"
              >
                {label}
                {isValueDog && <DogIcon />}
                {isValueCat && <CatIcon />}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
