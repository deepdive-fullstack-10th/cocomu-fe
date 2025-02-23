import styled from '@emotion/styled';

const TestCaseItem = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Input = styled.input<{ remove?: boolean }>`
  width: 43.3rem;
  padding: 0.6rem ${({ remove }) => (remove ? '4rem' : '2.4rem')};

  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 0.8rem;

  ${({ theme }) => theme.font.common.default};
  color: ${({ theme }) => theme.color.gray[900]};
`;

const Output = styled.input`
  width: 25.6rem;
  padding: 0.6rem 2.4rem;

  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 0.8rem;

  ${({ theme }) => theme.font.common.default};
  color: ${({ theme }) => theme.color.gray[900]};
`;

const RemoveButton = styled.button`
  position: absolute;
  left: 2%;
`;

const S = {
  TestCaseItem,
  Input,
  Output,
  RemoveButton,
};

export default S;
