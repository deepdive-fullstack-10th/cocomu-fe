import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface JoinStudyParams {
  studyId: string;
  onClose: () => void;
}

export default function useJoinStudy() {
  const queryClient = useQueryClient();

  const joinStudyMutate = useMutation({
    mutationFn: ({ studyId }: JoinStudyParams) => studyApi.joinPublic(studyId), // 🔹 현재는 공개 스터디만
    onSuccess: (_, { studyId, onClose }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_DETAIL, studyId] });
      onClose();
    },
  });

  return { joinStudyMutate };
}
