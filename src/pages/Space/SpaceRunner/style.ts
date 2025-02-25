import styled from '@emotion/styled';

const SpaceRunnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${({ theme }) => theme.font.common.default}
`;

const TabList = styled.div`
  display: flex;
  height: 4rem;

  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  background: ${({ theme }) => theme.color.gray[200]};
`;

const Tab = styled.div<{ select: boolean }>`
  display: flex;
  align-items: center;

  color: ${({ select, theme }) => (select ? `${theme.color.primary[300]}` : `${theme.color.gray[800]}`)};
  border-right: 1px solid ${({ theme }) => theme.color.gray[600]};
  padding: 2rem;

  cursor: pointer;
  user-select: none;
`;

const Runner = styled.textarea`
  width: 100%;
  flex: 1;
  padding: 1rem;
  resize: none;
  border: none;
`;

const S = {
  SpaceRunnerContainer,
  TabList,
  Tab,
  Runner,
};

export default S;
