import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import spaceApi from '@api/domain/space';
import { WAITING_INFO } from '@constants/modal';
import { useModalStore } from '@stores/useModalStore';

export default function useFinishSpace(studyId: number, codingSpaceId: number) {
  const navigate = useNavigate();
  const { open } = useModalStore();

  const finishSpaceMutate = useMutation({
    mutationFn: spaceApi.finish,
    onSuccess: () => {
      open('waiting', {
        label: WAITING_INFO.finish.label,
        description: WAITING_INFO.finish.description,
        navigate: navigate(WAITING_INFO.finish.navigate(studyId, codingSpaceId)),
      });
    },
  });

  return { finishSpaceMutate };
}
