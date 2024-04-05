import { FC } from 'react';
import { SloganParagraphProps } from './@types';
import classNames from 'classnames';

const SloganParagraph: FC<SloganParagraphProps> = ({ size = 'medium' }) => {
  // Variables
  const isSizeMedium = size === 'medium';
  const isSizeLarge = size === 'large';
  return (
    <p
      className={classNames(
        'hidden md:flex md:flex-col',
        'text-primary leading-relaxed',
        isSizeMedium && 'mx-0 my-3 text-3xl font-semibold',
        isSizeLarge && 'mx-20 my-8 text-7xl font-bold'
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
