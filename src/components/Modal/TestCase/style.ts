import styled from '@emotion/styled';

const TestcaseContainer = styled.div`
  width: 100rem;
  max-height: 35rem;

  padding: 2rem 3rem;
`;

const TestcaseHeaderLeft = styled.header`
  ${({ theme }) => theme.font.heading[300]}
`;

const TestcaseHeaderRight = styled.div`
  ${({ theme }) => theme.font.heading[300]}
  display:flex;
  justify-content: end;
  cursor: pointer;
`;

const TestcaseItemContainer = styled.div`
  height: fit-content;
  max-height: 18rem;

  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TestcaseAddButton = styled.button`
  width: 100%;
  margin-bottom: 1rem;
`;

const TestcaseFooter = styled.footer<{ status: 'DEFAULT' | 'CUSTOM' }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-top: 1rem;

  & > button:first-of-type {
    margin-right: ${({ status }) => (status === 'DEFAULT' ? '0rem' : '2rem')};
  }
`;

const S = {
  TestcaseContainer,
  TestcaseHeaderLeft,
  TestcaseItemContainer,
  TestcaseFooter,
  TestcaseAddButton,
  TestcaseHeaderRight,
};

export default S;
