import classNames from 'classnames';
import Image from 'next/image';
import type { FC } from 'react';
import type { CardProps } from './@types';
import CardBody from './components/CardBody';
import CardFooter from './components/CardFooter';
import CardHeader from './components/CardHeader';

const Card: FC<CardProps> = ({
  src,
  title,
  description,
  label,
  href,
  children,
  className,
}) => {
  const ImageComponent = src ? (
    <Image
      width={200}
      height={300}
      src={src}
      alt="card-image"
      className="w-full h-[350px] rounded-t-lg"
    />
  ) : null;
  return (
    <div
      className={classNames(
        ' bg-background flex flex-col justify-between gap-y-16 rounded-lg z-10',
        src ? 'pb-8' : 'py-8',
        className
      )}
    >
      <div className="space-y-8">
        {ImageComponent && <div className="w-full">{ImageComponent}</div>}
        <div className="space-y-2">
          <CardHeader>{title}</CardHeader>
          <CardBody>{description}</CardBody>
        </div>
      </div>
      {href && label && <CardFooter href={href} label={label} />}
      {children}
    </div>
  );
};
export default Card;
