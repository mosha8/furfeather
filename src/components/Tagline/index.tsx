import classNames from 'classnames';
import type { FC } from 'react';
import type { TaglineProps } from './@types';

const Tagline: FC<TaglineProps> = ({ size = 'large' }) => {
  // Variables
  const isSloganLarge = size === 'large';
  const isSloganMedium = size === 'medium';
  return (
    <p
      className={classNames(
        '!text-primary flex flex-col',
        isSloganMedium && [
          'hidden md:flex md:flex-col',
          'text-3xl font-medium',
        ],
        isSloganLarge && ['font-medium text-4xl', 'md:text-5xl', 'lg:text-6xl']
      )}
    >
      <strong
        className={classNames('transition-all duration-300 ease-in delay-500')}
      >
        Do What Resonates
      </strong>
      <strong
        className={classNames(
          'transition-all duration-300 ease-in delay-[1500ms]'
        )}
      >
        With you.
      </strong>
    </p>
  );
};
export default Tagline;
