import { FC } from 'react';
import classNames from 'classnames';
import { SloganParagraphProps } from './@types';

const SloganParagraph: FC<SloganParagraphProps> = ({ size = 'large' }) => {
  // Variables
  const isSloganLarge = size === 'large';
  const isSloganMedium = size === 'medium';
  return (
    <p
      className={classNames(
        'text-primary leading-snug',
        isSloganMedium && 'hidden md:flex md:flex-col text-3xl font-semibold',
        isSloganLarge && 'font-bold text-6xl'
      )}
    >
      Think, Design.
      <br />
      Develop, Release.
      <br />
      Repeat.
    </p>
  );
};
export default SloganParagraph;
