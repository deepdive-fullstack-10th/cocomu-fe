import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import spaceApi from '@api/domain/space';
import { WAITING_INFO } from '@constants/modal';
import { useModalStore } from '@stores/useModalStore';

export default function useFeedBackSpace(codingSpaceId: number) {
  const navigate = useNavigate();
  const { open } = useModalStore();

  const feedBackSpaceMutate = useMutation({
    mutationFn: spaceApi.running,
    onSuccess: () => {
      open('waiting', {
        label: WAITING_INFO.feedback.label,
        description: WAITING_INFO.feedback.description,
        navigate: navigate(WAITING_INFO.feedback.navigate(codingSpaceId)),
      });
    },
  });

  return { feedBackSpaceMutate };
}
