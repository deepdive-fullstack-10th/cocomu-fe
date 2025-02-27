import styled from '@emotion/styled';

interface sizeStyleProps {
  height?: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const CodingContainer = styled.div<sizeStyleProps>`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  height: ${({ height }) => `${height}%` || '70%'};

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  user-select: none;
`;

const TabContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.color.gray[100]};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[600]};
`;

const UserCount = styled.div`
  ${({ theme }) => theme.font.heading[700]};
  color: ${({ theme }) => theme.color.gray[800]};

  margin-top: 5rem;
`;

const ResizablePanel = styled.div`
  width: 100%;
  height: 1.3rem;

  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  background: ${({ theme }) => theme.color.gray[50]};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResizeButton = styled.div`
  width: 10rem;
  height: 0.5rem;
  background: ${({ theme }) => theme.color.gray[600]};
  border-radius: 20rem;
  cursor: pointer;
`;

const RunnerContainer = styled.div`
  display: flex;
  flex: 1;
`;

const S = { Container, CodingContainer, TabContainer, UserCount, ResizablePanel, ResizeButton, RunnerContainer };

export default S;
