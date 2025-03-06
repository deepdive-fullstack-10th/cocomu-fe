import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface JoinStudyParams {
  studyId: string;
  password?: string;
}

export default function useJoinStudy() {
  const queryClient = useQueryClient();

  const joinPublicStudy = useMutation({
    mutationFn: ({ studyId }: JoinStudyParams) => {
      console.log(`[useJoinStudy] 공개 스터디 참가 API 호출: studyId=${studyId}`);
      return studyApi.joinPublic(studyId);
    },
    onSuccess: (_, { studyId }) => {
      console.log(`[useJoinStudy] 공개 스터디 참가 성공: studyId=${studyId}`);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_DETAIL, studyId] });
    },
    onError: (error) => {
      console.error('[useJoinStudy] 공개 스터디 참가 실패:', error);
    },
  });

  const joinPrivateStudy = useMutation({
    mutationFn: ({ studyId, password }: JoinStudyParams) => {
      console.log(`[useJoinStudy] 비공개 스터디 참가 API 호출: studyId=${studyId}, password=${password}`);
      return studyApi.joinPrivate(studyId, password!);
    },
    onSuccess: (_, { studyId }) => {
      console.log(`[useJoinStudy] 비공개 스터디 참가 성공: studyId=${studyId}`);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_DETAIL, studyId] });
    },
    onError: (error) => {
      console.error('[useJoinStudy] 비공개 스터디 참가 실패:', error);
    },
  });

  return { joinPublicStudy, joinPrivateStudy };
}
