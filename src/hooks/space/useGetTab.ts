import { useQuery } from '@tanstack/react-query';

import spaceApi from '@api/domain/space';
import QUERY_KEYS from '@constants/queryKeys';

export default function useGetTab(codingSpaceId: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.SPACE_TAB, codingSpaceId],
    queryFn: () => spaceApi.getTab(codingSpaceId),
    enabled: !!codingSpaceId,
  });
}
