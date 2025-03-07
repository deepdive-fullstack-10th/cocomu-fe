import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';
import { ROUTES } from '@constants/path';

export default function useLeaveStudy() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const leaveStudyMutate = useMutation({
    mutationFn: studyApi.leave,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_LIST] });
      navigate(ROUTES.STUDY.LIST());
    },
    onError: (error) => {
      console.error('스터디 나가기 실패:', error);
    },
  });

  return leaveStudyMutate;
}
