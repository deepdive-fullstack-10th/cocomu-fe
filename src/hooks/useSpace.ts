import { useQuery, useMutation } from '@tanstack/react-query';
import spaceApi from '@api/domain/codingSpace';
import { WAITING_INFO } from '@constants/modal';
import { useModalStore } from '@stores/useModalStore';
import { useNavigate } from 'react-router-dom';

export function useSpaceDetail({ spaceId }: { spaceId: string }) {
  const query = useQuery({
    queryKey: ['spaceDetail', spaceId],
    queryFn: () => spaceApi.detail(spaceId),
    enabled: !!spaceId,
  });

  return query;
}

export function useSpaceStart() {
  const navigate = useNavigate();
  const { open } = useModalStore();
  const spaceStartMutate = useMutation({
    mutationFn: spaceApi.start,
    onSuccess: (spaceId) => {
      open('waiting', {
        label: WAITING_INFO.problem.label,
        description: WAITING_INFO.problem.description,
        navigate: navigate(WAITING_INFO.problem.navigate(spaceId)),
      });
    },
  });

  return { spaceStartMutate };
}
