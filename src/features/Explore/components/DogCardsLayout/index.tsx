import Pagination from '@components/Pagination';
import type {
  CardLayoutDogsProps,
  DogAPIResponse,
  DogImagePromise,
} from '@features/Explore/@types';
import axios from 'axios';
import type { FC } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import DogCards from '../DogCards';

const DogCardsLayout: FC<CardLayoutDogsProps> = ({ dogBreeds, filter }) => {
  // states
  const [dogsImageRequestUrls, setDogsImageRequestUrls] = useState<
    { name: string; url: string }[]
  >([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  // callbacks
  const generateDogImageUrls = useCallback(() => {
    if (dogBreeds) {
      return Object.keys(dogBreeds).map((breed) => {
        if (dogBreeds[breed].length > 0) {
          const subBreedsListUrl = dogBreeds[breed].map((subBreed) => ({
            name: `${subBreed} ${breed}`,
            url: `https://dog.ceo/api/breed/${breed}/${dogBreeds[breed][0]}/images/random`,
          }));
          return subBreedsListUrl.reduce(
            (prev, current) => {
              return { ...prev, ...current };
            },
            { name: '', url: '' }
          );
        } else
          return {
            name: breed,
            url: `https://dog.ceo/api/breed/${breed}/images/random`,
          };
      });
    }
    return [];
  }, [dogBreeds]);

  const requestGetDogsImageUrls = useCallback(
    async (dogImagePromiseList: DogImagePromise[]) => {
      setLoading(true);
      try {
        const requestList = dogImagePromiseList.map(({ request }) => request);
        await Promise.all(requestList).then((values) => {
          setDogsImageRequestUrls(
            values.map(({ data }, i) => {
              return {
                name: dogImagePromiseList[i].name,
                url: data.message as string,
              };
            })
          );
        });
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    },
    []
  );

  const filteredDogImageUrls = useCallback(async () => {
    setLoading(true);
    if (filter && filter.breed) {
      if (filter.subBreed) {
        const url = `https://dog.ceo/api/breed/${filter.breed}/${filter.subBreed}/images/random/${filter.random}`;
        await axios
          .get(url)
          .then(
            ({ data }: { data: { success: string; message: string[] } }) => {
              setDogsImageRequestUrls(
                data.message.map((url) => ({
                  name: `${filter.subBreed} ${filter.breed}`,
                  url,
                }))
              );
            }
          );
      } else {
        const url = `https://dog.ceo/api/breed/${filter.breed}/images/random/${filter.random}`;
        await axios
          .get(url)
          .then(
            ({ data }: { data: { success: string; message: string[] } }) => {
              setDogsImageRequestUrls(
                data.message.map((url) => ({
                  name: `${filter.breed}`,
                  url,
                }))
              );
            }
          );
      }
    }
    setLoading(false);
  }, [filter]);

  const dogImagesResponse = useCallback(async () => {
    if (!filter || !filter.breed) {
      let dogImagePromiseList: DogImagePromise[] = [];
      dogImagePromiseList = generateDogImageUrls()
        .slice((page - 1) * 8, page * 8)
        .map(({ name, url }) => ({
          name: name,
          request: axios.get<DogAPIResponse>(url),
        }));
      await requestGetDogsImageUrls(dogImagePromiseList);
    }
  }, [page, generateDogImageUrls, requestGetDogsImageUrls, filter]);

  const onPaginationGoToPage = useCallback((page: number) => {
    setPage(page);
    setLoading(true);
  }, []);

  const DogCardsLayoutSkeleton = useMemo(() => {
    const s = [];
    const count = filter && filter.breed ? Number(filter.random) : 8;
    for (let i = 0; i < count; i++) {
      s.push(
        <li key={i} className="lg:max-w-[350px] h-[400px] space-y-8 mr-3">
          <div className="w-full h-[250px] bg-zinc-400 animate-pulse rounded-lg" />
          <div className="w-1/2 rounded-lg bg-zinc-400 animate-pulse h-10 ml-4" />
        </li>
      );
    }
    return s;
  }, [filter]);

  const totalDogCards = useMemo(() => {
    if (filter && filter.breed) return Number(filter.random);
    return generateDogImageUrls().length;
  }, [filter, generateDogImageUrls]);

  // effects
  useEffect(() => {
    filteredDogImageUrls().catch((e) => console.log(e));
  }, [filteredDogImageUrls]);

  useEffect(() => {
    dogImagesResponse().catch((e) => console.log(e));
  }, [dogImagesResponse]);

  if (dogsImageRequestUrls.length === 0 || isLoading)
    return (
      <div>
        <ul className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-8">
          {DogCardsLayoutSkeleton}
        </ul>
        <div className="flex gap-x-4 w-full justify-center mb-8">
          <div className="w-8 h-8 rounded-lg bg-zinc-400 animate-pulse" />
          <div className="w-8 h-8 rounded-lg bg-zinc-400 animate-pulse" />
          <div className="w-8 h-8 rounded-lg bg-zinc-400 animate-pulse" />
          <div className="w-8 h-8 rounded-lg bg-zinc-400 animate-pulse" />
        </div>
      </div>
    );
  return (
    <div className="mb-8">
      <DogCards dogBreedsImages={dogsImageRequestUrls} />
      <Pagination
        total={totalDogCards}
        pageCurrent={page}
        pageSize={8}
        goToPage={onPaginationGoToPage}
      />
    </div>
  );
};
export default DogCardsLayout;
