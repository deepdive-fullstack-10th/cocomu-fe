import React, { useState } from 'react';
import SpaceList from '@pages/Study/SpaceList';
import MemberList from '@pages/Study/MemberList';
import StudyInfo from '@pages/Study/StudyInfo';
import { useParams } from 'react-router-dom';

import * as S from './style';
import DetailTab from './DetailTab';

export default function StudyDetail() {
  const [selectedTab, setSelectedTab] = useState('코딩 스페이스');
  const { studyId } = useParams<{ studyId: string }>();

  return (
    <S.Container>
      <DetailTab
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        studyId={studyId}
      />
      {selectedTab === '코딩 스페이스' && <SpaceList />}
      {selectedTab === '멤버 보기' && <MemberList />}
      {selectedTab === '스터디 정보' && <StudyInfo />}
    </S.Container>
  );
}
