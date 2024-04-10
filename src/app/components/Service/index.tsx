import Button from '@components/Button';
import { FC } from 'react';
import { ServiceProps } from './@types';
import Image from 'next/image';
import { randomUUID } from 'crypto';
import classNames from 'classnames';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
const Service: FC<ServiceProps> = ({ title, description, icons }) => {
  return (
    <div
      className={classNames(
        'w-full flex flex-col gap-y-8 lg:flex lg:flex-row',
        'lg:divide-x divide-medium'
      )}
    >
      <div className="flex-1 flex justify-around lg:items-center">
        {icons.map((icon) => (
          <div
            className="flex-1 max-w-[85px] lg:max-w-[120px]"
            key={`icon-services-${randomUUID()})}`}
          >
            <Image
              src={String(icon)}
              width={120}
              height={120}
              alt="icon_services"
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
      <div className="flex-1 space-y-16 lg:px-16 py-4">
        <div className="w-full space-y-8">
          <h5 className="text-2xl font-medium lg:text-5xl leading-relaxed max-w-96">
            {title}
          </h5>
          <p className="max-w-[600px] font-light text-light lg:text-lg">
            {description}
          </p>
        </div>
        <Button variant="outlined" color="primary" size="medium">
          Go to services
          <ArrowRightIcon className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
export default Service;
