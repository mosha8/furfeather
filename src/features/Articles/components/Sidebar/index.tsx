import Button from '@components/Button';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, type FC } from 'react';
import type { SidebarProps } from './@types';

const Sidebar: FC<SidebarProps> = ({ items, queryAPI }) => {
  // general
  const search = useSearchParams();
  // state
  const [selectedItem, setSelectedItem] = useState(() => {
    if (queryAPI)
      return { label: `${queryAPI.toUpperCase() + ' API'}`, value: queryAPI };
    return items[0];
  });
  const onClick = (item: { label: string; value: string }) => {
    setSelectedItem(item);
    window.history.replaceState(
      { ...window.history.state, api: item.value },
      '',
      `?api=${item.value}`
    );
  };
  // effects
  useEffect(() => {
    if (selectedItem)
      window.history.replaceState(
        { ...window.history.state, api: selectedItem.value },
        '',
        `?api=${selectedItem.value}`
      );
  }, [search, selectedItem]);
  return (
    <div className="w-[300px] h-screen relative z-10">
      <div className="w-full absolute top-0 left-0 bottom-0 border-r">
        <div className="mt-16 lg:mt-32 flex flex-col gap-y-4 items-center">
          {items.map(({ label, value }) => (
            <Button
              key={`articles-sidebar-${value}`}
              variant="text"
              color="primary"
              size="medium"
              active={selectedItem.value === value}
              onClick={() => onClick({ label, value })}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
