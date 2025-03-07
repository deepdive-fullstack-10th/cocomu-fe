import UserProfile from '@components/_common/molecules/UserProfile';
import { UserData } from '@customTypes/user';
import TabMenu from '@components/_common/molecules/TabMenu';
import { MYPAGE_TAB } from '@constants/constants';
import { useEffect, useState } from 'react';
import Button from '@components/_common/atoms/Button';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '@constants/path';
import S from './style';

const user: UserData = {
  id: 1,
  nickName: '홍길동',
  profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
};

const user2: UserData = {
  id: 2,
  nickName: '새싹이',
  profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
};

export default function MyPage() {
  const [selectedTab, setSelectedTab] = useState<(typeof MYPAGE_TAB)[number]>(MYPAGE_TAB[0]);
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

  useEffect(() => {
    handleNavigation(selectedTab);
  }, [selectedTab]);

  return (
    <>
      <S.HeaderContainer>
        <UserProfile
          user={user}
          size='lg'
          upload
        />
        <S.MyPageButtonGroup>
          <Button
            type='reset'
            size='md'
            color='white'
            shape='default'
          >
            취소
          </Button>
          <Button
            type='submit'
            size='md'
            color='primary'
            shape='default'
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
