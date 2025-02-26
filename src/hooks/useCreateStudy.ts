import studyApi from '@api/domain/study';
import { ROUTES } from '@constants/path';
import QUERY_KEYS from '@constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useCreateStudy() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const createPublicMutate = useMutation({
    mutationFn: studyApi.createPublicStudy,
    onSuccess: ({ studyId }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_DETAIL, studyId] });
      navigate(ROUTES.STUDY.PARTICIPATION({ studyId }));
    },
  });

  const createPrivateMutate = useMutation({
    mutationFn: studyApi.createPrivateStudy,
    onSuccess: ({ studyId }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_DETAIL, studyId] });
      navigate(ROUTES.STUDY.PARTICIPATION({ studyId }));
    },
  });

  return { createPublicMutate, createPrivateMutate };
}
