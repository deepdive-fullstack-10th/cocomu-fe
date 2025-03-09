import spaceApi from '@api/domain/space';
import { ROUTES } from '@constants/path';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useCreateSpace() {
  const navigate = useNavigate();

  const createSpaceMutate = useMutation({
    mutationFn: spaceApi.create,
    onSuccess: ({ codingSpaceId }) => {
      // navigate(ROUTES.SPACE.DETAIL({ codingSpaceId }));
      navigate(ROUTES.ROOT());
    },
  });

  return { createSpaceMutate };
}
