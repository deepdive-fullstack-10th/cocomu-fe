import styled from '@emotion/styled';

const TextWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  margin-bottom: 2rem;
`;

const AlertText = styled.p`
  ${({ theme }) => theme.font.common.default};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const S = {
  TextWrapper,
  AlertText,
};

export default S;
