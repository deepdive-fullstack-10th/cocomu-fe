import styled from '@emotion/styled';

interface sizeStyleProps {
  width?: number;
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;

  overflow: hidden;
`;

const ProblemDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2.4rem;

  padding: 2rem;

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const ReferenceContainer = styled.div`
  ${({ theme }) => theme.font.common.block};
`;

const ResizablePanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-right: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-left: 1px solid ${({ theme }) => theme.color.gray[600]};
  background: ${({ theme }) => theme.color.gray[50]};

  width: 1.3rem;
`;

const ResizeButton = styled.div`
  width: 0.5rem;
  height: 10rem;
  background: ${({ theme }) => theme.color.gray[600]};
  border-radius: 20rem;

  cursor: pointer;
`;

const RightContent = styled.div<sizeStyleProps>`
  width: ${({ width }) => `${width}%` || '40%'};
`;

const S = {
  PageContainer,
  MainContent,
  ProblemDescription,
  ReferenceContainer,
  ResizablePanel,
  ResizeButton,
  RightContent,
};

export default S;
