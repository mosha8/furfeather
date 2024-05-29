import type { FC } from 'react';
import { Controller } from 'react-hook-form';
import type { FormInputProps } from './@types';
import Input from './components/Input';

const FormInput: FC<FormInputProps> = ({ name, ...rest }) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Input {...rest} {...field} error={error} />
      )}
    />
  );
};
export default FormInput;
