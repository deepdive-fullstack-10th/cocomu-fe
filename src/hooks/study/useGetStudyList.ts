import { useQuery, useQueryClient } from '@tanstack/react-query';
import { GetListData } from '@customTypes/study';
import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';
import { useEffect } from 'react';

interface UseGetStudyListProps {
  queryParams: GetListData;
  onTotalItemsChange: (totalPage: number) => void;
}

export default function useGetStudyList({ queryParams, onTotalItemsChange }: UseGetStudyListProps) {
  const queryClient = useQueryClient();
  const { page } = queryParams;

  const query = useQuery({
    queryKey: [QUERY_KEYS.STUDY_LIST, queryParams],
    queryFn: async () => {
      const { studies, totalPage } = await studyApi.getList(queryParams);
      queryClient.setQueryData([QUERY_KEYS.STUDY_LIST, 'totalPage'], totalPage);
      return studies;
    },
    enabled: page !== undefined,
  });

  useEffect(() => {
    const totalPage = queryClient.getQueryData<number>([QUERY_KEYS.STUDY_LIST, 'totalPage']);
    if (totalPage !== undefined) {
      onTotalItemsChange(totalPage);
    }
  }, [query.data, queryClient, onTotalItemsChange]);

  return query;
}
