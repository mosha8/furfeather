import type { ReactNode } from 'react';
import type { ControllerRenderProps, FieldError } from 'react-hook-form';

export interface FormInputProps {
  name: string;
  type?: 'text' | 'number';
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
}
export interface InputBaseProps
  extends FormInputProps,
    Partial<Omit<ControllerRenderProps, 'name' | 'onChange'>>,
    Pick<ControllerRenderProps, 'name' | 'onChange'> {
  error?: string | FieldError;
}
