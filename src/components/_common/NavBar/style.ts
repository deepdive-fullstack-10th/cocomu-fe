import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: ${({ theme }) => theme.color.gray[100]};
`;

const LogoImage = styled.img`
  height: 6rem;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 10rem;
`;

const StudyButton = styled(Link)`
  padding: 0.4rem 1.2rem;
  background-color: ${({ theme }) => theme.color.primary[300]};
  color: ${({ theme }) => theme.color.gray[50]};
  font: ${({ theme }) => theme.font.common.default};
  border-radius: 5rem;
  text-decoration: none;
  min-width: 10rem;
  &:hover {
    background-color: ${({ theme }) => theme.color.primary[500]};
  }
`;

const LoginButton = styled.button`
  width: 8rem;
  text-align: center;
  color: ${({ theme }) => theme.color.gray[900]};
  font: ${({ theme }) => theme.font.common.default};
  font-weight: bold;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 0.5rem;
  width: 8rem;
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  background-color: ${({ theme }) => theme.color.gray[50]};
  border: 1px solid ${({ theme }) => theme.color.gray[200]};
  border-radius: 0.5rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const S = {
  NavbarContainer,
  LogoImage,
  NavItems,
  RightSection,
  StudyButton,
  LoginButton,
  ProfileSection,
  DropdownMenu,
  IconWrapper,
};

export default S;
