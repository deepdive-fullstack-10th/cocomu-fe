import studyApi from '@api/domain/study';
import { ROUTES } from '@constants/path';
import { EditStudyData } from '@customTypes/study';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useEditStudy() {
  const navigate = useNavigate();

  const editStudyMutate = useMutation({
    mutationFn: ({ studyId, editStudyData }: { studyId: string; editStudyData: EditStudyData }) =>
      studyApi.editStudy(studyId, editStudyData),
    onSuccess: ({ studyId }) => {
      navigate(ROUTES.STUDY.PARTICIPATION({ studyId }));
    },
  });

  return { editStudyMutate };
}
