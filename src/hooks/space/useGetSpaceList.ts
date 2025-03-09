import { useQuery } from '@tanstack/react-query';

import spaceApi from '@api/domain/space';
import QUERY_KEYS from '@constants/queryKeys';
import { SpaceListData } from '@customTypes/space';

export default function useGetSpaceList(studyId: string, params: SpaceListData) {
  return useQuery({
    queryKey: [QUERY_KEYS.SPACE_LIST, studyId, params],
    queryFn: () => spaceApi.getList(studyId, params),
    enabled: !!studyId,
  });
}
