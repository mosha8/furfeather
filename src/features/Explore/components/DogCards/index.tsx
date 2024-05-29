import Card from '@components/Card';
import type { GridCardProps } from '@features/Explore/@types';
import { type FC } from 'react';

const DogCards: FC<GridCardProps> = ({ dogBreedsImages }) => {
  return (
    <ul className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-8 text-primary lg:min-w-[1000px]">
      {dogBreedsImages?.map(({ url, name }, index) => {
        const nameCamelCase = name.replace(name[0], name[0].toUpperCase());
        return (
          <li key={index}>
            <Card image={url} title={nameCamelCase} className="border-none" />
          </li>
        );
      })}
    </ul>
  );
};

export default DogCards;
