import UserProfile from '@components/_common/molecules/UserProfile';
import { UserData } from '@customTypes/user';
import TabMenu from '@components/_common/molecules/TabMenu';
import { MYPAGE_TAB } from '@constants/constants';
import { useState } from 'react';
import Button from '@components/_common/atoms/Button';
import S from './style';

const user: UserData = {
  id: 1,
  nickName: '김서현',
  profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
};

export default function Header() {
  const [selectedTab, setSelectedTab] = useState<string>('');

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
    </>
  );
}
