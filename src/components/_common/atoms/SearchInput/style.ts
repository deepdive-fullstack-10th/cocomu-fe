import styled from '@emotion/styled';
import { css } from '@emotion/react';

type SizeType = keyof typeof sizeStyles;

const sizeStyles = {
  md: css`
    width: 24rem;
  `,
  lg: css`
    width: 32rem;
  `,
};

const SearchContainer = styled.div<{ size: SizeType }>`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  ${({ size }) => sizeStyles[size]}
`;

const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  background-color: ${({ theme }) => theme.color.gray[50]};
  padding: 0.6rem 1.2rem 0.5rem 3.6rem;
  border-radius: 3.2rem;
`;

const Icon = styled.div`
  border: none;
  position: absolute;
  transform: translate(0.5rem, 0.5rem);
`;

const S = {
  SearchContainer,
  SearchInput,
  Icon,
};

export default S;
