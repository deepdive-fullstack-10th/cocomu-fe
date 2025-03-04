import { useQuery } from '@tanstack/react-query';

import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';

export default function useGetStudyInfo(studyId: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.STUDY_DETAIL, studyId],
    queryFn: async () => studyApi.getInfo(studyId),
    enabled: !!studyId,
  });
}
