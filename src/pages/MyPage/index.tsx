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

  const getTabFromPath = () => {
    if (location.pathname.includes('/space')) return MYPAGE_TAB[1];
    return MYPAGE_TAB[0];
  };

  const [selectedTab, setSelectedTab] = useState<(typeof MYPAGE_TAB)[number]>(getTabFromPath());

  useEffect(() => {
    setSelectedTab(getTabFromPath());
  }, [location.pathname]);

  const handleNavigation = (tab: (typeof MYPAGE_TAB)[number]) => {
    if (tab === MYPAGE_TAB[0]) {
      navigate(ROUTES.MYPAGE.ROOT({ userId: Number(userId) }));
    }
    if (tab === MYPAGE_TAB[1]) {
      navigate(ROUTES.MYPAGE.SPACE_LIST({ userId: Number(userId) }));
    }
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
