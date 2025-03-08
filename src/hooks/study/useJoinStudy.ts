import studyApi from '@api/domain/study';
import { ROUTES } from '@constants/path';
import QUERY_KEYS from '@constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useJoinStudy() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const joinPublicStudyMutate = useMutation({
    mutationFn: studyApi.joinPublic,
    onSuccess: ({ studyId }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_INFO, studyId] });
      navigate(ROUTES.STUDY.DETAIL({ studyId }));
    },
  });

  const joinPrivateStudyMutate = useMutation({
    mutationFn: ({ studyId, password }: { studyId: string; password: string }) =>
      studyApi.joinPrivate(studyId, password!),
    onSuccess: ({ studyId }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_INFO, studyId] });
      navigate(ROUTES.STUDY.DETAIL({ studyId }));
    },
  });

  return { joinPublicStudyMutate, joinPrivateStudyMutate };
}
