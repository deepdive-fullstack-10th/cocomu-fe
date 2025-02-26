import { useQuery } from '@tanstack/react-query';
import { spaceApi } from '@api/domain/space';
import { SpaceData } from '@customTypes/space';

export default function useSpaceList(studyId: string) {
  return useQuery<SpaceData[], Error>({
    queryKey: ['spaceList', studyId],
    queryFn: async () => spaceApi.getSpaceList(studyId),
    enabled: !!studyId, // studyId가 있을 때만 쿼리 실행
  });
}
