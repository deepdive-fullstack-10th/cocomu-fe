import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface JoinStudyParams {
  studyId: number;
  onClose: () => void;
}

export default function useJoinPublicStudy() {
  const queryClient = useQueryClient();

  const joinPublicMutate = useMutation({
    mutationFn: async ({ studyId }: JoinStudyParams) => {
      console.log(`[useJoinPublicStudy] Sending request to join study ${studyId}`);
      return studyApi.joinPublicStudy(studyId);
    },
    onSuccess: (_, { studyId, onClose }) => {
      console.log(`[useJoinPublicStudy] Successfully joined study ${studyId}`);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_DETAIL, String(studyId)] });

      console.log('[useJoinPublicStudy] Closing modal');
      onClose();
    },
  });

  return { joinPublicMutate };
}
