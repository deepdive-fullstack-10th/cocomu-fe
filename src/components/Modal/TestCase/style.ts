import styled from '@emotion/styled';

const TestcaseContainer = styled.div`
  width: 100rem;
  max-height: 35rem;

  padding: 2rem 3rem;

  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TestcaseHeader = styled.header`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.font.heading[300]}
`;

const TestcaseItem = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 1rem 0rem;
`;

const Input = styled.input<{ remove?: boolean }>`
  width: 65%;

  padding: 1rem;
  padding-left: ${({ remove }) => (remove ? '3rem' : '1rem')};

  border: 1px solid ${({ theme }) => theme.color.gray[900]};
  border-radius: 1rem;

  ${({ theme }) => theme.font.common.default}
`;

const Output = styled.input`
  width: 30%;

  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.color.gray[900]};
  border-radius: 1rem;

  ${({ theme }) => theme.font.common.default}
`;

const TestcaseAddButton = styled.button`
  width: 100%;
  margin-bottom: 1rem;
`;

const TestcaseFooter = styled.footer<{ status: 'DEFAULT' | 'CUSTOM' }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > button:first-of-type {
    margin-right: ${({ status }) => (status === 'DEFAULT' ? '0rem' : '2rem')};
  }
`;

const RemoveButton = styled.button`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const S = {
  TestcaseContainer,
  TestcaseHeader,
  TestcaseFooter,
  TestcaseItem,
  Input,
  Output,
  TestcaseAddButton,
  RemoveButton,
};

export default S;
