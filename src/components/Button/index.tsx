import classNames from 'classnames';
import type { FC } from 'react';
import type { ButtonProps } from './@types';

const Button: FC<ButtonProps> = ({
  variant,
  color,
  size,
  active = false,
  className,
  onClick,
  disabled,
  type,
  children,
}) => {
  const isVariantContained = variant === 'contained';
  const isVariantOutlined = variant === 'outlined';
  const isVariantText = variant === 'text';
  const isColorPrimary = color === 'primary';
  const isSizeSmall = size === 'small';
  const isSizeMedium = size === 'medium';
  const isButtonActive = active === true;
  return (
    <button
      className={classNames(
        'rounded-md max-w-fit',
        isSizeSmall && 'px-2 py-1',
        isSizeMedium && 'px-4 py-2',
        (isVariantContained || isVariantOutlined) &&
          'inline-flex items-center justify-center',
        isVariantContained && [
          'text-sm leading-4 border-2 border-solid border-transparent',
          isColorPrimary && 'bg-primary',
          'hover:outline hover:outline-2 hover:outline-yellow-500',
        ],
        isVariantOutlined && [
          'text-sm leading-4 border-2 border-solid text-primary',
          isColorPrimary && 'border-light',
        ],
        isVariantText && [
          isColorPrimary && 'text-primary',
          isButtonActive && 'border-b-2 rounded-none',
        ],
        disabled && 'cursor-not-allowed opacity-70',
        className
      )}
      onClick={onClick}
      type={type}
      disabled={!!disabled}
    >
      {children}
    </button>
  );
};
export default Button;
