import type { ControllerRenderProps, FieldError } from 'react-hook-form';

export interface InputSelectItem {
  value: string;
  label: string;
  isDisabled?: boolean;
}

export interface FormInputSelectProps {
  items: InputSelectItem[];
  name: string;
  id?: string;
  disabled?: boolean;
  placeholder?: string;
  isSearchable?: boolean;
}

export interface InputSelectProps
  extends FormInputSelectProps,
    Pick<ControllerRenderProps, 'onChange' | 'value'> {
  error?: string | FieldError;
}
