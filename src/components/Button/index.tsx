import { FC } from 'react';
import { ButtonProps } from './@types';
import classNames from 'classnames';

const Button: FC<ButtonProps> = ({
  variant,
  color,
  size,
  className,
  onClick,
  disabled,
  children,
}) => {
  const isVariantContained = variant === 'contained';
  const isVariantOutlined = variant === 'outlined';
  const isColorPrimary = color === 'primary';
  // const isColorSecondary = color === 'secondary';
  // const isColorSuccess = color === 'success';
  // const isColorError = color === 'error';
  const isSizeSmall = size === 'small';
  const isSizeMedium = size === 'medium';

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
        ],
        isVariantOutlined && [
          'text-sm leading-4 border-2 border-solid text-primary',
          isColorPrimary && 'border-light',
        ],
        disabled && 'cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={!!disabled}
    >
      {children}
    </button>
  );
};
export default Button;
