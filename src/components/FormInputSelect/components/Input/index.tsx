import type {
  InputSelectItem,
  InputSelectProps,
} from '@components/FormInputSelect/@types';
import classNames from 'classnames';
import { useEffect, useState, type FC } from 'react';
import Select from 'react-select';

const Input: FC<InputSelectProps> = ({
  name,
  value,
  onChange,
  placeholder,
  items,
  isSearchable = true,
  disabled,
}) => {
  // states
  const [selectValue, SetSelectValue] = useState<InputSelectItem | null>();
  // effects
  useEffect(() => {
    if (value) {
      const newValue = items.find((item) => value === item.value);
      SetSelectValue(newValue);
    } else {
      SetSelectValue(null);
    }
  }, [value, items]);

  return (
    <div className="h-8 w-[250px]">
      <Select
        value={selectValue}
        name={name}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            outlineColor: 'none',
            borderColor: 'none',
            borderRadius: 'none',
            boxShadow: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
          }),
          option: (baseStyles) => ({
            ...baseStyles,
            cursor: 'pointer',
            backgroundColor: 'transparent',
          }),
        }}
        options={items}
        onChange={(newValue) => {
          SetSelectValue(newValue as InputSelectItem);
          onChange(newValue ? newValue.value : undefined);
        }}
        placeholder={placeholder}
        isDisabled={disabled}
        isSearchable={isSearchable}
        classNames={{
          control: () => 'hover:!border-yellow-400 !rounded !border-medium',
          singleValue: () => '!text-primary',
          option: ({ isSelected }) =>
            classNames(
              'hover:!bg-[#242424] hover:!text-primary',
              isSelected && '!text-yellow-600'
            ),
          input: () => '!text-primary',
        }}
      />
    </div>
  );
};

export default Input;
