import { FC } from 'react';
import Link from 'next/link';
import { ButtonProps } from './@types';
import classnames from 'classnames';

const Button: FC<ButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
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
    <div className={classnames(disabled && '!cursor-not-allowed')}>
      <Component
        className={classnames(
          'inline-flex items-center justify-center',
          'rounded-md',
          isSizeSmall && 'px-2 py-1',
          isSizeMedium && 'px-4 py-2',
          isVariantContained && [
            'text-sm leading-4 border-2 border-solid border-transparent',
            isColorPrimary && 'bg-primary',
          ],
          isVariantOutlined && [
            'text-sm leading-4 border-2 border-solid text-primary',
            isColorPrimary && 'border-light',
          ],
          isVariantText && [isColorPrimary && 'text-primary hover:underline']
        )}
        disabled={disabled}
        href={href as string}
        target={target}
        // @ts-expect-error @typescript-eslint/ban-ts-comment
        onClick={onClick}
      >
        {children}
      </Component>
    </div>
  );
};

export default Button;
