import spaceApi from '@api/domain/space';
import { ROUTES } from '@constants/path';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useJoinSpace() {
  const navigate = useNavigate();

  const joinSpaceMutate = useMutation({
    mutationFn: spaceApi.join,
    onSuccess: ({ codingSpaceId }) => {
      navigate(ROUTES.SPACE.DETAIL({ codingSpaceId }));
    },
  });

  return { joinSpaceMutate };
}
