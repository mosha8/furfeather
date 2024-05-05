import classNames from 'classnames';
import Image from 'next/image';
import NextLink from 'next/link';
import type { FC } from 'react';
import type { LinkBoxProps } from './@types';

const LinkBox: FC<LinkBoxProps> = ({ href, title, source, icon, children }) => {
  return (
    <NextLink
      href={href}
      className={classNames(
        'w-[311px] lg:w-420 h-[85px]',
        'rounded-xl',
        'flex flex-row-reverse justify-end',
        'hover:scale-110 hover:transition-all hover:duration-300 hover:delay-100 hover:bg-overlayLinkHover'
      )}
    >
      <div className="flex flex-col justify-between px-4 py-1 flex-1">
        <h5 className="text-primary font-medium max-w-80 text-sm lg:text-base lg:font-normal line-clamp-2">
          {title}
        </h5>
        <span className="text-light pt-2 text-xs lg:text-sm">{source}</span>
      </div>
      <Image
        src={icon}
        alt="icon_card"
        width={100}
        height={85}
        className="rounded-xl"
      />
      {children}
    </NextLink>
  );
};

export default LinkBox;
