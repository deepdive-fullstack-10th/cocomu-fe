import spaceApi from '@api/domain/codingSpace';
import { ROUTES } from '@constants/path';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useCreateSpace() {
  const navigate = useNavigate();

  const createSpaceMutate = useMutation({
    mutationFn: spaceApi.create,
    onSuccess: ({ codingSpaceId }) => {
      navigate(ROUTES.SPACE.DETAIL({ spaceId: codingSpaceId }));
    },
  });

  return { createSpaceMutate };
}
