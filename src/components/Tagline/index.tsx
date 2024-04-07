import { FC } from 'react';
import classNames from 'classnames';
import { TaglineProps } from './@types';

const Tagline: FC<TaglineProps> = ({ size = 'large' }) => {
  // Variables
  const isSloganLarge = size === 'large';
  const isSloganMedium = size === 'medium';
  return (
    <p
      className={classNames(
        '!text-primary flex flex-col',
        isSloganMedium && 'hidden md:flex md:flex-col text-3xl font-semibold',
        isSloganLarge && ['font-bold text-4xl', 'md:text-5xl', 'lg:text-6xl']
      )}
    >
      <strong
        className={classNames(
          isSloganLarge && 'transition-all duration-300 ease-in delay-500'
        )}
      >
        Think, Design.
      </strong>
      <strong
        className={classNames(
          isSloganLarge && 'transition-all duration-300 ease-in delay-1000'
        )}
      >
        Develop, Release.
      </strong>
      <strong
        className={classNames(
          isSloganLarge && 'transition-all duration-300 ease-in delay-[1500ms]'
        )}
      >
        Repeat.
      </strong>
    </p>
  );
};
export default Tagline;
