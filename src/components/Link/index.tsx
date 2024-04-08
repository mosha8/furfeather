import { FC } from 'react';
import NextLink from 'next/link';
import classnames from 'classnames';
import { LinkProps } from './@types';
const Link: FC<LinkProps> = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  className,
  href,
  externalUrl,
  target = '_self',
  children,
}) => {
  const isVariantContained = variant === 'contained';
  const isVariantOutlined = variant === 'outlined';
  const isVariantText = variant === 'text';
  const isColorPrimary = color === 'primary';
  const isColorSecondary = color === 'secondary';
  const isSizeMedium = size === 'medium';
  const isSizeSmall = size === 'small';
  const Component = externalUrl ? 'a' : NextLink;

  return (
    <Component
      className={classnames(
        'rounded-md',
        isSizeSmall && 'px-2 py-1',
        isSizeMedium && 'px-4 py-2',
        (isVariantContained || isVariantOutlined) &&
          'inline-flex items-center justify-center',
        isVariantContained && [
          'text-sm leading-4 border-2 border-solid border-transparent',
          isColorPrimary && 'bg-primary',
        ],
        isVariantOutlined && [
          'text-sm leading-4 border-2 border-solid text-primary',
          isColorPrimary && 'border-light',
        ],
        isVariantText && [
          'relative',
          isColorPrimary && 'text-primary',
          isColorSecondary && 'text-light',
          isSizeMedium && 'link-underline-md',
          isSizeSmall && 'text-sm link-underline-sm',
        ],
        className
      )}
      href={href as string}
      target={target}
    >
      {children}
    </Component>
  );
};

export default Link;
