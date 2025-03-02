import { useQuery } from '@tanstack/react-query';

import spaceApi from '@api/domain/space';
import QUERY_KEYS from '@constants/queryKeys';

export default function useGetSpaceInfo(codingSpaceId: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.SPACE_DETAIL, codingSpaceId],
    queryFn: () => spaceApi.getInfo(codingSpaceId),
    enabled: !!codingSpaceId,
  });
}
