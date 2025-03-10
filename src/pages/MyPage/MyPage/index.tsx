import UserProfile from '@components/_common/molecules/UserProfile';
import TabMenu from '@components/_common/molecules/TabMenu';
import { useEffect, useState } from 'react';
import Button from '@components/_common/atoms/Button';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '@constants/path';
import { MYPAGE_TAB } from '@constants/common';
import { UserData } from '@customTypes/user';
import S from './style';

export default function MyPage() {
  const tempUser: UserData = {
    id: 1,
    nickname: '코코무',
    profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
  };

  const [selectedTab, setSelectedTab] = useState<(typeof MYPAGE_TAB)[number]>(MYPAGE_TAB[0]);
  const [visibleCancel, setVisibleCancel] = useState<boolean>(false);
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  const handleNavigation = (tab: (typeof MYPAGE_TAB)[number]) => {
    if (!userId) return;

    if (tab === MYPAGE_TAB[0]) {
      navigate(ROUTES.MYPAGE.DETAIL({ userId }));
    }
    if (tab === MYPAGE_TAB[1]) {
      navigate(ROUTES.MYPAGE.SPACE({ userId }));
    }
  };

  const handleMyPageEdit = () => {
    setVisibleCancel(true);
    /* todo: 수정 버튼 클릭시 */
  };

  const handleCancelEdit = () => {
    /* todo: 입력된 데이터 -> '' 변경 */
  };

  useEffect(() => {
    handleNavigation(selectedTab);
  }, [selectedTab]);

  return (
    <>
      <S.HeaderContainer>
        <UserProfile
          user={tempUser}
          size='lg'
          upload
        />
        <S.MyPageButtonGroup>
          {visibleCancel && (
            <Button
              type='reset'
              size='md'
              color='white'
              shape='default'
              onClick={handleCancelEdit}
            >
              취소
            </Button>
          )}
          <Button
            type='submit'
            size='md'
            color='primary'
            shape='default'
            onClick={handleMyPageEdit}
          >
            수정
          </Button>
        </S.MyPageButtonGroup>
      </S.HeaderContainer>
      <TabMenu
        tabs={MYPAGE_TAB}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />
      <Outlet />
    </>
  );
}
