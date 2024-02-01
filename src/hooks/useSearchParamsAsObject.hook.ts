import { useSearchParams } from 'react-router-dom';

export function useSearchParamsAsObject<T>() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries(
    [...searchParams].map((i) => [i[0], Number(i[1]) ? Number(i[1]) : i[1]]),
  ) as T;

  return {
    searchParams: searchParamsObject,
    setSearchParams,
    replaceSearchParam: (params: { [p: string]: string }) => {
      //const params = Object.fromEntries(Object.entries(p).map((i) => [i[0], String(i[1])]));
      setSearchParams({ ...Object.fromEntries([...searchParams]), ...params });
    },
  };
}
