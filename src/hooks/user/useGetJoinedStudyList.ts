import { useInfiniteQuery } from '@tanstack/react-query';
import userApi from '@api/domain/user';
import QUERY_KEYS from '@constants/queryKeys';

interface UseGetSpaceListProps {
  userId: string;
}

export default function useGetStudyList({ userId }: UseGetSpaceListProps) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.STUDY_LIST, userId],
    queryFn: ({ pageParam = null }) => userApi.getStudyList(userId, pageParam),
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      if (!lastPage?.studies.length) return null;
      return lastPage.lastId ?? null;
    },
  });
}
