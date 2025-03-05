import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { SpaceListParams } from '@customTypes/space';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useDebounce from '@hooks/utils/useDebounce';
import studyApi from '@api/domain/study';

export default function useSpaceList(studyId: string) {
  const [filters, setFilters] = useState<Omit<SpaceListParams, 'lastIndex'>>({
    status: null,
    language: null,
    joinedSpace: null,
    keyword: null,
  });
  const queryClient = useQueryClient();
  const [isFetching, setIsFetching] = useState(false);
  const debouncedFilters = useDebounce(filters, 100);

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['spaceList', studyId, debouncedFilters],
    queryFn: async ({ pageParam }) => {
      const params: SpaceListParams = {
        ...debouncedFilters,
        lastIndex: pageParam,
      };
      console.log('api 호출 파라미터: ', params);
      return studyApi.fetchSpaceList(studyId, params);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;
      return allPages.reduce((sum, page) => sum + page.length, 0);
    },
    enabled: !!studyId,
  });

  const updateFilters = useCallback((newFilters: Partial<SpaceListParams>) => {
    setFilters((prev) => {
      const updated = { ...prev, ...newFilters };
      console.log('쿼리 키 변경:', updated);
      return updated;
    });
  }, []);

  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: ['spaceList', studyId, debouncedFilters],
    });
  }, [queryClient, studyId, debouncedFilters]);

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
      }, 100);
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
