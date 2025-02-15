import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

const commonStyle = (theme: Theme) => css`
  padding: 0.5rem 2rem;

  color: ${theme.color.gray[600]};
  ${theme.font.common.default};
  transition: color 0.2s ease;
`;

const Dropdown2Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 14rem;
`;

const Dropdown2Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 3.2rem;
  transition: border-color 0.2s ease;

  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.gray[900]};
    color: ${({ theme }) => theme.color.gray[900]};

    div {
      color: ${({ theme }) => theme.color.gray[900]};
    }
  }
`;

const DropdownText = styled.div`
  ${({ theme }) => commonStyle(theme)};
`;

const IconContainer = styled.div`
  ${({ theme }) => commonStyle(theme)};
`;

const DropdownItemContainer = styled.div<{ isOpen: boolean }>`
  margin-top: 0.5rem;
  width: 100%;
  border: ${({ isOpen, theme }) => (isOpen ? `1px solid ${theme.color.gray[600]}` : 'none')};
  border-radius: 0.8rem;
  transition: all 0.2s ease-in-out;
`;

const S = {
  Dropdown2Container,
  Dropdown2Header,
  DropdownText,
  IconContainer,
  DropdownItemContainer,
};

export default S;
