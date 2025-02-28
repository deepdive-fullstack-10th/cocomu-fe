import React from 'react';
import TabMenu from '@components/_common/molecules/TabMenu';
import IconButton from '@components/_common/atoms/IconButton';
import { BsPlusLg } from 'react-icons/bs';
import { STUDY_LIST } from '@constants/constants';
import useGetStudyInfo from '@hooks/useGetStudyInfo';
import * as S from './style';

interface DetailTabProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
  studyId?: string;
}

export default function DetailTab({ selectedTab, onTabChange, studyId }: DetailTabProps) {
  const { data: study } = useGetStudyInfo(studyId ?? '');

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
        selectedTab={selectedTab}
        onTabChange={onTabChange}
      />
    </S.DetailTabContainer>
  );
}
