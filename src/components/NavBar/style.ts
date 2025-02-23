import styled from '@emotion/styled';

const Container = styled.nav`
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
  gap: 3.8rem;
`;

const LoginButton = styled.button`
  color: ${({ theme }) => theme.color.gray[950]};
  ${({ theme }) => theme.font.heading[100]};
`;

const ProfileSection = styled.div`
  position: relative;

  display: flex;
  align-items: center;
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

const S = {
  Container,
  LogoImage,
  NavItems,
  LoginButton,
  ProfileSection,
  DropdownMenu,
};

export default S;
