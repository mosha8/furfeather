import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type FieldValues } from 'react-hook-form';
import type { FormProps } from './@types';
import FormProvider from './components/provider';

const Form = <T extends FieldValues>({
  onSubmit,
  schema,
  defaultValues,
  children,
  className,
}: FormProps<T>) => {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
    reValidateMode: 'onChange',
  });
  return (
    <FormProvider<T>
      onSubmit={onSubmit}
      methods={methods}
      className={className}
    >
      {children}
    </FormProvider>
  );
};
export default Form;
