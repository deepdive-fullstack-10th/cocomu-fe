import useMyPageTab from '@hooks/utils/useMyPageTab';
import TabMenu from '@components/_common/molecules/TabMenu';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '@constants/path';
import { MYPAGE_TAB } from '@constants/common';
import S from './style';

export default function MyPage() {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedTab, handleNavigation } = useMyPageTab(userId!);



  };

  return (
    <>
      <S.HeaderContainer>MyPage</S.HeaderContainer>
      <TabMenu
        tabs={MYPAGE_TAB}
        selectedTab={selectedTab}
        onTabChange={handleNavigation}
      />
      <Outlet />
    </>
  );
}
