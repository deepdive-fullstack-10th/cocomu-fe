import { useInfiniteQuery } from '@tanstack/react-query';
import studyApi from '@api/domain/study';
import { useMemo } from 'react';

export default function useGetMemberList(studyId: string) {
  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['memberList', studyId],
    queryFn: async ({ pageParam }) => {
      const response = await studyApi.getMember(studyId, pageParam);
      return response;
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      if (lastPage.length === 0) return undefined;
      return lastPage[lastPage.length - 1].id + 1;
    },
    enabled: !!studyId,
    staleTime: 1000 * 60,
  });

  const userList = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flat();
  }, [data]);

  return {
    userList,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  };
}
