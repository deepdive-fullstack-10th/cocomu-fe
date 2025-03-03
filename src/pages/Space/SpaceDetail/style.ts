import styled from '@emotion/styled';

interface sizeStyleProps {
  width?: number;
}

const Container = styled.div`
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

const RightContent = styled.div<sizeStyleProps>`
  width: ${({ width }) => `${width}%` || '40%'};
`;

const S = {
  Container,
  MainContent,
  ProblemDescription,
  ReferenceContainer,
  RightContent,
};

export default S;
