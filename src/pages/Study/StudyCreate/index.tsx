import { useState } from 'react';

import { ACCESS_STATUS } from '@constants/common';
import { CreateStudyData } from '@customTypes/study';

import useCreateStudy from '@hooks/study/useCreateStudy';

import StudyForm from '@components/Study/StudyForm';

export default function StudyCreate() {
  const [selectedStatus, setSelectedStatus] = useState<(typeof ACCESS_STATUS)[number]['id']>(ACCESS_STATUS[0].id);
  const { createPublicStudyMutate, createPrivateStudyMutate } = useCreateStudy();

  const handleSubmit = (studyData: CreateStudyData) => {
    if (selectedStatus === ACCESS_STATUS[0].id) {
      createPublicStudyMutate.mutate({ ...studyData, password: undefined });
    } else if (selectedStatus === ACCESS_STATUS[1].id) {
      createPrivateStudyMutate.mutate(studyData);
    }
  };

  return (
    <StudyForm
      selectedStatus={selectedStatus}
      setSelectedStatus={setSelectedStatus}
      onSubmit={handleSubmit}
    />
  );
}
