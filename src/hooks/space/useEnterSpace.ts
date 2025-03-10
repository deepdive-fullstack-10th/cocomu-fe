import spaceApi from '@api/domain/space';
import { ROUTES } from '@constants/path';
import { SpaceStatusData } from '@customTypes/space';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface EnterSpaceResponse {
  status: SpaceStatusData;
}

export default function useEnterSpace(studyId: number, codingSpaceId: number) {
  const navigate = useNavigate();

  const mutation: UseMutationResult<EnterSpaceResponse, unknown, string> = useMutation({
    mutationFn: spaceApi.enter,
    onSuccess: ({ status }) => {
      navigate(ROUTES.SPACE[status]({ studyId, codingSpaceId }), { replace: true });
    },
    onError: () => {
      navigate(ROUTES.STUDY.DETAIL({ studyId }));
    },
  });

  return { enterSpaceMutate: mutation.mutate, isLoading: mutation.isPending };
}
