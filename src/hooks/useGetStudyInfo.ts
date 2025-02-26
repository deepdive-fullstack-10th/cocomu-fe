import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

export default function useGetStudyInfo(studyId: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.STUDY_DETAIL, studyId],
    queryFn: async () => studyApi.getStudyInfo(studyId),
    enabled: !!studyId,
  });
}
