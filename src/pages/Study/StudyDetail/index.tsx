import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import { STUDY_TABS } from '@constants/constants';
import { ROUTES } from '@constants/path';

import TabMenu from '@components/_common/molecules/TabMenu';
import IconButton from '@components/_common/atoms/IconButton';
import { BsPlusLg } from 'react-icons/bs';

import S from './style';

export default function StudyDetail() {
  const navigate = useNavigate();
  const { studyId } = useParams<{ studyId: string }>();
  const [selectedTab, setSelectedTab] = useState<(typeof STUDY_TABS)[number]>(STUDY_TABS[0]);

  const handleTabNavigation = (tab: (typeof STUDY_TABS)[number]) => {
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
        {/* TODO: 스터디 상세 페이지 조회 api 호출하여 스터디 이름 받아오기 */}
        <S.Name>딥다이버즈 스터디임</S.Name>
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
