import type { ReactNode } from 'react';
import type {
  DefaultValues,
  FieldValues,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';
import type { ZodType } from 'zod';

export interface FormProps<T extends FieldValues> {
  schema: ZodType<T>;
  onSubmit: SubmitHandler<T>;
  children: ReactNode;
  defaultValues: DefaultValues<T>;
  className: string;
}

export interface FormProviderProps<T extends FieldValues> {
  onSubmit: SubmitHandler<T>;
  methods: UseFormReturn<T>;
  children: ReactNode;
  className?: string;
}
