import { useInfiniteQuery } from '@tanstack/react-query';
import studyApi from '@api/domain/study';

export default function useGetMemberList(studyId: string, lastIndex?: number) {
  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['memberList', studyId, lastIndex],
    queryFn: async ({ pageParam = lastIndex }) => await studyApi.getMember(studyId, pageParam),
    initialPageParam: lastIndex,
    getNextPageParam: (lastPage) => {
      const lastId = lastPage[lastPage.length - 1];
      return lastId;
    },
  });
}
