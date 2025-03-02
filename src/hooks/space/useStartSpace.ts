import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import spaceApi from '@api/domain/space';
import { WAITING_INFO } from '@constants/modal';
import { useModalStore } from '@stores/useModalStore';

export default function useStartSpace() {
  const navigate = useNavigate();
  const { open } = useModalStore();

  const startSpaceMutate = useMutation({
    mutationFn: spaceApi.start,
    onSuccess: (codingSpaceId) => {
      open('waiting', {
        label: WAITING_INFO.problem.label,
        description: WAITING_INFO.problem.description,
        navigate: navigate(WAITING_INFO.problem.navigate(codingSpaceId)),
      });
    },
  });

  return { startSpaceMutate };
}
