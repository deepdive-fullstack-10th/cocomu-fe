import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import { STUDY_TABS } from '@constants/constants';
import { ROUTES } from '@constants/path';

import TabMenu from '@components/_common/molecules/TabMenu';
import IconButton from '@components/_common/atoms/IconButton';
import { BsPlusLg } from 'react-icons/bs';

import useGetStudyInfo from '@hooks/study/useGetStudyInfo';
import S from './style';

export default function StudyDetail() {
  const navigate = useNavigate();
  const { studyId } = useParams<{ studyId: string }>();
  const { data } = useGetStudyInfo(studyId);
  const [selectedTab, setSelectedTab] = useState<(typeof STUDY_TABS)[number]>(STUDY_TABS[0]);

  const { name = '스터디 이름 불러오는 중...' } = data || {};

  const handleTabNavigation = (tab: (typeof STUDY_TABS)[number]) => {
    if (!studyId) return;

    if (tab === STUDY_TABS[0]) {
      navigate(ROUTES.STUDY.DETAIL({ studyId }));
    } else if (tab === STUDY_TABS[1]) {
      navigate(ROUTES.STUDY.MEMBERS({ studyId }));
    } else if (tab === STUDY_TABS[2]) {
      navigate(ROUTES.STUDY.INFO({ studyId }));
    }
  };

  useEffect(() => {
    handleTabNavigation(selectedTab);
  }, [selectedTab]);

  const handleCreate = () => {
    navigate(ROUTES.SPACE.CREATE({ studyId }));
  };

  return (
    <S.Container>
      <S.Header>
        <S.Name>{name}</S.Name>
        <S.ButtonWrapper>
          <IconButton
            shape='round'
            content='스페이스 생성하기'
            onClick={handleCreate}
          >
            <BsPlusLg />
          </IconButton>
        </S.ButtonWrapper>
      </S.Header>
      <TabMenu
        tabs={STUDY_TABS}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />
      <Outlet />
    </S.Container>
  );
}
