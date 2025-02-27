import { useQuery } from '@tanstack/react-query';
import { StudyQueryParams } from '@customTypes/study';
import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';

interface UseStudyListProps {
  queryParams: StudyQueryParams;
  onTotalItemsChange: (totalItems: number) => void;
}

export default function useStudyList({ queryParams, onTotalItemsChange }: UseStudyListProps) {
  const { page, size } = queryParams;

  return useQuery({
    queryKey: [QUERY_KEYS.STUDY_LIST, queryParams],
    queryFn: async () => {
      const { studies, totalItems } = await studyApi.fetchStudies(queryParams);
      onTotalItemsChange(totalItems);
      return studies;
    },
    enabled: page !== undefined && size !== undefined,
  });
}
