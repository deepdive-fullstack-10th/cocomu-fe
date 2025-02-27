import styled from '@emotion/styled';

interface sizeStyleProps {
  height?: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const CodingContainer = styled.div<sizeStyleProps>`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  height: ${({ height }) => `${height}%` || '70%'};

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  user-select: none;
`;

const MonacoContainer = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: auto;
`;

const TabContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.color.gray[100]};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[600]};
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

const S = { Container, CodingContainer, TabContainer, MonacoContainer, ResizablePanel, ResizeButton, RunnerContainer };

export default S;
