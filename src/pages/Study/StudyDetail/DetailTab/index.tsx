import React from 'react';
import TabMenu from '@components/_common/molecules/TabMenu';
import IconButton from '@components/_common/atoms/IconButton';
import { BsPlusLg } from 'react-icons/bs';
import { STUDY_LIST } from '@constants/constants';
import useGetStudyInfo from '@hooks/useGetStudyInfo';
import { Link, useLocation } from 'react-router-dom';

import * as S from './style';

interface DetailTabProps {
  studyId?: string;
}

export default function DetailTab({ studyId }: DetailTabProps) {
  const { data: study } = useGetStudyInfo(studyId ?? '');
  const location = useLocation();

  return (
    <S.DetailTabContainer>
      <S.StudyContainer>
        <S.StudyTitle>{study?.name || '스터디 이름 불러오는 중...'}</S.StudyTitle>
        <S.IconButtonWrapper>
          <IconButton
            shape='round'
            content='스페이스 생성하기'
          >
            <BsPlusLg />
          </IconButton>
        </S.IconButtonWrapper>
      </S.StudyContainer>
      <TabMenu
        tabs={STUDY_LIST}
        currentPath={location.pathname}
        studyId={studyId}
      />
    </S.DetailTabContainer>
  );
}
