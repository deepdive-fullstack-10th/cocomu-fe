import { useState } from 'react';

import { ACCESS_STATUS } from '@constants/common';
import { CreateStudyData } from '@customTypes/study';

import useCreateStudy from '@hooks/study/useCreateStudy';

import StudyCreateForm from '@components/Study/StudyCreateForm';

export default function StudyCreate() {
  const [selectedStatus, setSelectedStatus] = useState<(typeof ACCESS_STATUS)[number]['id']>(ACCESS_STATUS[0].id);
  const { createPublicMutate, createPrivateMutate } = useCreateStudy();

  const handleSubmit = (studyData: CreateStudyData) => {
    if (selectedStatus === ACCESS_STATUS[0].id) {
      createPublicMutate.mutate({ ...studyData, password: undefined });
    } else if (selectedStatus === ACCESS_STATUS[1].id) {
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
