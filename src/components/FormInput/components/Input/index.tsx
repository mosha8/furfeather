import type { InputBaseProps } from '@components/FormInput/@types';
import classNames from 'classnames';
import { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement, InputBaseProps>(function Render(
  { type = 'text', className, disabled, onChange, error, ...restProps },
  ref
) {
  return (
    <div className={classNames('w-fit flex flex-col gap-y-2', className)}>
      <input
        ref={ref}
        disabled={disabled}
        className={classNames(
          'inline-block max-w-[250px] px-2.5 py-1',
          'bg-transparent outline-none font-light border border-medium text-primary rounded-lg',
          'hover:border-yellow-400'
        )}
        type={type}
        onChange={({ target }) => {
          onChange(Number(target.value));
        }}
        {...restProps}
      />
      {error && (
        <span className="text-red-400">
          {typeof error === 'string' ? error : error.message}
        </span>
      )}
    </div>
  );
});

export default Input;
