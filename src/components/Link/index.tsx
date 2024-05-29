import classnames from 'classnames';
import NextLink from 'next/link';
import type { FC } from 'react';
import type { LinkProps } from './@types';
const Link: FC<LinkProps> = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  active = false,
  className,
  href,
  externalUrl,
  target = '_self',
  title,
  children,
}) => {
  const isVariantOutlined = variant === 'outlined';
  const isVariantText = variant === 'text';
  const isColorPrimary = color === 'primary';
  const isColorSecondary = color === 'secondary';
  const isSizeMedium = size === 'medium';
  const isSizeSmall = size === 'small';
  const isLinkActive = active === true;
  const Component = externalUrl ? 'a' : NextLink;

  return (
    <Component
      className={classnames(
        'w-fit rounded-md',
        isSizeSmall && 'px-2 py-1',
        isSizeMedium && 'px-4 py-2',
        isVariantOutlined && [
          'inline-flex items-center justify-center',
          'text-sm leading-4 border-2 border-solid text-primary',
          isColorPrimary && 'border-light',
        ],
        isVariantText && [
          'relative',
          isLinkActive && 'link-active',
          isColorPrimary && 'text-primary',
          isColorSecondary && 'text-light',
          isSizeMedium && 'link-underline-md',
          isSizeSmall && 'text-sm link-underline-sm',
        ],
        className
      )}
      href={href}
      title={title}
      target={target}
    >
      {children}
    </Component>
  );
};

export default Link;
