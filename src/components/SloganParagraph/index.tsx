import { FC } from 'react';
import classNames from 'classnames';
import { SloganParagraphProps } from './@types';

const SloganParagraph: FC<SloganParagraphProps> = ({
  isFooterSlogan = false,
}) => {
  return (
    <p
      className={classNames(
        'text-primary',
        isFooterSlogan
          ? 'hidden md:flex md:flex-col text-3xl font-semibold leading-relaxed'
          : 'font-bold text-3xl md:text-7xl md:leading-relaxed'
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
