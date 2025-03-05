import { useInfiniteQuery } from '@tanstack/react-query';
import { SpaceListParams } from '@customTypes/space';
import { useCallback, useMemo, useState } from 'react';
import useDebounce from '@hooks/utils/useDebounce';
import spaceApi from '@api/domain/space';

export default function useGetSpaceList(studyId: string, params: SpaceListParams) {
  const [isFetching, setIsFetching] = useState(false);
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
      const response = await spaceApi.getSpaceList(studyId, requestParams);
      console.log(response);
      return response;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.length === 0) return undefined;
      return lastPage[lastPage.length - 1].id + 1;
    },
    enabled: !!studyId && !isFetching,
    staleTime: 1000 * 60,
  });

  const nextList = useCallback(async () => {
    if (isFetching || !hasNextPage || isFetchingNextPage) return;

    try {
      setIsFetching(true);
      await fetchNextPage();
    } catch (error) {
      console.error('무한 스크롤 에러:', error);
    } finally {
      setTimeout(() => {
        setIsFetching(false);
      }, 200);
    }
  }, [fetchNextPage, hasNextPage, isFetching, isFetchingNextPage]);

  const spaces = useMemo(() => data?.pages?.flat() || [], [data]);

  return {
    spaces,
    isLoading,
    hasNextPage,
    nextList,
    isFetchingNextPage,
  };
}
