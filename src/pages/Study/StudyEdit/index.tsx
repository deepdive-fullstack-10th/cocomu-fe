import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ACCESS_STATUS, ACCESS_STATUS_MAP } from '@constants/constants';
import { CreateStudyData, StudyFormData } from '@customTypes/study';

import useEditStudy from '@hooks/study/useEditStudy';
import useGetStudyInfo from '@hooks/study/useGetStudyInfo';

import StudyCreateForm from '@components/Study/StudyCreateForm';
import Loading from '@pages/Loading';

export default function StudyEdit() {
  const { studyId } = useParams<{ studyId: string }>();
  const { data, isLoading } = useGetStudyInfo(studyId);
  const { editStudyMutate } = useEditStudy();

  const [selectedStatus, setSelectedStatus] = useState<(typeof ACCESS_STATUS)[number]>(null);
  const [initialValues, setInitialValues] = useState<StudyFormData>(null);
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    if (data) {
      setSelectedStatus(ACCESS_STATUS_MAP[data.status]);
      setInitialValues({
        name: data.name,
        password: '',
        totalUserCount: data.totalUserCount.toString(),
        languages: data.languages,
        workbooks: data.workbooks,
      });
      setDescription(data.description);
    }
  }, [data]);

  const handleSubmit = (studyData: CreateStudyData) => {
    if (selectedStatus === ACCESS_STATUS[0]) {
      editStudyMutate.mutate({ studyId, editStudyData: { ...studyData, status: 'PUBLIC', password: undefined } });
    } else if (selectedStatus === ACCESS_STATUS[1]) {
      editStudyMutate.mutate({ studyId, editStudyData: { ...studyData, status: 'PRIVATE' } });
    }
  };

  if (isLoading || !initialValues) return <Loading />;

  return (
    <StudyCreateForm
      initialValues={initialValues}
      description={description}
      selectedStatus={selectedStatus}
      setSelectedStatus={setSelectedStatus}
      onSubmit={handleSubmit}
    />
  );
}
