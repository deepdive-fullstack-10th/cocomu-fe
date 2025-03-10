import UserProfile from '@components/_common/molecules/UserProfile';
import { UserData } from '@customTypes/user';
import TabMenu from '@components/_common/molecules/TabMenu';
import { useEffect, useState } from 'react';
import Button from '@components/_common/atoms/Button';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '@constants/path';
import S from './style';

const user: UserData = {
  id: 1,
  nickname: '홍길동',
  profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
};

const user2: UserData = {
  id: 2,
  nickname: '새싹이',
  profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
};

export default function MyPage() {
  const MYPAGE_TAB = ['참여한 스터디 보기', '참여한 코딩 스페이스 보기'] as const;

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
    /* todo: onChange -> '' 변경 */
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
