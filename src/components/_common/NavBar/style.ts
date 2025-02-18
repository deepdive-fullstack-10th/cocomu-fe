import styled from '@emotion/styled';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
`;

const LogoImage = styled.img`
  height: 6rem;
  cursor: pointer;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 21rem;
`;

const LoginButton = styled.button`
  width: 8rem;
  color: ${({ theme }) => theme.color.gray[950]};
  ${({ theme }) => theme.font.common.default};
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 0.5rem;
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
  LoginButton,
  ProfileSection,
  DropdownMenu,
  IconWrapper,
};

export default S;
