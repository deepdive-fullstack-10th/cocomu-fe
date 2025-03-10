import { useQuery } from '@tanstack/react-query';

import QUERY_KEYS from '@constants/queryKeys';
import spaceApi from '@api/domain/space';

export default function useGetFeedbackPage(codingSpaceId: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.SPACE_PAGE, codingSpaceId],
    queryFn: () => spaceApi.getFeedbackPage(codingSpaceId),
    enabled: !!codingSpaceId,
    staleTime: 1000 * 60 * 3,
  });
}
