import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { SpaceListParams } from '@customTypes/space';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useDebounce from '@hooks/utils/useDebounce';
import spaceApi from '@api/domain/space';

export default function useGetSpaceList(studyId: string, params: SpaceListParams) {
  const queryClient = useQueryClient();
  const [isFetching, setIsFetching] = useState(false);
  const debouncedFilters = useDebounce(params.keyword, 300);

  const queryParams = useMemo(
    () => ({
      ...params,
      keyword: debouncedFilters,
    }),
    [params, debouncedFilters],
  );

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['spaceList', studyId, queryParams],
    queryFn: async ({ pageParam }) => {
      const requestParams = {
        ...queryParams,
        lastId: pageParam,
      };
      console.log('api 호출 파라미터: ', requestParams);
      return spaceApi.getSpaceList(studyId, requestParams);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;
      return allPages.reduce((sum, page) => sum + page.length, 0);
    },
    enabled: !!studyId,
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
      }, 100);
    }
  }, [fetchNextPage, hasNextPage, isFetching, isFetchingNextPage]);

  const spaces = useMemo(() => data?.pages.flat() || [], [data]);

  return {
    spaces,
    hasNextPage,
    nextList,
    isFetchingNextPage,
  };
}
