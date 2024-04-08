import { FC } from 'react';
import { ProjectOverlayLinkProps } from './@types';
import Image from 'next/image';
import classNames from 'classnames';
import NextLink from 'next/link';
import Button from '@components/Button';

const ProjectOverlayLink: FC<ProjectOverlayLinkProps> = ({
  title,
  description,
  href,
  icon,
  awards,
}) => {
  return (
    <NextLink
      className={classNames(
        'w-full max-h-[830px] mb-8',
        'flex flex-row-reverse group',
        'hover:transition-all hover:duration-300 hover:delay-100 hover:bg-overlayLinkHover hover:rounded-xl hover:pl-8'
      )}
      href={href}
      color="secondary"
    >
      <div className="flex flex-1">
        <Image
          src={String(icon)}
          width={900}
          height={621}
          alt="icon_project"
          className="rounded-xl hover:delay-200"
        />
      </div>
      <div className="flex flex-col py-4 flex-1">
        <div className="flex flex-col gap-y-16 h-full">
          <div className="flex flex-col gap-y-4">
            <p className="text-3xl">
              {title}
              <br />
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-16 gap-y-4">
            {awards.map(({ title, icon }) => (
              <div
                className="flex flex-row-reverse gap-x-4 w-[300px]"
                key={`project-${title.replaceAll(' ', '-')}`}
              >
                <div className="w-full">
                  <h4 className="text-light text-sm">AWARD</h4>
                  <h4 className="text-primary text-sm">{title}</h4>
                </div>
                <div className="">
                  <Image
                    src={String(icon)}
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
        <Button variant="outlined" color="secondary" size="medium">
          View Project
        </Button>
      </div>
    </NextLink>
  );
};
export default ProjectOverlayLink;
