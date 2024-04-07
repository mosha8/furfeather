import { FC } from 'react';
import { OverlayLinkProps } from './@types';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

const OverlayLink: FC<OverlayLinkProps> = ({
  href,
  title,
  description,
  icon,
  children,
}) => {
  // Variables
  const isIconUrlString = typeof icon === 'string' || icon instanceof String;
  return (
    <Link
      href={href}
      className={classNames(
        'max-h-[80px] max-w-[320px] rounded-xl',
        'flex flex-row-reverse flex-1 justify-end',
        'hover:scale-110 hover:transition-all hover:duration-300 hover:delay-100 hover:bg-overlayLinkHover'
      )}
    >
      <div className="w-[220px] px-4 py-1">
        <h5 className="text-primary font-semibold leading-4 text-sm">
          {title}
        </h5>
        <p className="text-light overflow-y-hidden whitespace-nowrap text-ellipsis pt-2 text-xs overflow-x-hidden">
          {description}
        </p>
      </div>
      {isIconUrlString ? (
        <div className="w-[77px]">
          <Image
            src={String(icon)}
            alt="icon_card"
            width={77}
            height={61}
            className="rounded-xl"
          />
        </div>
      ) : (
        icon
      )}

      {children}
    </Link>
  );
};

export default OverlayLink;
