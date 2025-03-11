import { useQuery } from '@tanstack/react-query';

import QUERY_KEYS from '@constants/queryKeys';
import spaceApi from '@api/domain/space';

export default function useGetWaitingPage(codingSpaceId: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.SPACE_PAGE, codingSpaceId],
    queryFn: () => spaceApi.getWaitingPage(codingSpaceId),
    enabled: !!codingSpaceId,
  });
}
