import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import spaceApi from '@api/domain/space';
import { WAITING_INFO } from '@constants/modal';
import { useModalStore } from '@stores/useModalStore';

export default function useStartSpace(studyId: number, codingSpaceId: number) {
  const navigate = useNavigate();
  const { open } = useModalStore();

  const startSpaceMutate = useMutation({
    mutationFn: spaceApi.start,
    onSuccess: () => {
      open('waiting', {
        label: WAITING_INFO.running.label,
        description: WAITING_INFO.running.description,
        navigate: navigate(WAITING_INFO.running.navigate(studyId, codingSpaceId)),
      });
    },
  });

  return { startSpaceMutate };
}
