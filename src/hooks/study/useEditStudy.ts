import { useNavigate } from 'react-router-dom';
import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ROUTES } from '@constants/path';

export default function useJoinPublicStudy() {
  const navigate = useNavigate(); // ✅ 훅 최상단에서 호출
  const queryClient = useQueryClient();

  const joinPublicMutate = useMutation({
    mutationFn: studyApi.joinPublicStudy,
    onSuccess: (_, studyId) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_DETAIL, String(studyId)] });
      navigate(ROUTES.STUDY.DETAIL({ studyId: String(studyId) })); // ✅ 정상 동작
    },
  });

  return { joinPublicMutate };
}
