import { FC } from 'react';
import Link from 'next/link';
import { ButtonProps } from './@types';
import classnames from 'classnames';

const Button: FC<ButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  className,
  href,
  externalUrl,
  target = '_self',
  disabled,
  onClick,
  children,
}) => {
  // Variables
  const isVariantContained = variant === 'contained';
  const isVariantOutlined = variant === 'outlined';
  const isVariantText = variant === 'text';
  const isColorPrimary = color === 'primary';
  const isSizeMedium = size === 'medium';
  const isSizeSmall = size === 'small';
  const Component = href ? (externalUrl ? 'a' : Link) : 'button';

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
          isSizeMedium && 'link-underline-md',
          isSizeSmall && 'link-underline-sm',
        ],
        disabled && ['cursor-not-allowed'],
        className
      )}
      disabled={!!disabled}
      href={href as string}
      target={target}
      // @ts-expect-error @typescript-eslint/ban-ts-comment
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export default Button;
