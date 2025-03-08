import { useQuery } from '@tanstack/react-query';

import spaceApi from '@api/domain/space';
import QUERY_KEYS from '@constants/queryKeys';

export default function useGetSpaceStudyInfo(studyId: number) {
  return useQuery({
    queryKey: [QUERY_KEYS.SPACE_STUDY_INFO, studyId],
    queryFn: () => spaceApi.getStudyInfo(studyId),
    enabled: !!studyId,
  });
}
