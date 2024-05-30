'use client';
import config from '@configs/app.json';
import type {
  DogsBreedAll,
  DogsFilterFormValues,
  SidebarItem,
} from '@features/Explore//@types';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { DOGResponseData } from './api/dogsBreedListAll';
import { dogsBreedListAllKeyGenerator } from './api/dogsBreedListAll';
import DogCardsLayout from './components/DogCardsLayout';
import FormDogsFilter from './components/FormDogsFilter';
import Sidebar from './components/Sidebar';
const { ArticlesPageSidebarItems } = config;

const Explore = () => {
  // general
  const searchParams = useSearchParams();

  // query
  const { data } = useQuery<DOGResponseData>({
    queryKey: dogsBreedListAllKeyGenerator({}),
    placeholderData: keepPreviousData,
  });

  // states
  const [dogBreedsAll, setDogBreedsAll] = useState<DogsBreedAll | null>(null);
  const [filter, setFilter] = useState<DogsFilterFormValues>({
    breed: '',
    subBreed: '',
    random: 1,
  });
  const [urlQueryAPI, setUrlQueryAPI] = useState('dogs');

  // memos
  const dogBreedsAllItems = useMemo(() => {
    if (data && data.message) {
      return Object.keys(data.message).map((key) => {
        return { label: key, value: key };
      });
    }
    return [];
  }, [data]);

  const urlQuery = useMemo(() => searchParams.get('api'), [searchParams]);

  // callbacks
  const onSubmit = useCallback((filter: DogsFilterFormValues) => {
    setFilter(filter);
  }, []);
  const onReset = useCallback(() => {
    setFilter({ breed: '', subBreed: '', random: 1 });
  }, []);
  const sidebarOnChange = useCallback((sidebar: string) => {
    setUrlQueryAPI(sidebar);
  }, []);

  // effects
  useEffect(() => {
    if (data && data.message) setDogBreedsAll(data.message);
  }, [data]);

  useEffect(() => {
    setUrlQueryAPI(urlQuery || 'dogs');
  }, [urlQuery]);

  return (
    <div className="flex gap-x-16 mr-16 h-full">
      <div className="hidden lg:block">
        <Sidebar
          items={ArticlesPageSidebarItems as SidebarItem[]}
          queryAPI={urlQueryAPI}
          onChange={sidebarOnChange}
        />
      </div>
      {urlQueryAPI === 'dogs' && (
        <div className="flex flex-col mt-16 gap-y-8 w-full mx-10">
          <div className="border border-medium shadow-lg rounded-lg p-8">
            <FormDogsFilter
              dogsBreedItems={dogBreedsAllItems}
              dogBreeds={dogBreedsAll}
              onSubmit={onSubmit}
              onReset={onReset}
            />
          </div>
          <DogCardsLayout dogBreeds={dogBreedsAll} filter={filter} />
        </div>
      )}
      {urlQueryAPI === 'cats' && (
        <div className="w-full h-screen content-center">
          <Image
            src={'https://http.cat/images/501.jpg'}
            width={600}
            height={400}
            alt="cat-501"
            className="mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default Explore;
