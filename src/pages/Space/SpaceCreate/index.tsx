import SpaceCreateForm from '@components/Space/SpaceCreateForm';
import { CreateSpaceData, SpaceFormData, TestCaseIO } from '@customTypes/space';
import useCreateSpace from '@hooks/space/useCreateSpace';
import { convertTimeToMinutes } from '@utils/convertTime';
import { useParams } from 'react-router-dom';

export default function SpaceCreate() {
  const { studyId } = useParams<{ studyId: string }>();
  const { createSpaceMutate } = useCreateSpace();

  const handleSubmit = (spaceFormData: SpaceFormData, testCases: TestCaseIO[]) => {
    const createSpaceData: CreateSpaceData = {
      studyId: Number(studyId),
      codingSpace: {
        totalUserCount: spaceFormData.totalUserCount[0],
        timerTime: convertTimeToMinutes(spaceFormData.timerTime),
        workbookUrl: spaceFormData.workbookUrl,
        name: spaceFormData.name,
        languageId: spaceFormData.languageId[0],
        description: spaceFormData.description,
      },
      testCases,
    };

    createSpaceMutate.mutate(createSpaceData);
  };

  return (
    <SpaceCreateForm
      studyId={studyId}
      onSubmit={handleSubmit}
    />
  );
}
