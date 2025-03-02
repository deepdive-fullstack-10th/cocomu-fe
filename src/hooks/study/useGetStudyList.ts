import { useQuery } from '@tanstack/react-query';

import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';
import { GetListParams } from '@customTypes/study';

export default function useGetStudyList(params: GetListParams) {
  return useQuery({
    queryKey: [QUERY_KEYS.STUDY_LIST, params],
    queryFn: async () => studyApi.getList(params),
  });
}
