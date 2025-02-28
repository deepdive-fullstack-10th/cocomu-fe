import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { spaceApi } from '@api/domain/space';
import { SpaceListParams } from '@customTypes/space';
import { useCallback, useMemo, useState } from 'react';

export default function useSpaceList(studyId: string) {
  const queryClient = useQueryClient();
  const [isFetching, setIsFetching] = useState(false);

  const [filters, setFilters] = useState<Omit<SpaceListParams, 'lastIndex'>>({
    status: null,
    language: null,
    joinedSpace: null,
    keyword: null,
  });

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['spaceList', studyId, filters],
    queryFn: async ({ pageParam = 0 }) => {
      const params: SpaceListParams = {
        ...filters,
        lastIndex: pageParam,
      };
      console.log('api 호출 파라미터: ', params);
      return spaceApi.fetchSpaceList(studyId, params);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.length === 0) return undefined;
      return lastPage[lastPage.length - 1].id + 1;
    },
    enabled: !!studyId,
  });

  const updateFilters = useCallback(
    (newFilters: Partial<SpaceListParams>) => {
      setFilters((prev) => {
        const updated = { ...prev, ...newFilters };
        console.log('쿼리 키 변경:', updated);
        return updated;
      });

      queryClient.resetQueries({
        queryKey: ['spaceList', studyId],
      });
    },
    [studyId, queryClient],
  );

  const nextList = useCallback(async () => {
    if (isFetching || !hasNextPage || isFetchingNextPage) return;

    try {
      setIsFetching(true);
      console.log('api호출');
      await fetchNextPage();
    } catch (error) {
      console.error('무한 스크롤 에러:', error);
    } finally {
      setTimeout(() => {
        setIsFetching(false);
      }, 500);
    }
  }, [fetchNextPage, hasNextPage, isFetching, isFetchingNextPage]);

  const spaces = useMemo(() => data?.pages.flat() || [], [data]);

  return {
    spaces,
    updateFilters,
    filters,
    hasNextPage,
    nextList,
    isFetchingNextPage,
  };
}
