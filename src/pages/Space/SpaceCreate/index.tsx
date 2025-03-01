import SpaceCreateForm from '@components/Space/SpaceCreateForm';
import { CreateSpaceData, SpaceFormData, TestCaseIO } from '@customTypes/space';
import useCreateSpace from '@hooks/useCreateSpace';
import { convertTimeToMinutes } from '@utils/convertTime';
import { useParams } from 'react-router-dom';

export default function SpaceCreate() {
  const { studyId } = useParams<{ studyId: string }>();
  const { createSpaceMutate } = useCreateSpace();

  const handleSubmit = (spaceFormData: SpaceFormData, testCases: TestCaseIO[]) => {
    const createSpaceData: CreateSpaceData = {
      studyId: Number(studyId),
      codingSpace: {
        name: spaceFormData.name,
        codingTime: convertTimeToMinutes(spaceFormData.codingTime),
        referenceUrl: spaceFormData.referenceUrl,
        totalUserCount: Number(spaceFormData.totalUserCount[0]),
        language: spaceFormData.language[0],
        description: spaceFormData.description,
      },
      testCases,
    };

    createSpaceMutate.mutate(createSpaceData);
  };

  return <SpaceCreateForm onSubmit={handleSubmit} />;
}
