import React, { useState } from 'react';
import ProfileImage from '@components/_common/atoms/ProfileImage';
import DropdownItem from '@components/_common/atoms/DropdownItem';
import { BsChevronDown } from 'react-icons/bs';
import S from './style';

interface NavbarProps {
  isLogined: boolean;
}

export default function NavBar({ isLogined }: NavbarProps) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
    console.log('Dropdown toggled:', !isDropdownOpen);
  };

  const handleLogoClick = () => {
    // 로고를 클릭하면 메인 페이지로 이동하도록 구현
  };

  const handleStudyClick = () => {
    // 스터디 모집 버튼을 클릭하면 스터디 작성 페이지로 이동하도록 구현
  };

  const handleMyPageClick = () => {
    // 마이페이지 아이템을 클릭하면 로그인 한 사용자의 마이페이지로 이동하도록 구현
  };

  const handleLogoutClick = () => {
    // 로그아웃 아이템을 클릭하면 로그아웃 진행하도록 구현
  };

  const handleLoginClick = () => {
    // 로그인 버튼을 클릭하면 로그인 진행하도록 구현
  };

  return (
    <S.NavbarContainer>
      <S.LogoImage
        src='/src/assets/logo.png'
        alt='Logo'
        onClick={handleLogoClick}
      />

      <S.NavItems>
        <S.StudyButton
          to='/study'
          onClick={handleStudyClick}
        >
          스터디 모집하기
        </S.StudyButton>

        <S.RightSection>
          {isLogined ? (
            <S.ProfileSection>
              <ProfileImage size='sm' />
              <S.Icon onClick={handleDropdownToggle}>
                <BsChevronDown size={15} />
              </S.Icon>
              {isDropdownOpen && (
                <S.DropdownMenu>
                  <DropdownItem
                    item='마이페이지'
                    onClick={handleMyPageClick}
                    size='md'
                    color='black'
                  />
                  <DropdownItem
                    item='로그아웃'
                    onClick={handleLogoutClick}
                    size='md'
                    color='black'
                  />
                </S.DropdownMenu>
              )}
            </S.ProfileSection>
          ) : (
            <S.LoginButton onClick={handleLoginClick}>로그인</S.LoginButton>
          )}
        </S.RightSection>
      </S.NavItems>
    </S.NavbarContainer>
  );
}
