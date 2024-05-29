import classNames from 'classnames';
import Image from 'next/image';
import { useMemo, type FC } from 'react';
import type { CardProps } from './@types';
import CardBody from './components/CardBody';
import CardFooter from './components/CardFooter';
import CardHeader from './components/CardHeader';

const Card: FC<CardProps> = ({
  image,
  title,
  description,
  label,
  href,
  children,
  className,
}) => {
  // memos
  const ImageComponent = useMemo(
    () =>
      image ? (
        <Image
          width={250}
          height={250}
          src={image}
          alt="card-image"
          className="w-full h-[250px] rounded-t-lg"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcuHDVfwAGxALtfbZXhQAAAABJRU5ErkJggg=="
        />
      ) : null,
    [image]
  );
  return (
    <div
      className={classNames(
        'flex flex-col gap-y-16 rounded-lg h-full min-w-[250px] py-8',
        image && 'pt-0 pb-8',
        className
      )}
    >
      <div
        className={classNames(
          'h-full flex flex-col justify-around',
          image && ['border border-medium shadow-lg rounded-lg pb-8']
        )}
      >
        <div className="space-y-8">
          {ImageComponent}
          <div className="space-y-6">
            {title && <CardHeader>{title}</CardHeader>}
            {description && <CardBody>{description}</CardBody>}
          </div>
        </div>
        {href && label && <CardFooter href={href} label={label} />}
      </div>
      {children}
    </div>
  );
};
export default Card;
