import type { InputSelectItem } from '@components/FormInputSelect/@types';
import type { AxiosPromise } from 'axios';
import { z } from 'zod';
export interface DogAPIResponse {
  success: string;
  message: string | string[];
}

export interface DogBreedListAll<TData> {
  [key: string]: [] | TData[];
}
export interface DogsBreedAll {
  [key: string]: string[];
}
export type SidebarItemValue = 'dogs' | 'cats';
export type DogImage = { name: string; url: string };

export interface SidebarItem {
  label: string;
  value: SidebarItemValue;
}

export interface SidebarProps {
  items: SidebarItem[];
  queryAPI?: string;
  onChange: (sidebar: string) => void;
}

export interface SubBreedFormInputSelectProps {
  breed: InputSelectItem;
  dogsBreeds: DogsBreedAll | null;
  id?: string;
}
export interface FormDogsFilterProps {
  dogsBreedItems: InputSelectItem[];
  dogBreeds: DogsBreedAll | null;
  onSubmit: (data: FormValues) => void;
  onReset: () => void;
}

export interface CardLayoutDogsProps {
  dogBreeds: DogsBreedAll | null;
  filter?: FormValues;
}

export interface GridCardProps {
  dogBreedsImages: DogImage[];
}
export interface DogImagePromise {
  name: string;
  request: AxiosPromise<DogAPIResponse>;
}
const formValuesSchema = z
  .object({
    breed: z.string().min(1, { message: 'Please select a breed' }),
    subBreed: z.string().optional(),
    random: z.number().max(8, { message: 'Too Big!' }),
  })
  .required();

type FormValues = z.infer<typeof formValuesSchema>;

export { formValuesSchema as dogsFilterFormValuesSchema };
export type { FormValues as DogsFilterFormValues };
