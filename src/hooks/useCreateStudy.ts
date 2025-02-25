import studyApi from '@api/domain/study';
import { ROUTES } from '@constants/path';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useCreateStudy() {
  const navigate = useNavigate();

  const createPublicMutate = useMutation({
    mutationFn: studyApi.createPublicStudy,
    onSuccess: ({ studyId }) => {
      navigate(ROUTES.STUDY.PARTICIPATION({ studyId }));
    },
  });

  return { createPublicMutate, createPrivateMutate };
}
