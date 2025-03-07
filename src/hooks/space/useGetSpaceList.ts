import { useInfiniteQuery } from '@tanstack/react-query';
import { SpaceListParams } from '@customTypes/space';
import { useMemo } from 'react';
import useDebounce from '@hooks/utils/useDebounce';
import spaceApi from '@api/domain/space';

export default function useGetSpaceList(studyId: string, params: SpaceListParams) {
  const debouncedFilters = useDebounce(params.keyword, 300);

  const queryParams = useMemo(
    () => ({
      ...params,
      keyword: debouncedFilters,
    }),
    [params, debouncedFilters],
  );

  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['spaceList', studyId, queryParams],
    queryFn: async ({ pageParam }) => {
      const requestParams = {
        ...queryParams,
        lastId: pageParam,
      };
      const response = await spaceApi.getList(studyId, requestParams);
      return response;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.length === 0) return undefined;
      return lastPage[lastPage.length - 1].id + 1;
    },
    enabled: !!studyId,
    staleTime: 1000 * 60,
  });

  const spaces = useMemo(() => data?.pages?.flat() || [], [data]);

  return {
    spaces,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  };
}
