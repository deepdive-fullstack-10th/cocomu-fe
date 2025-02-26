import { useQuery } from '@tanstack/react-query';
import spaceApi from '@api/domain/codingSpace';

function useWaitingSpace({ spaceId }: { spaceId: string }) {
  const query = useQuery({
    queryKey: ['waitingSpace', spaceId],
    queryFn: () => spaceApi.waiting(spaceId),
    enabled: !!spaceId,
  });

  return query;
}

export default useWaitingSpace;
