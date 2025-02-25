import styled from '@emotion/styled';

interface sizeStyleProps {
  height?: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const ActiveUsersContainer = styled.div<sizeStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
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

const S = { Container, ActiveUsersContainer, UserCount, ResizablePanel, ResizeButton };

export default S;
