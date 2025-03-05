import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface JoinStudyParams {
  studyId: string;
  password?: string;
  onClose: () => void;
}

export default function useJoinStudy() {
  const queryClient = useQueryClient();

  const joinPublicStudy = useMutation({
    mutationFn: ({ studyId }: JoinStudyParams) => studyApi.joinPublic(studyId),
    onSuccess: (_, { studyId, onClose }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_DETAIL, studyId] });
      onClose();
    },
  });

  const joinPrivateStudy = useMutation({
    mutationFn: ({ studyId, password }: JoinStudyParams) => studyApi.joinPrivate(studyId, password!),
    onSuccess: (_, { studyId, onClose }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_DETAIL, studyId] });
      onClose();
    },
  });

  return { joinPublicStudy, joinPrivateStudy };
}
