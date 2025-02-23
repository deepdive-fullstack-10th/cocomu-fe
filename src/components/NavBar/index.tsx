import { useState } from 'react';
import ProfileImage from '@components/_common/atoms/ProfileImage';
import { BsChevronDown } from 'react-icons/bs';
import Icon from '@components/_common/atoms/Icon';
import Button from '@components/_common/atoms/Button';
import DropdownList from '@components/_common/molecules/DropdownList';
import S from './style';

interface NavbarProps<T extends readonly string[]> {
  items: T;
  isLogined: boolean;
}

export default function NavBar<T extends readonly string[]>({ items, isLogined }: NavbarProps<T>) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => setDropdownOpen((prev) => !prev);

  const handleLogoClick = () => {
    // 로고 클릭 시 메인 페이지로 이동
  };

  const handleStudyClick = () => {
    // 스터디 모집 페이지로 이동
  };

  const handleMyPageClick = () => {
    // 마이페이지 이동
  };

  const handleLogoutClick = () => {
    // 로그아웃 실행
  };

  const handleLoginClick = () => {
    // 로그인 실행
  };

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

        {isLogined ? (
          <S.ProfileSection>
            <ProfileImage size='x_sm' />
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
