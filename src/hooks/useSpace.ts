import { useQuery, useMutation } from '@tanstack/react-query';
import spaceApi from '@api/domain/space';
import { WAITING_INFO } from '@constants/modal';
import { useModalStore } from '@stores/useModalStore';
import { useNavigate } from 'react-router-dom';

export function useSpaceDetail({ codingSpaceId }: { codingSpaceId: string }) {
  const query = useQuery({
    queryKey: ['spaceDetail', codingSpaceId],
    queryFn: () => spaceApi.detail(codingSpaceId),
    enabled: !!codingSpaceId,
  });

  return query;
}

export function useSpaceStart() {
  const navigate = useNavigate();
  const { open } = useModalStore();
  const spaceStartMutate = useMutation({
    mutationFn: spaceApi.start,
    onSuccess: (codingSpaceId) => {
      open('waiting', {
        label: WAITING_INFO.problem.label,
        description: WAITING_INFO.problem.description,
        navigate: navigate(WAITING_INFO.problem.navigate(codingSpaceId)),
      });
    },
  });

  return { spaceStartMutate };
}

export function useTabData({ codingSpaceId }: { codingSpaceId: string }) {
  const query = useQuery({
    queryKey: ['TabData', codingSpaceId],
    queryFn: () => spaceApi.tab(codingSpaceId),
    enabled: !!codingSpaceId,
  });

  return query;
}
