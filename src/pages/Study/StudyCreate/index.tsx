import { useState } from 'react';
import StudyCreateForm from '@components/Study/StudyCreateForm';
import { CreateStudyData } from '@customTypes/study';
import useCreateStudy from '@hooks/useCreateStudy';
import { ACCESS_STATUS } from '@constants/constants';

export default function StudyCreate() {
  const [selectedStatus, setSelectedStatus] = useState<(typeof ACCESS_STATUS)[number]>(ACCESS_STATUS[0]);
  const { createPublicMutate, createPrivateMutate } = useCreateStudy();

  const handleSubmit = (studyData: CreateStudyData) => {
    if (selectedStatus === ACCESS_STATUS[0]) {
      createPublicMutate.mutate({ ...studyData, password: undefined });
    } else if (selectedStatus === ACCESS_STATUS[1]) {
      createPrivateMutate.mutate(studyData);
    }
  };

  return (
    <StudyCreateForm
      selectedStatus={selectedStatus}
      setSelectedStatus={setSelectedStatus}
      onSubmit={handleSubmit}
    />
  );
}
