import Button from '@components/Button';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import Image from 'next/image';
import NextLink from 'next/link';
import type { FC } from 'react';
import type { ArticleLinkBoxProps } from './@types';

const ArticleLinkBox: FC<ArticleLinkBoxProps> = ({
  title,
  description,
  href,
  icon,
  fetchPriority = 'auto',
  awards,
}) => {
  return (
    <NextLink
      className={classNames(
        'flex flex-col gap-y-8 group',
        'lg:flex lg:flex-row-reverse lg:justify-between lg:even:flex-row lg:gap-x-8',
        'hover:bg-overlayLinkHover hover:rounded-xl'
      )}
      href={href}
      color="secondary"
    >
      <div className="flex-1">
        <Image
          src={icon}
          width={600}
          height={600}
          alt="ic_rand"
          className={classNames('w-full h-[600px] rounded-xl')}
          fetchPriority={fetchPriority}
        />
      </div>
      <div
        className={classNames(
          'flex-1 flex flex-col gap-y-16 p-4 lg:justify-between'
        )}
      >
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-4 mr-4">
              <h5 className="text-3xl">{title}</h5>
              <span className="text-lg font-light">{description}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-16 gap-y-4">
            {awards.map(({ title, icon }) => (
              <div
                className="flex flex-row-reverse gap-x-4 w-[300px]"
                key={`project-${title.replaceAll(' ', '-')}`}
              >
                <div className="w-full">
                  <h4 className="text-light text-sm">Award</h4>
                  <h4 className="text-primary text-sm">{title}</h4>
                </div>
                <div className="">
                  <Image
                    src={icon}
                    alt="icon_card"
                    width={80}
                    height={30}
                    className="rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full relative">
          <Button
            variant="outlined"
            color="secondary"
            size="medium"
            className={classNames(
              'absolute lg:group-even:right-0 lg:bottom-2 bottom-1'
            )}
          >
            View
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </NextLink>
  );
};
export default ArticleLinkBox;
