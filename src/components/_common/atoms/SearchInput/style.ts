import styled from '@emotion/styled';
import { css } from '@emotion/react';

const sizeStyles = {
  md: css`
    width: 24rem;
  `,
  lg: css`
    width: 32rem;
  `,
};

type SizeType = keyof typeof sizeStyles;

const SearchContainer = styled.div<{ size: SizeType }>`
  position: relative;
  display: flex;
  flex-direction: row;
  ${({ size }) => sizeStyles[size]}
`;

const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  background-color: ${({ theme }) => theme.color.gray[50]};
  padding: 0.6rem 1.6rem 0.6rem 3.2rem;
  border-radius: 3.2rem;
  cursor: pointer;
`;

const Icon = styled.div`
  border: none;
  position: absolute;
  transform: translate(80%, 40%);
`;

const S = {
  SearchContainer,
  SearchInput,
  Icon,
};

export default S;
