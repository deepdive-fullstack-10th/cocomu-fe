import spaceApi from '@api/domain/space';
import { ROUTES } from '@constants/path';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useCreateSpace(studyId: number) {
  const navigate = useNavigate();

  const createSpaceMutate = useMutation({
    mutationFn: spaceApi.create,
    onSuccess: () => {
      navigate(ROUTES.STUDY.DETAIL({ studyId }), { replace: true });
    },
  });

  return { createSpaceMutate };
}
