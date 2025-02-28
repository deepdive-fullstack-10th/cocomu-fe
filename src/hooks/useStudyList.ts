import { useQuery } from '@tanstack/react-query';
import { FetchStudiesData } from '@customTypes/study';
import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';

interface UseStudyListProps {
  queryParams: FetchStudiesData;
  onTotalItemsChange: (totalPage: number) => void;
}

export default function useStudyList({ queryParams, onTotalItemsChange }: UseStudyListProps) {
  const { page } = queryParams;

  return useQuery({
    queryKey: [QUERY_KEYS.STUDY_LIST, queryParams],
    queryFn: async () => {
      const { studies, totalPage } = await studyApi.fetchStudies(queryParams);
      onTotalItemsChange(totalPage);
      return studies;
    },
    enabled: page !== undefined,
  });
}
