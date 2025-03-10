import { useInfiniteQuery } from '@tanstack/react-query';
import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';

interface useGetMemberListProps {
  studyId: string;
}

export default function useGetMemberList({ studyId }: useGetMemberListProps) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.MEMBER_LIST, studyId],
    queryFn: ({ pageParam = null }) => studyApi.getMember(studyId, pageParam),
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      if (!lastPage.length) return null;
      return lastPage[lastPage.length - 1].nickname;
    },
    staleTime: 1000 * 60 * 3,
  });
}
