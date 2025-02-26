import styled from '@emotion/styled';

interface sizeStyleProps {
  width?: number;
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem;
  background: ${({ theme }) => theme.color.gray[200]};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[600]};

  ${({ theme }) => theme.font.heading[200]};

  user-select: none;
`;

const NavbarLeftcontent = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const NavbarRightcontent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 25rem;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
`;

const ProblemDescription = styled.div<sizeStyleProps>`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: ${({ width }) => `${width}%` || '40%'};

  overflow-y: auto;
  overflow-x: hidden;

  background: ${({ theme }) => theme.color.gray[50]};
  & > :first-of-type {
    max-height: 70vh;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
const ReferenceContainer = styled.div`
  & > :first-of-type {
    ${({ theme }) => theme.font.heading[400]};
    color: ${({ theme }) => theme.color.gray[950]};
  }
  & > :last-of-type {
    ${({ theme }) => theme.font.common.default};
    color: ${({ theme }) => theme.color.gray[950]};
  }
  margin-top: 6rem;
`;

const ResizablePanel = styled.div`
  width: 1.3rem;

  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  background: ${({ theme }) => theme.color.gray[50]};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResizeButton = styled.div`
  width: 0.5rem;
  height: 10rem;
  background: ${({ theme }) => theme.color.gray[600]};
  border-radius: 20rem;
  cursor: pointer;
`;

const RightContent = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  background: ${({ theme }) => theme.color.gray[200]};
  border-top: 1px solid ${({ theme }) => theme.color.gray[600]};
  padding: 0.5rem 1rem;
`;

const FooterItem = styled.div`
  width: 10rem;
`;

const S = {
  PageContainer,
  Navbar,
  NavbarLeftcontent,
  NavbarRightcontent,
  MainContent,
  ProblemDescription,
  ReferenceContainer,
  ResizablePanel,
  ResizeButton,
  RightContent,
  Footer,
  FooterItem,
};

export default S;
