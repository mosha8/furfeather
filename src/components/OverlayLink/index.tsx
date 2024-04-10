import { FC } from 'react';
import { OverlayLinkProps } from './@types';
import Image from 'next/image';
import NextLink from 'next/link';
import classNames from 'classnames';

const OverlayLink: FC<OverlayLinkProps> = ({
  href,
  title,
  source,
  icon,
  children,
}) => {
  return (
    <NextLink
      href={href}
      className={classNames(
        'w-[311px] lg:w-105 max-h-[85px]',
        'rounded-xl',
        'flex flex-row-reverse justify-end',
        'hover:scale-110 hover:transition-all hover:duration-300 hover:delay-100 hover:bg-overlayLinkHover'
      )}
    >
      <div className="flex flex-col justify-between px-4 py-1 flex-1">
        <h5 className="text-primary font-medium max-w-80 text-sm lg:text-base">
          {title}
        </h5>
        <span className="text-light pt-2 text-xs lg:text-sm">
          From our {source}
        </span>
      </div>
      <Image
        src={String(icon)}
        alt="icon_card"
        width={100}
        height={80}
        className="rounded-xl"
      />
      {children}
    </NextLink>
  );
};

export default OverlayLink;
