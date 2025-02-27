import { useInfiniteQuery } from '@tanstack/react-query';
import { spaceApi } from '@api/domain/space';
import { SpaceListParams } from '@customTypes/space';
import { useCallback, useMemo, useState } from 'react';

export default function useSpaceList(studyId: string) {
  const [filters, setFilters] = useState<Omit<SpaceListParams, 'lastIndex' | 'limit'>>({
    status: null,
    languages: null,
    joinable: null,
    keyword: null,
  });

  const updateFilters = useCallback((newFilters: Partial<SpaceListParams>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, []);

  const queryResult = useInfiniteQuery({
    queryKey: ['spaceList', studyId, filters],
    queryFn: async ({ pageParam = null }) => {
      const params: SpaceListParams = {
        ...filters,
        lastIndex: pageParam,
      };
      return spaceApi.fetchSpaceList(studyId, params);
    },
    initialPageParam: null,
    getNextPageParam: (lastPage, allPages) => (lastPage.length === 0 ? undefined : allPages.length + 1),
    enabled: !!studyId,
  });

  const spaces = useMemo(() => queryResult.data?.pages.flat() || [], [queryResult.data]);

  const nextList = useCallback(async () => {
    if (queryResult.hasNextPage && !queryResult.isFetchingNextPage) {
      try {
        await queryResult.fetchNextPage();
      } catch (error) {
        console.error('데이터 로드 실패: ', error);
      }
    }
  }, [queryResult.hasNextPage, queryResult.isFetchingNextPage, queryResult.fetchNextPage]);

  const resetFilters = useCallback(() => {
    setFilters({ status: null, languages: null, joinable: null, keyword: null });
  }, []);

  return {
    ...queryResult,
    spaces,
    nextList,
    updateFilters,
    resetFilters,
    filters,
    hasNextPage: queryResult.hasNextPage,
    isFetchingNextPage: queryResult.isFetchingNextPage,
  };
}
