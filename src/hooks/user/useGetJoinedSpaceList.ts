import { useInfiniteQuery } from '@tanstack/react-query';
import userApi from '@api/domain/user';
import QUERY_KEYS from '@constants/queryKeys';

interface UseGetSpaceListProps {
  userId: string;
}

export default function useGetSpaceList({ userId }: UseGetSpaceListProps) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.SPACE_LIST, userId],
    queryFn: ({ pageParam = null }) => userApi.getSpaceList(userId, pageParam),
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      if (!lastPage?.codingSpaces.length) return null;
      return lastPage.lastId ?? null;
    },
    staleTime: 1000 * 60 * 3,
  });
}
