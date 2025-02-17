import styled from '@emotion/styled';

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

const RemoveButton = styled.button`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const S = {
  TestcaseItem,
  Input,
  Output,
  RemoveButton,
};

export default S;
