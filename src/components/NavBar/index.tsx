import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';

import ProfileImage from '@components/_common/atoms/ProfileImage';
import Icon from '@components/_common/atoms/Icon';
import Button from '@components/_common/atoms/Button';
import DropdownList from '@components/_common/molecules/DropdownList';

import { UserData } from '@customTypes/user';

import { ROUTES } from '@constants/path';
import { useModalStore } from '@stores/useModalStore';

import S from './style';

interface NavbarProps<T extends readonly string[]> {
  items: T;
  isLoggedIn: boolean;
  user?: UserData;
}

export default function NavBar<T extends readonly string[]>({ items, isLoggedIn, user }: NavbarProps<T>) {
  const navigate = useNavigate();
  const { open } = useModalStore();

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => setDropdownOpen((prev) => !prev);

  const handleLogoClick = () => navigate(ROUTES.ROOT());

  const handleStudyClick = () => navigate(ROUTES.STUDY.CREATE());

  const handleMyPageClick = () => navigate(ROUTES.MYPAGE({ userId: String(user.id) }));

  const handleLogoutClick = () => {
    console.log('로그아웃 실행');
  };

  const handleLoginClick = () => open('login');

  const handleItemSelect = (selectedItem: string) => {
    if (selectedItem === '마이페이지') {
      handleMyPageClick();
    } else if (selectedItem === '로그아웃') {
      handleLogoutClick();
    }
    setDropdownOpen(false);
  };

  return (
    <S.Container>
      <S.LogoImage
        src='https://cdn.cocomu.co.kr/images/default/Logo.png'
        alt='Logo'
        onClick={handleLogoClick}
      />

      <S.NavItems>
        <Button
          onClick={handleStudyClick}
          color='primary'
          size='lg'
          shape='round'
        >
          스터디 모집하기
        </Button>

        {isLoggedIn ? (
          <S.ProfileSection>
            <ProfileImage
              src={user.profileImageUrl}
              size='x_sm'
            />
            <Icon
              size='sm'
              color='950'
              onClick={handleDropdownToggle}
            >
              <BsChevronDown />
            </Icon>
            {isDropdownOpen && (
              <DropdownList
                items={[...items]}
                size='md'
                color='black'
                onItemSelect={handleItemSelect}
              />
            )}
          </S.ProfileSection>
        ) : (
          <S.LoginButton onClick={handleLoginClick}>로그인</S.LoginButton>
        )}
      </S.NavItems>
    </S.Container>
  );
}
