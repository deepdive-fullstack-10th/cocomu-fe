import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

const selectedItemStyles = (theme: Theme) => css`
  ${theme.font.common.defaultAccent};
  color: ${theme.color.gray[950]};

  border-top: 1px solid ${theme.color.gray[950]};
  border-bottom: 1px solid ${theme.color.gray[950]};
`;

const Column = styled.div`
  position: relative;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const SwipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.2rem;
  overflow: hidden;
`;

const Item = styled.div<{ selected: boolean }>`
  ${({ theme }) => theme.font.common.smallAccent};
  color: ${({ theme }) => theme.color.gray[500]};

  ${({ selected, theme }) => selected && selectedItemStyles(theme)}

  padding: 0.3rem 0;
  transition: all 0.2s ease;
  cursor: pointer;
`;

const Label = styled.div`
  ${({ theme }) => theme.font.common.default};
  color: ${({ theme }) => theme.color.gray[900]};
`;

const S = { Column, SwipeWrapper, Item, Label };

export default S;
