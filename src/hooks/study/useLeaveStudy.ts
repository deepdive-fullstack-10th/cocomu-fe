import { useMutation, useQueryClient } from '@tanstack/react-query';
import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';

export default function useLeaveStudy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: studyApi.leave,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_LIST] });
    },
  });
}
