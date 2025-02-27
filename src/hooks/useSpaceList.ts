import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { spaceApi } from '@api/domain/space';
import { SpaceListParams } from '@customTypes/space';
import { useCallback, useEffect, useMemo, useState } from 'react';

export default function useSpaceList(studyId: string) {
  const [filters, setFilters] = useState<Omit<SpaceListParams, 'lastIndex' | 'limit'>>({
    status: null,
    languages: null,
    joinedSpace: null,
    keyword: null,
  });

  useEffect(() => {
    /* console.log('필터 상태가 변경됨:', filters); */
    // 여기서 필터 변경에 따른 추가 작업 수행 가능
  }, [filters]);

  const queryKey = ['spaceList', studyId, JSON.stringify(filters)];
  const queryClient = useQueryClient();

  const updateFilters = useCallback(
    (newFilters: Partial<SpaceListParams>) => {
      setFilters((prev) => {
        const updated = { ...prev, ...newFilters };
        console.log('쿼리 키 변경:', updated);
        queryClient.invalidateQueries({
          queryKey: ['spaceList', studyId],
        });
        return updated;
      });
    },
    [studyId, queryClient],
  );

  const queryResult = useInfiniteQuery({
    queryKey: ['spaceList', studyId, JSON.stringify(filters)],
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
      } catch (e) {
        console.error('데이터 로드 실패: ', e);
      }
    }
  }, [queryResult.hasNextPage, queryResult.isFetchingNextPage, queryResult.fetchNextPage]);

  const resetFilters = useCallback(() => {
    setFilters({ status: null, languages: null, joinedSpace: null, keyword: null });
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
