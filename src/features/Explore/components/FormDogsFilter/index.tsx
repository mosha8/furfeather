import Button from '@components/Button';
import FormProvider from '@components/Form/components/provider';
import FormInput from '@components/FormInput/index';
import FormInputSelect from '@components/FormInputSelect';
import {
  dogsFilterFormValuesSchema,
  type FormDogsFilterProps,
} from '@features/Explore/@types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useMemo, type FC } from 'react';
import { useForm } from 'react-hook-form';

export const FormDogsFilter: FC<FormDogsFilterProps> = ({
  dogsBreedItems,
  dogBreeds,
  onSubmit,
  onReset,
}) => {
  // form
  const formMethods = useForm({
    resolver: zodResolver(dogsFilterFormValuesSchema),
    defaultValues: {
      breed: '',
      subBreed: '',
      random: 1,
    },
    mode: 'onBlur',
  });
  const breedValue = formMethods.watch('breed');

  // memos
  const subBreedItems = useMemo(() => {
    if (dogBreeds && Object.keys(dogBreeds).length > 0) {
      if (dogBreeds[breedValue]) {
        return dogBreeds[breedValue].map((subBreed) => {
          return { label: subBreed, value: subBreed };
        });
      }
    }
    return [];
  }, [dogBreeds, breedValue]);

  // callbacks
  const onResetFormFilterDogs = useCallback(() => {
    onReset();
    formMethods.reset();
  }, [onReset, formMethods]);

  // effects
  useEffect(() => {
    if (dogBreeds && Object.keys(dogBreeds).includes(breedValue))
      formMethods.resetField('subBreed', { defaultValue: '' });
  }, [formMethods, dogBreeds, breedValue]);

  return (
    <FormProvider
      onSubmit={onSubmit}
      methods={formMethods}
      className="flex flex-col gap-y-8 rounded-lg"
    >
      <div className="flex flex-col gap-y-2">
        <label htmlFor="input-select-breed" className="text-primary">
          Breeds
        </label>
        <FormInputSelect
          id="input-select-breed"
          name="breed"
          items={dogsBreedItems}
          placeholder="breed"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="input-select-sub-breed" className="text-primary">
          Sub-breeds
        </label>
        <FormInputSelect
          name="subBreed"
          items={subBreedItems}
          placeholder="sub-breed"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="input-number-random" className="text-primary">
          How many images?
        </label>
        <FormInput
          id="input-number-random"
          type="number"
          name="random"
          placeholder="number"
        />
      </div>
      <div className="space-x-4">
        <Button
          variant="contained"
          color="primary"
          size="medium"
          type="submit"
          disabled={!breedValue || !formMethods.formState.isDirty}
        >
          Fetch me some!
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          disabled={!breedValue || !formMethods.formState.isDirty}
          onClick={onResetFormFilterDogs}
        >
          Reset
        </Button>
      </div>
    </FormProvider>
  );
};
export default FormDogsFilter;
